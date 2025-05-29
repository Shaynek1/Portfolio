// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
        if (window.innerWidth <= 768) {
            navLinks.style.display = 'none';
        }
    }
});

// Form Validation and Submission
// const contactForm = document.getElementById('contact-form');

// contactForm.addEventListener('submit', async (e) => {
//     e.preventDefault();

//     // Get form data
//     const formData = {
//         name: document.getElementById('name').value,
//         email: document.getElementById('email').value,
//         service: document.getElementById('service').value,
//         message: document.getElementById('message').value
//     };

//     // Basic validation
//     if (!formData.name || !formData.email || !formData.service || !formData.message) {
//         alert('Please fill in all fields');
//         return;
//     }

//     // Email validation
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(formData.email)) {
//         alert('Please enter a valid email address');
//         return;
//     }

//     try {
//         // Here you would typically send the form data to your server
//         // For now, we'll just show a success message
//         alert('Thank you for your message! I will get back to you soon.');
//         contactForm.reset();
//     } catch (error) {
//         alert('There was an error sending your message. Please try again later.');
//     }
// });

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Only close mobile menu on mobile devices
            if (window.innerWidth <= 768) {
                navLinks.style.display = 'none';
            }
        }
    });
});

// Add active class to nav links on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 60) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
}); 