// Main JavaScript file for Mozno Advisory Website
// Handles navigation, forms, 3D logo loading, and interactive elements

// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initializeNavigation();
    initializeContactForms();
    initialize3DLoader();
    initializeSmoothScrolling();
    initializeAnimations();
});

// Navigation functionality
function initializeNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function() {
            navLinks.classList.toggle('nav-open');
            hamburger.classList.toggle('hamburger-active');
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!hamburger.contains(event.target) && !navLinks.contains(event.target)) {
                navLinks.classList.remove('nav-open');
                hamburger.classList.remove('hamburger-active');
            }
        });
        
        // Close menu when clicking on nav links
        const navLinkItems = navLinks.querySelectorAll('a');
        navLinkItems.forEach(link => {
            link.addEventListener('click', function() {
                navLinks.classList.remove('nav-open');
                hamburger.classList.remove('hamburger-active');
            });
        });
    }
}

// Contact form handling
function initializeContactForms() {
    const contactForms = document.querySelectorAll('.contact-form, form[action*="formspree"]');
    
    contactForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Form validation
            if (validateForm(form)) {
                submitForm(form);
            }
        });
    });
}

// Form validation
function validateForm(form) {
    const requiredFields = form.querySelectorAll('[required]');
    let isValid = true;
    
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            showFieldError(field, 'This field is required');
            isValid = false;
        } else {
            clearFieldError(field);
        }
        
        // Email validation
        if (field.type === 'email' && field.value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(field.value)) {
                showFieldError(field, 'Please enter a valid email address');
                isValid = false;
            }
        }
        
        // Phone validation
        if (field.type === 'tel' && field.value) {
            const phoneRegex = /^[+]?[\d\s\-\(\)]{10,}$/;
            if (!phoneRegex.test(field.value)) {
                showFieldError(field, 'Please enter a valid phone number');
                isValid = false;
            }
        }
    });
    
    return isValid;
}

// Show field error
function showFieldError(field, message) {
    clearFieldError(field);
    
    const errorElement = document.createElement('div');
    errorElement.className = 'field-error';
    errorElement.textContent = message;
    errorElement.style.color = '#e74c3c';
    errorElement.style.fontSize = '0.875rem';
    errorElement.style.marginTop = '0.25rem';
    
    field.style.borderColor = '#e74c3c';
    field.parentNode.appendChild(errorElement);
}

// Clear field error
function clearFieldError(field) {
    const existingError = field.parentNode.querySelector('.field-error');
    if (existingError) {
        existingError.remove();
    }
    field.style.borderColor = '';
}

// Submit form
async function submitForm(form) {
    const submitButton = form.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    
    // Show loading state
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;
    
    try {
        // If using Formspree or similar service
        const formData = new FormData(form);
        const response = await fetch(form.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });
        
        if (response.ok) {
            showSuccessMessage('Thank you! Your message has been sent successfully. We will get back to you within 24 hours.');
            form.reset();
        } else {
            throw new Error('Form submission failed');
        }
    } catch (error) {
        console.error('Form submission error:', error);
        showErrorMessage('Sorry, there was an error sending your message. Please try again or contact us directly.');
    } finally {
        // Reset button state
        submitButton.textContent = originalText;
        submitButton.disabled = false;
    }
}

// Show success message
function showSuccessMessage(message) {
    const alertElement = createAlert(message, 'success');
    document.body.appendChild(alertElement);
    setTimeout(() => alertElement.remove(), 5000);
}

// Show error message
function showErrorMessage(message) {
    const alertElement = createAlert(message, 'error');
    document.body.appendChild(alertElement);
    setTimeout(() => alertElement.remove(), 7000);
}

