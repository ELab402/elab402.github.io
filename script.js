document.addEventListener('DOMContentLoaded', function() {
    // --- Element Selections ---
    const visitorSpans = document.querySelectorAll('.visitor-count');
    const navLinks = document.querySelectorAll('.sidebar .nav-links a');
    const menuToggle = document.getElementById('menu-toggle');
    const closeBtn = document.getElementById('close-btn');
    const sidebar = document.getElementById('sidebar');

    // --- Mobile Navigation Toggle ---
    if (menuToggle && sidebar && closeBtn) {
        menuToggle.addEventListener('click', () => {
            document.body.classList.add('sidebar-open');
        });

        closeBtn.addEventListener('click', () => {
            document.body.classList.remove('sidebar-open');
        });
    }

    // --- CORRECTED Visitor Counter Logic ---
    function updateVisitorCount() {
        // Use localStorage to save the count permanently in the browser
        let count = localStorage.getItem('visitorCount');

        if (count === null) {
            // If no count is found, start at a random base number (e.g., between 5000-6000)
            // This only happens ONCE for the very first visit.
            count = Math.floor(5000 + Math.random() * 1000);
        } else {
            // If a count is found, convert it to a number and increment it by 1
            count = parseInt(count) + 1;
        }

        // Save the new, updated count back to localStorage
        localStorage.setItem('visitorCount', count);
        
        // Display the new count on the page
        visitorSpans.forEach(span => {
            span.textContent = count;
        });
    }

    // --- Active Link Highlighting Logic ---
    function highlightActiveLink() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        
        navLinks.forEach(link => {
            const linkPage = link.getAttribute('href');
            link.classList.remove('active'); // Reset all links
            if (linkPage === currentPage) {
                link.classList.add('active');
            }
        });
    }

    // --- Initial Setup ---
    updateVisitorCount();
    highlightActiveLink();
});
