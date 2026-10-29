/**
 * Premium Buttons JavaScript
 * Adds interactive effects to premium buttons
 */

document.addEventListener('DOMContentLoaded', function() {
    // Add ripple effect to buttons with ripple class
    const rippleButtons = document.querySelectorAll('.ripple, .btn-premium');
    
    rippleButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const ripple = document.createElement('span');
            ripple.classList.add('ripple-effect');
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            
            button.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    // Add 3D hover effect to premium buttons
    const premiumButtons = document.querySelectorAll('.btn-premium');
    
    premiumButtons.forEach(button => {
        button.addEventListener('mousemove', function(e) {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const deltaX = (x - centerX) / centerX;
            const deltaY = (y - centerY) / centerY;
            
            const rotateX = deltaY * -5; // Rotate around X-axis (up/down)
            const rotateY = deltaX * 5;  // Rotate around Y-axis (left/right)
            
            button.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-3px)`;
            button.style.boxShadow = `
                0 ${4 + Math.abs(deltaY * 5)}px ${10 + Math.abs(deltaY * 5)}px rgba(255, 127, 0, 0.3),
                0 ${1 + Math.abs(deltaY * 2)}px ${3 + Math.abs(deltaY * 2)}px rgba(0, 0, 0, 0.1)
            `;
        });
        
        button.addEventListener('mouseleave', function() {
            button.style.transform = '';
            button.style.boxShadow = '';
        });
    });
    
    // Add scroll reveal animation to premium elements
    const premiumElements = document.querySelectorAll('.card-premium, .section-premium-title, .section-premium-subtitle');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    
    premiumElements.forEach(element => {
        observer.observe(element);
    });
    
    // Add hover effect to premium cards
    const premiumCards = document.querySelectorAll('.card-premium');
    
    premiumCards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const deltaX = (x - centerX) / centerX;
            const deltaY = (y - centerY) / centerY;
            
            const rotateX = deltaY * -3; // Rotate around X-axis (up/down)
            const rotateY = deltaX * 3;  // Rotate around Y-axis (left/right)
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
            card.style.boxShadow = `
                0 ${8 + Math.abs(deltaY * 5)}px ${24 + Math.abs(deltaY * 5)}px rgba(0, 0, 0, 0.12)
            `;
        });
        
        card.addEventListener('mouseleave', function() {
            card.style.transform = '';
            card.style.boxShadow = '';
        });
    });
    
    // Add smooth scroll for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]:not([href="#"])');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
}); 