document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.querySelector('.sidebar');
    const hamburger = document.querySelector('.hamburger');
    const hamburgerIcon = hamburger.querySelector('i');
    
    hamburger.addEventListener('click', function(e) {
        e.preventDefault();
        sidebar.classList.toggle('active');
        
        // Toggle between hamburger and close icons
        if (sidebar.classList.contains('active')) {
            hamburgerIcon.classList.remove('fa-bars');
            hamburgerIcon.classList.add('fa-xmark');
            this.setAttribute('data-title', 'Close');
        } else {
            hamburgerIcon.classList.remove('fa-xmark');
            hamburgerIcon.classList.add('fa-bars');
            this.setAttribute('data-title', 'Menu');
        }
    });
    
    // Set Active Side Bar Nav (your existing code)
    let links = document.querySelectorAll(".sidebar a.side");
    let currentUrl = window.location.pathname;
    
    links.forEach(link => {
        if (link.getAttribute("href") === currentUrl) {
            links.forEach(l => l.classList.remove("active"));
            link.classList.add("active");
        }
    });
});

hamburger.addEventListener('click', function(e) {
    e.preventDefault();
    
    const icon = this.querySelector('i');
    const isOpening = !sidebar.classList.contains('active');
    
    // Animate icon first
    if (isOpening) {
        icon.classList.replace('fa-bars', 'fa-xmark');
        this.setAttribute('data-title', 'Close');
        icon.style.transform = 'rotate(90deg)';
    } else {
        icon.classList.replace('fa-xmark', 'fa-bars');
        this.setAttribute('data-title', 'Menu');
        icon.style.transform = 'rotate(0deg)';
    }
    
    // Toggle sidebar after slight delay
    setTimeout(() => {
        sidebar.classList.toggle('active');
    }, 50);
});