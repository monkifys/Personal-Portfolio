// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const chatbotToggle = document.querySelector('.chatbot-toggle');
const chatbotContainer = document.querySelector('.chatbot-container');
const chatbotMessages = document.querySelector('#chatbotMessages');
const chatInput = document.querySelector('#chatInput');
const contactForm = document.querySelector('#contactForm');
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Mobile Navigation Toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Theme Toggle Functionality
// Check for saved theme preference or default to light mode
const savedTheme = localStorage.getItem('theme') || 'light';
body.setAttribute('data-theme', savedTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Add transition effect
    body.style.transition = 'all 0.3s ease';
});

// Interactive Cursor Trail - Removed for professional appearance

// Loading Screen - Removed for professional appearance

// Scroll Progress Bar - Removed for professional appearance

// Particle Effects - Removed for professional appearance

// Smooth scrolling for navigation links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 70; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const currentTheme = body.getAttribute('data-theme');
    
    if (window.scrollY > 100) {
        if (currentTheme === 'dark') {
            navbar.style.background = 'rgba(26, 26, 46, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
        }
    } else {
        if (currentTheme === 'dark') {
            navbar.style.background = 'rgba(26, 26, 46, 0.95)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.2)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        }
    }
});

// AI Chatbot Functionality
let isChatbotOpen = false;

function toggleChatbot() {
    isChatbotOpen = !isChatbotOpen;
    if (isChatbotOpen) {
        chatbotContainer.classList.add('active');
        chatInput.focus();
    } else {
        chatbotContainer.classList.remove('active');
    }
}

// AI Chatbot Knowledge Base
const aiKnowledge = {
    skills: {
        keywords: ['skills', 'programming', 'languages', 'technologies', 'what can you do'],
        response: "I'm proficient in multiple programming languages with the following efficiency levels: Python (95%), JavaScript (88%), C (90%), C++ (85%), and Java (80%). I also work with technologies like React, Node.js, MongoDB, Git, Docker, AWS, Machine Learning, and Data Science. My expertise spans from low-level programming to modern web development and AI applications."
    },
    projects: {
        keywords: ['projects', 'work', 'portfolio', 'what have you built'],
        response: "I've worked on several significant projects including: 1) Space Cargo Management System - An AI-powered system for managing cargo logistics in space missions, 2) Solar Project Management - An intelligent solar energy management system with IoT integration, and 3) AI Portfolio Assistant - An intelligent chatbot built with natural language processing."
    },
    experience: {
        keywords: ['experience', 'hackathon', 'achievements', 'competitions'],
        response: "I have notable achievements in national-level hackathons: 1) National Space Hackathon Winner (2023) - Led development of Space Cargo Management System for IIT Delhi & ISRO, 2) Smart India Hackathon Finalist (2023) - Developed Solar Project Management System for Government of India. These experiences demonstrate my innovative problem-solving and technical excellence."
    },
    contact: {
        keywords: ['contact', 'email', 'phone', 'reach', 'get in touch'],
        response: "You can reach me through: Email: your.email@example.com, Phone: +91 98765 43210, or use the contact form on this website. I'm always open to discussing new opportunities and collaborations!"
    },
    about: {
        keywords: ['about', 'who are you', 'background', 'introduction'],
        response: "I'm Sankha Singhamahapatra, a passionate AI-powered creative developer with expertise in multiple programming languages and technologies. My journey is marked by significant achievements in national-level hackathons, where I've demonstrated innovative problem-solving skills and technical excellence. I specialize in creating intelligent solutions that bridge traditional software development with cutting-edge AI technologies."
    },
    certifications: {
        keywords: ['certifications', 'awards', 'recognition', 'achievements'],
        response: "My key certifications and achievements include: 1) National Space Hackathon Winner (IIT Delhi & ISRO, 2023), 2) Smart India Hackathon Finalist (Government of India, 2023), 3) Machine Learning Specialization (Coursera, 2023). These represent my commitment to continuous learning and excellence in technology."
    }
};