// Create alert element
function createAlert(message, type) {
    const alert = document.createElement('div');
    alert.className = `alert alert-${type}`;
    alert.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 10000;
        padding: 1rem 1.5rem;
        border-radius: 6px;
        color: white;
        font-weight: 500;
        max-width: 400px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        animation: slideInRight 0.3s ease-out;
        background-color: ${type === 'success' ? '#27ae60' : '#e74c3c'};
    `;
    alert.textContent = message;
    
    // Add close button
    const closeButton = document.createElement('button');
    closeButton.innerHTML = '×';
    closeButton.style.cssText = `
        background: none;
        border: none;
        color: white;
        font-size: 1.5rem;
        float: right;
        margin-left: 1rem;
        cursor: pointer;
        padding: 0;
        line-height: 1;
    `;
    closeButton.onclick = () => alert.remove();
    alert.appendChild(closeButton);
    
    return alert;
}

// 3D Logo Loader (using Three.js)
function initialize3DLoader() {
    const loaderElement = document.getElementById('logo-loader');
    if (!loaderElement || typeof THREE === 'undefined') {
        console.log('3D loader not available or Three.js not loaded');
        return;
    }
    
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
        alpha: true, 
        antialias: true 
    });
    
    renderer.setSize(200, 200);
    renderer.setClearColor(0x000000, 0);
    loaderElement.appendChild(renderer.domElement);
    
    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);
    
    // Camera position
    camera.position.set(0, 0, 5);
    
    // Load 3D model if GLTFLoader is available
    if (typeof THREE.GLTFLoader !== 'undefined') {
        const loader = new THREE.GLTFLoader();
        
        loader.load(
            '../images/3d/mozno-logo-3d.glb',
            function(gltf) {
                const model = gltf.scene;
                model.scale.set(1.2, 1.2, 1.2);
                scene.add(model);
                
                // Animation
                let mixer;
                if (gltf.animations.length > 0) {
                    mixer = new THREE.AnimationMixer(model);
                    gltf.animations.forEach((clip) => {
                        mixer.clipAction(clip).play();
                    });
                }
                
                // Render loop
                const clock = new THREE.Clock();
                function animate() {
                    requestAnimationFrame(animate);
                    
                    // Rotate model
                    model.rotation.y += 0.01;
                    
                    // Update animations
                    if (mixer) {
                        mixer.update(clock.getDelta());
                    }
                    
                    renderer.render(scene, camera);
                }
                animate();
                
                // Hide loader after 3 seconds
                setTimeout(() => {
                    if (loaderElement.parentElement) {
                        loaderElement.parentElement.style.opacity = '0';
                        setTimeout(() => {
                            if (loaderElement.parentElement) {
                                loaderElement.parentElement.remove();
                            }
                        }, 500);
                    }
                }, 3000);
            },
            function(progress) {
                console.log('Loading progress:', (progress.loaded / progress.total) * 100 + '%');
            },
            function(error) {
                console.error('Error loading 3D model:', error);
                // Fallback: show logo image
                loaderElement.innerHTML = `
                    <img src="./assets/logos/Mozno Advisory Logo New.png" 
                         alt="Mozno Advisory Logo" 
                         style="height: 80px; animation: pulse 2s infinite;" />
                `;
                
                // Hide after 2.5 seconds
                setTimeout(() => {
                    if (loaderElement.parentElement) {
                        loaderElement.parentElement.remove();
                    }
                }, 2500);
            }
        );
    } else {
        console.log('GLTFLoader not available, showing fallback');
        // Fallback without 3D
        loaderElement.innerHTML = `
            <img src="./assets/logos/Mozno Advisory Logo New.png" 
                 alt="Mozno Advisory Logo" 
                 style="height: 80px; animation: pulse 2s infinite;" />
        `;
        
        setTimeout(() => {
            if (loaderElement.parentElement) {
                loaderElement.parentElement.remove();
            }
        }, 2500);
    }
}

// Smooth scrolling for anchor links
function initializeSmoothScrolling() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80; // Account for fixed header
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Initialize animations and interactions
function initializeAnimations() {
    // Fade in animation for cards
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
    
    // Observe all cards and sections for animation
    const animateElements = document.querySelectorAll('.card, .section');
    animateElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(element);
    });
    
    // Back to top functionality
    const backToTopButton = createBackToTopButton();
    document.body.appendChild(backToTopButton);
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 500) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });
}

// Create back to top button
function createBackToTopButton() {
    const button = document.createElement('button');
    button.innerHTML = '↑';
    button.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        z-index: 1000;
        display: none;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: var(--green, #3d6955);
        color: white;
        border: none;
        font-size: 1.5rem;
        cursor: pointer;
        box-shadow: 0 2px 10px rgba(0,0,0,0.2);
        transition: all 0.3s ease;
    `;
    
    button.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
    });
    
    button.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
    
    return button;
}

// CSS animations for loading states
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            opacity: 0;
            transform: translateX(300px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    @keyframes pulse {
        0%, 100% {
            opacity: 1;
        }
        50% {
            opacity: 0.7;
        }
    }
    
    .nav-links.nav-open {
        display: flex !important;
        flex-direction: column;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: white;
        box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        padding: 1rem;
        gap: 1rem;
    }
    
    .hamburger-active {
        transform: rotate(180deg);
    }
    
    @media (min-width: 769px) {
        .nav-links.nav-open {
            position: static !important;
            flex-direction: row !important;
            background: transparent !important;
            box-shadow: none !important;
            padding: 0 !important;
        }
    }
`;
document.head.appendChild(style);

// Utility functions
const utils = {
    // Debounce function
    debounce: function(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },
    
    // Format currency
    formatCurrency: function(amount, currency = 'INR') {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: currency,
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(amount);
    },
    
    // Generate unique ID
    generateId: function() {
        return 'id-' + Math.random().toString(36).substr(2, 9);
    }
};

// Export for use in other scripts
window.MoznoUtils = utils;

console.log('Mozno Advisory website initialized successfully');
