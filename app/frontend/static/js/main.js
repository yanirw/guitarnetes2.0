// Main JavaScript file for Guitarnetes 2.0

// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', () => {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    for (let anchor of anchorLinks) {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }
    
    // Add active class to navbar links based on scroll position
    const sections = document.querySelectorAll('section[id]');
    
    function highlightNavOnScroll() {
        const scrollY = window.pageYOffset;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            
            const navLink = document.querySelector(`.nav-links a[href="#${sectionId}"]`);
            
            if (navLink && scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLink.classList.add('active');
            } else if (navLink) {
                navLink.classList.remove('active');
            }
        });
    }
    
    window.addEventListener('scroll', highlightNavOnScroll);
});

// Mobile navigation toggle (if needed for responsive design)
function setupMobileNav() {
    const navToggle = document.querySelector('.mobile-nav-toggle');
    
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            const navLinks = document.querySelector('.nav-links');
            navLinks.classList.toggle('active');
            navToggle.classList.toggle('open');
        });
    }
}

// Initialize any components that need JavaScript
function initComponents() {
    // This function can be expanded as needed for additional components
    setupMobileNav();
}

// Call initialization functions
document.addEventListener('DOMContentLoaded', initComponents);