// AI Response Generator
function generateAIResponse(userMessage) {
    const message = userMessage.toLowerCase();
    
    // Check for greetings
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
        return "Hello! I'm your AI portfolio assistant. I can help you learn about my skills, projects, experience, certifications, or contact information. What would you like to know?";
    }
    
    // Check for thanks
    if (message.includes('thank') || message.includes('thanks')) {
        return "You're welcome! Feel free to ask me anything else about the portfolio.";
    }
    
    // Check knowledge base
    for (const category in aiKnowledge) {
        const keywords = aiKnowledge[category].keywords;
        if (keywords.some(keyword => message.includes(keyword))) {
            return aiKnowledge[category].response;
        }
    }
    
    // Default response
    return "I'm not sure about that specific question, but I can help you with information about my skills, projects, experience, certifications, or contact details. What would you like to know?";
}

// Add message to chat
function addMessage(message, isUser = false) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${isUser ? 'user-message' : 'bot-message'}`;
    messageDiv.innerHTML = `<p>${message}</p>`;
    chatbotMessages.appendChild(messageDiv);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

// Send message function
function sendMessage() {
    const message = chatInput.value.trim();
    if (message === '') return;
    
    // Add user message
    addMessage(message, true);
    chatInput.value = '';
    
    // Simulate AI thinking
    setTimeout(() => {
        const aiResponse = generateAIResponse(message);
        addMessage(aiResponse, false);
    }, 500);
}

// Handle Enter key in chat input
function handleChatInput(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}

// Contact Form Handling
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');
        
        // Simple validation
        if (!name || !email || !subject || !message) {
            alert('Please fill in all fields');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address');
            return;
        }
        
        // Simulate form submission
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 2000);
    });
}

// Scroll animations
function animateOnScroll() {
    const elements = document.querySelectorAll('.scroll-animate');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('animate');
        }
    });
}

// Add scroll animation class to elements
function addScrollAnimationClass() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const elements = section.querySelectorAll('.about-content, .skills-grid, .timeline-item, .project-card, .certification-card, .contact-content');
        elements.forEach(element => {
            element.classList.add('scroll-animate');
        });
    });
}

// Initialize scroll animations
addScrollAnimationClass();
window.addEventListener('scroll', animateOnScroll);

// Skill bars animation
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    skillBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0%';
        setTimeout(() => {
            bar.style.width = width;
        }, 500);
    });
}

// Enhanced skill section interactions
const skillsSection = document.querySelector('#skills');
if (skillsSection) {
    const skillCards = skillsSection.querySelectorAll('.skill-card');
    const techCards = skillsSection.querySelectorAll('.tech-card');
    const skillBars = skillsSection.querySelectorAll('.skill-progress');
    
    // Skill card interactions
    skillCards.forEach(card => {
        card.addEventListener('click', () => {
            // Remove active class from all cards
            skillCards.forEach(c => c.classList.remove('active'));
            // Add active class to clicked card
            card.classList.add('active');
            
            // Show skill description
            const description = card.querySelector('.skill-description');
            if (description) {
                description.style.opacity = '1';
                description.style.maxHeight = '200px';
            }
        });
        
        // Hover effects
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
            // Hide description after delay
            setTimeout(() => {
                const description = card.querySelector('.skill-description');
                if (description && !card.classList.contains('active')) {
                    description.style.opacity = '0';
                    description.style.maxHeight = '0';
                }
            }, 300);
        });
    });
    
    // Tech card interactions
    techCards.forEach(card => {
        card.addEventListener('click', () => {
            // Add pulse animation
            card.style.animation = 'pulse 0.6s ease-in-out';
            setTimeout(() => {
                card.style.animation = '';
            }, 600);
        });
        
        // Hover effects
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-8px) scale(1.08)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Skill bar animation when section is visible
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                skillBars.forEach((bar, index) => {
                    const width = bar.style.width;
                    bar.style.width = '0%';
                    setTimeout(() => {
                        bar.style.width = width;
                    }, index * 200); // Staggered animation
                });
                skillObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    
    skillObserver.observe(skillsSection);
    
    // Add skill comparison functionality
    let selectedSkills = [];
    
    skillCards.forEach(card => {
        card.addEventListener('dblclick', () => {
            const skillName = card.dataset.skill;
            const skillLevel = card.dataset.level;
            
            if (selectedSkills.length < 2) {
                selectedSkills.push({ name: skillName, level: skillLevel, element: card });
                card.style.border = '2px solid var(--primary-color)';
                
                if (selectedSkills.length === 2) {
                    // Compare skills
                    setTimeout(() => {
                        compareSkills(selectedSkills[0], selectedSkills[1]);
                        // Reset selection
                        selectedSkills.forEach(skill => {
                            skill.element.style.border = '';
                        });
                        selectedSkills = [];
                    }, 500);
                }
            }
        });
    });
}

// Skill comparison function
function compareSkills(skill1, skill2) {
    const level1 = parseInt(skill1.level);
    const level2 = parseInt(skill2.level);
    
    let message = `Comparing ${skill1.name} (${skill1.level}%) vs ${skill2.name} (${skill2.level}%): `;
    
    if (level1 > level2) {
        message += `${skill1.name} is ${level1 - level2}% stronger`;
    } else if (level2 > level1) {
        message += `${skill2.name} is ${level2 - level1}% stronger`;
    } else {
        message += 'Both skills are at the same level';
    }
    
    showNotification(message, 'info');
}

// Initialize skill graphs
function initializeSkillGraphs() {
    const skillsData = [
        { name: 'C/C++', level: 90 },
        { name: 'Python', level: 95 },
        { name: 'Java', level: 80 },
        { name: 'JavaScript', level: 88 },
        { name: 'React', level: 85 }
    ];
    
    // Radar Chart
    const radarCanvas = document.getElementById('radarChart');
    if (radarCanvas) {
        const radarCtx = radarCanvas.getContext('2d');
        drawRadarChart(radarCtx, skillsData);
    }
    
    // Bar Chart
    const barCanvas = document.getElementById('barChart');
    if (barCanvas) {
        const barCtx = barCanvas.getContext('2d');
        drawBarChart(barCtx, skillsData);
    }
    
    // Pie Chart
    const pieCanvas = document.getElementById('pieChart');
    if (pieCanvas) {
        const pieCtx = pieCanvas.getContext('2d');
        drawPieChart(pieCtx, skillsData);
    }
}

// Draw Radar Chart
function drawRadarChart(ctx, data) {
    const centerX = ctx.canvas.width / 2;
    const centerY = ctx.canvas.height / 2;
    const radius = Math.min(centerX, centerY) - 60;
    const numSkills = data.length;
    const angleStep = (2 * Math.PI) / numSkills;
    
    // Draw grid circles
    for (let i = 1; i <= 5; i++) {
        const currentRadius = (radius * i) / 5;
        ctx.beginPath();
        ctx.strokeStyle = 'rgba(102, 126, 234, 0.2)';
        ctx.lineWidth = 1;
        
        for (let j = 0; j < numSkills; j++) {
            const angle = j * angleStep - Math.PI / 2;
            const x = centerX + currentRadius * Math.cos(angle);
            const y = centerY + currentRadius * Math.sin(angle);
            
            if (j === 0) {
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y);
            }
        }
        ctx.closePath();
        ctx.stroke();
    }
    
    // Draw axis lines
    ctx.strokeStyle = 'rgba(102, 126, 234, 0.4)';
    ctx.lineWidth = 2;
    
    for (let i = 0; i < numSkills; i++) {
        const angle = i * angleStep - Math.PI / 2;
        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);
        
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(x, y);
        ctx.stroke();
    }
    
    // Draw skill data
    ctx.beginPath();
    ctx.strokeStyle = 'linear-gradient(135deg, #667eea, #764ba2)';
    ctx.lineWidth = 3;
    ctx.fillStyle = 'rgba(102, 126, 234, 0.3)';
    
    for (let i = 0; i < numSkills; i++) {
        const angle = i * angleStep - Math.PI / 2;
        const skillRadius = (radius * data[i].level) / 100;
        const x = centerX + skillRadius * Math.cos(angle);
        const y = centerY + skillRadius * Math.sin(angle);
        
        if (i === 0) {
            ctx.moveTo(x, y);
        } else {
            ctx.lineTo(x, y);
        }
    }
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    
    // Draw data points
    for (let i = 0; i < numSkills; i++) {
        const angle = i * angleStep - Math.PI / 2;
        const skillRadius = (radius * data[i].level) / 100;
        const x = centerX + skillRadius * Math.cos(angle);
        const y = centerY + skillRadius * Math.sin(angle);
        
        ctx.beginPath();
        ctx.fillStyle = '#667eea';
        ctx.arc(x, y, 6, 0, 2 * Math.PI);
        ctx.fill();
        
        // Add glow effect
        ctx.shadowColor = '#667eea';
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.shadowBlur = 0;
    }
}

// Draw Bar Chart
function drawBarChart(ctx, data) {
    const canvas = ctx.canvas;
    const width = canvas.width;
    const height = canvas.height;
    const padding = 40;
    const chartWidth = width - 2 * padding;
    const chartHeight = height - 2 * padding;
    const barWidth = chartWidth / data.length;
    const maxValue = Math.max(...data.map(d => d.level));
    
    // Clear canvas
    ctx.clearRect(0, 0, width, height);
    
    // Draw grid lines
    ctx.strokeStyle = 'rgba(102, 126, 234, 0.1)';
    ctx.lineWidth = 1;
    
    for (let i = 0; i <= 5; i++) {
        const y = padding + (chartHeight * i) / 5;
        ctx.beginPath();
        ctx.moveTo(padding, y);
        ctx.lineTo(width - padding, y);
        ctx.stroke();
    }
    
    // Draw bars
    data.forEach((skill, index) => {
        const barHeight = (chartHeight * skill.level) / maxValue;
        const x = padding + index * barWidth + barWidth * 0.1;
        const y = height - padding - barHeight;
        const barW = barWidth * 0.8;
        
        // Create gradient
        const gradient = ctx.createLinearGradient(x, y, x, height - padding);
        gradient.addColorStop(0, '#667eea');
        gradient.addColorStop(1, '#764ba2');
        
        // Draw bar
        ctx.fillStyle = gradient;
        ctx.fillRect(x, y, barW, barHeight);
        
        // Add shadow
        ctx.shadowColor = 'rgba(102, 126, 234, 0.3)';
        ctx.shadowBlur = 10;
        ctx.fillRect(x, y, barW, barHeight);
        ctx.shadowBlur = 0;
        
        // Draw percentage text
        ctx.fillStyle = '#333';
        ctx.font = '14px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(`${skill.level}%`, x + barW / 2, y - 10);
        
        // Draw skill name
        ctx.fillStyle = '#666';
        ctx.font = '12px Arial';
        ctx.fillText(skill.name, x + barW / 2, height - padding + 20);
    });
}

// Draw Pie Chart
function drawPieChart(ctx, data) {
    const canvas = ctx.canvas;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = Math.min(centerX, centerY) - 40;
    
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Calculate total
    const total = data.reduce((sum, skill) => sum + skill.level, 0);
    
    // Define colors
    const colors = [
        'linear-gradient(135deg, #667eea, #764ba2)',
        'linear-gradient(135deg, #f093fb, #f5576c)',
        'linear-gradient(135deg, #4facfe, #00f2fe)',
        'linear-gradient(135deg, #43e97b, #38f9d7)',
        'linear-gradient(135deg, #fa709a, #fee140)'
    ];
    
    let currentAngle = -Math.PI / 2;
    
    data.forEach((skill, index) => {
        const sliceAngle = (2 * Math.PI * skill.level) / total;
        
        // Create gradient
        const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, radius);
        const colorStops = colors[index].match(/#[a-fA-F0-9]{6}/g);
        gradient.addColorStop(0, colorStops[0]);
        gradient.addColorStop(1, colorStops[1]);
        
        // Draw slice
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.arc(centerX, centerY, radius, currentAngle, currentAngle + sliceAngle);
        ctx.closePath();
        ctx.fillStyle = gradient;
        ctx.fill();
        
        // Add border
        ctx.strokeStyle = '#fff';
        ctx.lineWidth = 2;
        ctx.stroke();
        
        // Draw percentage text
        const textAngle = currentAngle + sliceAngle / 2;
        const textRadius = radius * 0.7;
        const textX = centerX + textRadius * Math.cos(textAngle);
        const textY = centerY + textRadius * Math.sin(textAngle);
        
        ctx.fillStyle = '#fff';
        ctx.font = 'bold 14px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(`${skill.level}%`, textX, textY);
        
        currentAngle += sliceAngle;
    });
}

    // Initialize graphs when skills section is visible
    const graphObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    initializeSkillGraphs();
                }, 500);
                graphObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    
    graphObserver.observe(skillsSection);

// Typing animation for hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Initialize typing animation when page loads
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.innerHTML;
        setTimeout(() => {
            typeWriter(heroTitle, originalText, 50);
        }, 1000);
    }
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Add CSS for loading animation
const loadingStyle = document.createElement('style');
loadingStyle.textContent = `
    body {
        opacity: 0;
        transition: opacity 0.5s ease;
    }
    body.loaded {
        opacity: 1;
    }
