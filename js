// ================================
// LUXURY LANDING PAGE - JAVASCRIPT
// ================================

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // ================================
    // MOBILE MENU TOGGLE
    // ================================
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenuBtn.classList.toggle('active');
            mobileMenu.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        mobileLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenuBtn.classList.remove('active');
                mobileMenu.classList.remove('active');
            });
        });
    }

    // ================================
    // NAVBAR SCROLL EFFECT
    // ================================
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // ================================
    // SMOOTH SCROLL FOR ANCHOR LINKS
    // ================================
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            // Only smooth scroll if it's not just "#"
            if (targetId !== '#') {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    const offsetTop = targetElement.offsetTop - 80; // Account for fixed navbar
                    
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // ================================
    // INTERSECTION OBSERVER FOR ANIMATIONS
    // ================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all animated elements
    const animatedElements = document.querySelectorAll('.fade-in-up, .slide-in-right');
    animatedElements.forEach(element => {
        observer.observe(element);
    });

    // ================================
    // PROJECT ITEMS HOVER EFFECT
    // ================================
    const projectItems = document.querySelectorAll('.project-item');
    
    projectItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(10px)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
        });
    });

    // ================================
    // ADD PARALLAX EFFECT TO BACKGROUNDS
    // ================================
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.hero-bg-image, .cta-bg-image');
        
        parallaxElements.forEach(element => {
            const speed = 0.5;
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });

    // ================================
    // LOADING ANIMATION TRIGGER
    // ================================
    // Trigger animations on page load
    setTimeout(function() {
        const heroElements = document.querySelectorAll('.hero-titles, .hero-description, .hero-buttons, .scroll-indicator');
        heroElements.forEach((element, index) => {
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, index * 200);
        });
    }, 100);

    // ================================
    // CURSOR FOLLOW EFFECT (OPTIONAL)
    // ================================
    const createCursor = () => {
        const cursor = document.createElement('div');
        cursor.className = 'custom-cursor';
        cursor.style.cssText = `
            width: 20px;
            height: 20px;
            border: 1px solid #d4af37;
            border-radius: 50%;
            position: fixed;
            pointer-events: none;
            z-index: 9999;
            transition: transform 0.1s ease;
            mix-blend-mode: difference;
            display: none;
        `;
        document.body.appendChild(cursor);

        document.addEventListener('mousemove', (e) => {
            cursor.style.display = 'block';
            cursor.style.left = e.clientX - 10 + 'px';
            cursor.style.top = e.clientY - 10 + 'px';
        });

        // Expand cursor on hover over interactive elements
        const interactiveElements = document.querySelectorAll('a, button, .project-item');
        interactiveElements.forEach(element => {
            element.addEventListener('mouseenter', () => {
                cursor.style.transform = 'scale(2)';
            });
            element.addEventListener('mouseleave', () => {
                cursor.style.transform = 'scale(1)';
            });
        });
    };

    // Uncomment to enable custom cursor
    // createCursor();

    // ================================
    // CONTACT BUTTON ACTIONS
    // ================================
    const contactButtons = document.querySelectorAll('.btn-contact, .btn-contact-mobile, .cta-button');
    
    contactButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Prevent default if it's a button in CTA section
            if (this.classList.contains('cta-button') || this.classList.contains('cta-button-large')) {
                e.preventDefault();
                
                // You can add your contact form modal or redirect here
                alert('Contact form akan muncul di sini.\n\nAnda bisa menghubungkan dengan:\n- Email: contact@elite.com\n- Form modal\n- Redirect ke halaman contact');
                
                // Example: window.location.href = 'mailto:contact@elite.com';
                // Or show a contact modal
            }
        });
    });

    // ================================
    // HANDLE EXTERNAL LINKS
    // ================================
    const externalLinks = document.querySelectorAll('a[href^="http"]');
    externalLinks.forEach(link => {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
    });

    // ================================
    // LAZY LOADING FOR BACKGROUND IMAGES
    // ================================
    const lazyBackgrounds = document.querySelectorAll('.hero-bg-image, .services-bg, .work-bg, .cta-bg-image');
    
    const lazyObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                lazyObserver.unobserve(entry.target);
            }
        });
    });

    lazyBackgrounds.forEach(bg => {
        lazyObserver.observe(bg);
    });

    // ================================
    // SCROLL TO TOP FUNCTIONALITY
    // ================================
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', function() {
            window.scrollTo({
                top: window.innerHeight,
                behavior: 'smooth'
            });
        });
    }

    // ================================
    // PERFORMANCE OPTIMIZATION
    // ================================
    // Debounce scroll events for better performance
    let scrollTimeout;
    let lastScrollY = window.pageYOffset;
    
    window.addEventListener('scroll', function() {
        if (scrollTimeout) {
            window.cancelAnimationFrame(scrollTimeout);
        }
        
        scrollTimeout = window.requestAnimationFrame(function() {
            const currentScrollY = window.pageYOffset;
            
            // Only update if scroll position changed significantly
            if (Math.abs(currentScrollY - lastScrollY) > 5) {
                lastScrollY = currentScrollY;
            }
        });
    }, { passive: true });

    // ================================
    // CONSOLE MESSAGE
    // ================================
    console.log('%c ÉLITE - Luxury Digital Experience ', 'background: #d4af37; color: #0a0a0a; font-size: 16px; padding: 10px;');
    console.log('%c Website Template by ÉLITE ', 'background: #0a0a0a; color: #d4af37; font-size: 12px; padding: 5px;');
});

// ================================
// UTILITY FUNCTIONS
// ================================

// Smooth scroll polyfill for older browsers
if (!('scrollBehavior' in document.documentElement.style)) {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js';
    document.head.appendChild(script);
}

// Check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Throttle function for performance
function throttle(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}
