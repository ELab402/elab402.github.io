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

    // --- Visitor Counter Logic ---
    function updateVisitorCount() {
        let count = sessionStorage.getItem('visitorCount');
        if (count === null) {
            count = Math.floor(2000 + Math.random() * 8000);
        } else {
            count = parseInt(count) + 1;
        }
        sessionStorage.setItem('visitorCount', count);
        
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