`;
document.head.appendChild(loadingStyle);

// Initialize tooltips for skill tags
function initTooltips() {
    const skillTags = document.querySelectorAll('.skill-tag');
    skillTags.forEach(tag => {
        tag.addEventListener('mouseenter', (e) => {
            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            tooltip.textContent = `Expertise in ${tag.textContent}`;
            tooltip.style.cssText = `
                position: absolute;
                background: #333;
                color: white;
                padding: 5px 10px;
                border-radius: 5px;
                font-size: 12px;
                z-index: 1000;
                pointer-events: none;
                transform: translateY(-30px);
            `;
            tag.style.position = 'relative';
            tag.appendChild(tooltip);
        });
        
        tag.addEventListener('mouseleave', () => {
            const tooltip = tag.querySelector('.tooltip');
            if (tooltip) {
                tooltip.remove();
            }
        });
    });
}

// Initialize tooltips when page loads
window.addEventListener('load', initTooltips);

// Add smooth reveal animation for sections
function revealSections() {
    const sections = document.querySelectorAll('section');
    const revealSection = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    };
    
    const sectionObserver = new IntersectionObserver(revealSection, {
        root: null,
        threshold: 0.15,
    });
    
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(50px)';
        section.style.transition = 'all 0.6s ease';
        sectionObserver.observe(section);
    });
}

// Initialize section reveal
revealSections();

// Add particle effect to hero section
function createParticles() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    const particleContainer = document.createElement('div');
    particleContainer.className = 'particles';
    particleContainer.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        pointer-events: none;
    `;
    
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: rgba(255, 255, 255, 0.5);
            border-radius: 50%;
            animation: float ${Math.random() * 3 + 2}s linear infinite;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
        `;
        particleContainer.appendChild(particle);
    }
    
    hero.appendChild(particleContainer);
    
    // Add CSS animation
    const particleStyle = document.createElement('style');
    particleStyle.textContent = `
        @keyframes float {
            0% {
                transform: translateY(100vh) rotate(0deg);
                opacity: 1;
            }
            100% {
                transform: translateY(-100px) rotate(360deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(particleStyle);
}

// Particles initialization - Removed for professional appearance

// Cursor trail effect - Removed for professional appearance

// Add keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Ctrl/Cmd + K to toggle chatbot
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        toggleChatbot();
    }
    
    // Escape to close chatbot
    if (e.key === 'Escape' && isChatbotOpen) {
        toggleChatbot();
    }
});

