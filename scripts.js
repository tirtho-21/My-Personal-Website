// Initialize when document is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS animations
    AOS.init({
        duration: 800,
        easing: 'ease',
        once: true,
        offset: 100
    });

    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            this.classList.toggle('active');
        });
    }

    // Image Carousel Initialization
    const swiper = new Swiper('.swiper-container', {
        // Auto start
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        // Transition speed
        speed: 800,
        // Optional parameters
        loop: true,
        effect: 'slide',
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        // Pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        // Responsive breakpoints
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            // when window width is >= 768px
            768: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            // when window width is >= 1024px
            1024: {
                slidesPerView: 3,
                spaceBetween: 40
            }
        }
    });

    // Testimonials Carousel
    const testimonialsSwiper = new Swiper('.swiper-container-testimonials', {
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        speed: 700,
        loop: true,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        pagination: {
            el: '.swiper-pagination-testimonials',
            clickable: true,
        }
    });

    // Gallery Carousel (if on gallery page)
    const gallerySwiper = document.querySelector('.swiper-container-gallery');
    if (gallerySwiper) {
        new Swiper('.swiper-container-gallery', {
            // Auto start
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            // Transition speed
            speed: 800,
            // Optional parameters
            loop: true,
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            },
            // Navigation arrows
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            // Pagination
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            }
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            // Get the target element
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Close mobile menu if open
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    mobileMenuBtn.classList.remove('active');
                }
                
                // Scroll to the element
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // Offset for fixed header
                    behavior: 'smooth'
                });
            }
        });
    });

    // Newsletter form handling
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            
            // Show success message (in a real application, you would send this to a server)
            alert(`Thank you for subscribing with ${email}! You'll receive our updates soon.`);
            this.reset();
        });
    }

    // Contact form handling
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Form validation
            const name = contactForm.querySelector('#name').value;
            const email = contactForm.querySelector('#email').value;
            const subject = contactForm.querySelector('#subject') ? contactForm.querySelector('#subject').value : '';
            const message = contactForm.querySelector('#message').value;
            
            // Here you would typically send the form data to a server
            console.log('Form submitted:', { name, email, subject, message });
            
            // Show success message
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
        });
    }

    // Scroll to top button functionality
    const scrollTopBtn = document.createElement('button');
    scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollTopBtn.className = 'scroll-top-btn';
    document.body.appendChild(scrollTopBtn);

    // Show/hide scroll-to-top button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollTopBtn.classList.add('show');
        } else {
            scrollTopBtn.classList.remove('show');
        }
    });

    // Scroll to top when button is clicked
    scrollTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Add CSS for scroll-to-top button
    const style = document.createElement('style');
    style.textContent = `
        .scroll-top-btn {
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: var(--gradient-primary);
            color: white;
            border: none;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 20px;
            z-index: 99;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s;
            box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
        }
        
        .scroll-top-btn.show {
            opacity: 1;
            visibility: visible;
        }
        
        .scroll-top-btn:hover {
            background: var(--gradient-secondary);
            transform: translateY(-3px);
            box-shadow: 0 12px 20px rgba(0, 0, 0, 0.3);
        }
        
        /* Mobile menu styles */
        @media (max-width: 768px) {
            .nav-links {
                position: fixed;
                top: 0;
                right: -300px;
                width: 270px;
                height: 100vh;
                background-color: white;
                flex-direction: column;
                padding: 80px 20px 30px;
                transition: right 0.3s ease;
                box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
                z-index: 99;
            }
            
            .nav-links.active {
                right: 0;
            }
            
            .nav-links li {
                margin: 15px 0;
            }
            
            .mobile-menu-btn {
                z-index: 100;
            }
            
            .mobile-menu-btn.active i:before {
                content: "\\f00d";
            }
        }
    `;
    document.head.appendChild(style);

    // YouTube API for better video control (optional)
    function loadYouTubeAPI() {
        // Load the IFrame Player API code asynchronously
        const tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }
    
    // Initialize lightbox if on gallery page
    if (typeof lightbox !== 'undefined') {
        lightbox.option({
            'resizeDuration': 200,
            'wrapAround': true,
            'showImageNumberLabel': false,
            'fadeDuration': 300
        });
    }

    // Dark mode toggle (optional feature)
    const createDarkModeToggle = () => {
        // Create toggle button
        const darkModeToggle = document.createElement('button');
        darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        darkModeToggle.className = 'dark-mode-toggle';
        document.body.appendChild(darkModeToggle);
        
        // Check for saved preference
        const darkMode = localStorage.getItem('darkMode') === 'enabled';
        if (darkMode) {
            document.body.classList.add('dark-mode');
            darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        }
        
        // Toggle dark mode
        darkModeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            
            if (document.body.classList.contains('dark-mode')) {
                localStorage.setItem('darkMode', 'enabled');
                darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
            } else {
                localStorage.setItem('darkMode', null);
                darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
            }
        });
        
        // Add CSS for dark mode
        const darkModeStyle = document.createElement('style');
        darkModeStyle.textContent = `
            .dark-mode-toggle {
                position: fixed;
                bottom: 30px;
                left: 30px;
                width: 50px;
                height: 50px;
                border-radius: 50%;
                background: var(--gradient-primary);
                color: white;
                border: none;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 20px;
                z-index: 99;
                box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
                transition: all 0.3s;
            }
            
            .dark-mode-toggle:hover {
                background: var(--gradient-secondary);
                transform: translateY(-3px);
                box-shadow: 0 12px 20px rgba(0, 0, 0, 0.3);
            }
            
            .dark-mode {
                --text-color: #f5f5f5;
                --text-light: #aaa;
                --light-color: #333;
                --dark-color: #111;
                background-color: #222;
                color: #f5f5f5;
            }
            
            .dark-mode nav {
                background-color: #111;
                box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
            }
            
            .dark-mode .nav-links a {
                color: #f5f5f5;
            }
            
            .dark-mode .skill-box, 
            .dark-mode .testimonial-card,
            .dark-mode .blog-card,
            .dark-mode .stat-item {
                background-color: #333;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
            }
            
            .dark-mode .footer-content {
                border-color: rgba(255, 255, 255, 0.05);
            }
            
            .dark-mode .qualifications-table {
                background-color: #333;
            }
            
            .dark-mode .qualifications-table tr:hover {
                background-color: #444;
            }
            
            @media (max-width: 768px) {
                .dark-mode .nav-links {
                    background-color: #222;
                    box-shadow: -5px 0 15px rgba(0, 0, 0, 0.3);
                }
            }
        `;
        document.head.appendChild(darkModeStyle);
    };
    
    // Uncomment the line below to enable dark mode toggle
    // createDarkModeToggle();
}); 