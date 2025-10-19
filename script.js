// Simple JavaScript for interactive elements
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add scroll effect to navbar
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.95)';
            navbar.style.backdropFilter = 'blur(10px)';
        } else {
            navbar.style.backgroundColor = '#000000';
            navbar.style.backdropFilter = 'none';
        }
    });

    // Button click handlers
    const volunteerBtn = document.querySelector('.btn-primary');
    const sponsorBtn = document.querySelector('.btn-secondary');
    
    if (volunteerBtn) {
        volunteerBtn.addEventListener('click', function() {
            alert('Thank you for your interest in volunteering! Please contact us for more information.');
        });
    }
    
    if (sponsorBtn) {
        sponsorBtn.addEventListener('click', function() {
            alert('Thank you for your interest in sponsoring! Please contact us for partnership opportunities.');
        });
    }

});