// Add performance optimization
function optimizePerformance() {
    // Lazy load images
    const images = document.querySelectorAll('img');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => {
        if (img.dataset.src) {
            imageObserver.observe(img);
        }
    });
}

// Initialize performance optimizations
optimizePerformance();

// Add error handling
window.addEventListener('error', (e) => {
    console.error('Portfolio error:', e.error);
});

// Resume Functions
function downloadResume(format) {
    // Create a simple PDF-like content
    const resumeContent = `
        SANKHA SINGHAMAHAPATRA
        AI-Powered Creative Developer
        
        CONTACT
        Email: your.email@example.com
        Phone: +91 98765 43210
        Location: India
        
        EDUCATION
        Bachelor of Technology in Computer Science & Engineering
        2020 - 2024
        
        ACHIEVEMENTS
        • National Space Hackathon Winner (IIT Delhi & ISRO) - 2023
        • Smart India Hackathon Finalist (Government of India) - 2023
        
        SKILLS
        • C (90% efficiency)
        • C++ (85% efficiency)
        • Python (80% efficiency)
        • Java (75% efficiency)
        • JavaScript (70% efficiency)
        
        EXPERIENCE
        • Solar Project - Smart India Hackathon
        • Space Cargo Management System - National Space Hackathon
        
        TECHNICAL SKILLS
        • Frontend: React, HTML5, CSS3, JavaScript
        • Backend: Node.js, Express
        • AI/ML: Machine Learning, AI Integration
        • Tools: Git, VS Code, Figma
    `;
    
    if (format === 'pdf') {
        // Create a downloadable text file (simulating PDF)
        const blob = new Blob([resumeContent], { type: 'text/plain' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'Sankha_Singhamahapatra_Resume.txt';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
        
        // Show success message
        showNotification('Resume downloaded successfully!', 'success');
    }
}

function viewResumeOnline() {
    // Create a modal to display the resume
    const modal = document.createElement('div');
    modal.className = 'resume-modal';
    modal.innerHTML = `
        <div class="resume-modal-content">
            <div class="resume-modal-header">
                <h2>Sankha Singhamahapatra - Resume</h2>
                <button class="resume-modal-close" onclick="closeResumeModal()">×</button>
            </div>
            <div class="resume-modal-body">
                <div class="resume-section">
                    <h3>Contact Information</h3>
                    <p><strong>Email:</strong> your.email@example.com</p>
                    <p><strong>Phone:</strong> +91 98765 43210</p>
                    <p><strong>Location:</strong> India</p>
                </div>
                
                <div class="resume-section">
                    <h3>Education</h3>
                    <p><strong>Bachelor of Technology</strong></p>
                    <p>Computer Science & Engineering</p>
                    <p><em>2020 - 2024</em></p>
                </div>
                
                <div class="resume-section">
                    <h3>Achievements</h3>
                    <ul>
                        <li><strong>National Space Hackathon Winner</strong> - IIT Delhi & ISRO (2023)</li>
                        <li><strong>Smart India Hackathon Finalist</strong> - Government of India (2023)</li>
                    </ul>
                </div>
                
                <div class="resume-section">
                    <h3>Technical Skills</h3>
                    <div class="skill-bars">
                        <div class="skill-bar">
                            <span>C</span>
                            <div class="skill-progress">
                                <div class="skill-fill" style="width: 90%"></div>
                            </div>
                            <span>90%</span>
                        </div>
                        <div class="skill-bar">
                            <span>C++</span>
                            <div class="skill-progress">
                                <div class="skill-fill" style="width: 85%"></div>
                            </div>
                            <span>85%</span>
                        </div>
                        <div class="skill-bar">
                            <span>Python</span>
                            <div class="skill-progress">
                                <div class="skill-fill" style="width: 80%"></div>
                            </div>
                            <span>80%</span>
                        </div>
                        <div class="skill-bar">
                            <span>Java</span>
                            <div class="skill-progress">
                                <div class="skill-fill" style="width: 75%"></div>
                            </div>
                            <span>75%</span>
                        </div>
                        <div class="skill-bar">
                            <span>JavaScript</span>
                            <div class="skill-progress">
                                <div class="skill-fill" style="width: 70%"></div>
                            </div>
                            <span>70%</span>
                        </div>
                    </div>
                </div>
                
                <div class="resume-section">
                    <h3>Projects</h3>
                    <ul>
                        <li><strong>Solar Project</strong> - Smart India Hackathon</li>
                        <li><strong>Space Cargo Management System</strong> - National Space Hackathon</li>
                    </ul>
                </div>
            </div>
        </div>
    `;
    
    // Add modal styles
    const modalStyle = document.createElement('style');
    modalStyle.textContent = `
        .resume-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            animation: fadeIn 0.3s ease;
        }
        
        .resume-modal-content {
            background: var(--card-bg);
            border-radius: 20px;
            max-width: 800px;
            width: 90%;
            max-height: 90vh;
            overflow-y: auto;
            box-shadow: var(--shadow-hover);
            animation: slideInUp 0.3s ease;
        }
        
        .resume-modal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 2rem;
            border-bottom: 1px solid var(--border-color);
        }
        
        .resume-modal-header h2 {
            color: var(--text-primary);
            margin: 0;
        }
        
        .resume-modal-close {
            background: none;
            border: none;
            font-size: 2rem;
            color: var(--text-secondary);
            cursor: pointer;
            padding: 0;
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            transition: all 0.3s ease;
        }
        
        .resume-modal-close:hover {
            background: var(--accent-color);
            color: var(--text-light);
        }
        
        .resume-modal-body {
            padding: 2rem;
        }
        
        .resume-section {
            margin-bottom: 2rem;
        }
        
        .resume-section h3 {
            color: var(--accent-color);
            margin-bottom: 1rem;
            font-size: 1.2rem;
        }
        
        .resume-section p, .resume-section li {
            color: var(--text-primary);
            line-height: 1.6;
            margin-bottom: 0.5rem;
        }
        
        .skill-bars {
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }
        
        .skill-bar {
            display: flex;
            align-items: center;
            gap: 1rem;
        }
        
        .skill-bar span:first-child {
            min-width: 80px;
            color: var(--text-primary);
            font-weight: 500;
        }
        
        .skill-progress {
            flex: 1;
            height: 8px;
            background: var(--border-color);
            border-radius: 4px;
            overflow: hidden;
        }
        
        .skill-fill {
            height: 100%;
            background: linear-gradient(90deg, var(--accent-color), var(--accent-secondary));
            border-radius: 4px;
            transition: width 1s ease;
        }
        
        .skill-bar span:last-child {
            min-width: 40px;
            color: var(--text-secondary);
            font-size: 0.9rem;
        }
        
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        
        @keyframes slideInUp {
            from { transform: translateY(50px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }
        
        @media (max-width: 768px) {
            .resume-modal-content {
                width: 95%;
                margin: 1rem;
            }
            
            .resume-modal-header {
                padding: 1rem;
            }
            
            .resume-modal-body {
                padding: 1rem;
            }
        }
    `;
    
    document.head.appendChild(modalStyle);
    document.body.appendChild(modal);
    
    // Animate skill bars
    setTimeout(() => {
        const skillFills = modal.querySelectorAll('.skill-fill');
        skillFills.forEach(fill => {
            const width = fill.style.width;
            fill.style.width = '0%';
            setTimeout(() => {
                fill.style.width = width;
            }, 100);
        });
    }, 300);
}

function closeResumeModal() {
    const modal = document.querySelector('.resume-modal');
    if (modal) {
        modal.remove();
    }
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Add notification styles
    const notificationStyle = document.createElement('style');
    notificationStyle.textContent = `
        .notification {
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 1rem 1.5rem;
            border-radius: 10px;
            color: white;
            font-weight: 500;
            z-index: 10001;
            animation: slideInRight 0.3s ease;
        }
        
        .notification-success {
            background: var(--success-color);
        }
        
        .notification-info {
            background: var(--accent-color);
        }
        
        @keyframes slideInRight {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
    `;
    
    document.head.appendChild(notificationStyle);
    document.body.appendChild(notification);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Add console welcome message
console.log(`
%c🚀 Welcome to my AI Portfolio! 
%c
%cI'm a creative developer passionate about AI and innovation.
%cFeel free to explore the code and reach out if you'd like to collaborate!
%c
%cGitHub: https://github.com/yourusername
%cLinkedIn: https://linkedin.com/in/yourusername
`,
'color: #667eea; font-size: 20px; font-weight: bold;',
'',
'color: #333; font-size: 14px;',
'color: #333; font-size: 14px;',
'',
'color: #667eea; font-size: 12px;',
'color: #667eea; font-size: 12px;'
); 