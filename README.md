# 🚀 AI-Powered Portfolio Website

A modern, fully responsive portfolio website with AI chatbot functionality, showcasing your skills, projects, and achievements. Built with vanilla HTML, CSS, and JavaScript with embedded styling for optimal performance.

## ✨ Features

### 🎨 Modern Design
- **Responsive Layout**: Fully responsive design that works on all devices
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Gradient Themes**: Beautiful gradient color schemes throughout
- **Smooth Animations**: CSS animations and transitions for enhanced user experience

### 🤖 AI Features
- **Intelligent Chatbot**: AI-powered assistant that can answer questions about your portfolio
- **Smart Responses**: Context-aware responses based on user queries
- **Natural Language Processing**: Understands various ways users might ask questions
- **Keyboard Shortcuts**: Ctrl/Cmd + K to open chatbot, Escape to close

### 📱 Interactive Elements
- **Smooth Scrolling**: Seamless navigation between sections
- **Mobile Navigation**: Hamburger menu for mobile devices
- **Scroll Animations**: Elements animate as they come into view
- **Skill Bars**: Animated progress bars for skills visualization
- **Timeline Design**: Beautiful timeline for experience section

### 🎯 Sections Included
- **Hero Section**: Eye-catching introduction with call-to-action buttons
- **About Me**: Personal introduction with statistics and AI highlights
- **Skills**: Programming languages (C, C++, Python, Java, JavaScript) with progress bars
- **Experience**: Timeline showcasing your hackathon achievements
- **Projects**: Featured projects with descriptions and links
- **Certifications**: Awards and achievements display
- **Contact**: Contact form with validation and social links

## 🏆 Your Achievements Featured

### Smart India Hackathon Finalist
- **Project**: Solar Project Management System
- **Technologies**: C++, IoT, Machine Learning
- **Description**: Intelligent solar energy management system with IoT integration and predictive analytics

### National Space Hackathon Winner
- **Project**: Space Cargo Management System
- **Organizers**: IIT Delhi & ISRO
- **Technologies**: Python, AI/ML, React
- **Description**: AI-powered system for managing cargo logistics in space missions

## 🛠️ Technologies Used

- **HTML5**: Semantic markup structure
- **CSS3**: Modern styling with Flexbox and Grid
- **JavaScript (ES6+)**: Interactive functionality and AI chatbot
- **Font Awesome**: Icons for enhanced visual appeal
- **Google Fonts**: Poppins font family for typography

## 🚀 Quick Start

### Prerequisites
- A modern web browser
- Basic knowledge of HTML/CSS/JavaScript (for customization)

### Installation

1. **Clone or Download**
   ```bash
   git clone <repository-url>
   cd ai-portfolio
   ```

2. **Open the Website**
   - Simply open `index.html` in your web browser
   - Or use a local server for better performance:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   
   # Using PHP
   php -S localhost:8000
   ```

3. **Customize Content**
   - Edit `index.html` to update your personal information
   - Modify `styles.css` for design changes
   - Update `script.js` for functionality modifications

## 📝 Customization Guide

### Personal Information
Edit the following sections in `index.html`:

```html
<!-- Update your name -->
<h1 class="hero-title">
    Hi, I'm <span class="highlight">Sankha Singhamahapatra</span>
</h1>

<!-- Update profile picture -->
<div class="profile-image">
    <img src="your-photo.jpg" alt="Your Name" class="profile-photo">
    <i class="fas fa-user-circle profile-icon"></i>
</div>
```

**Profile Picture Instructions:**
1. Replace `profile-picture.svg` with your actual photo file
2. Supported formats: JPG, PNG, WebP
3. Recommended size: 400x400 pixels (minimum 200x200)
4. The image will be automatically cropped to a circle
5. If no image is found, a default icon will be displayed

<!-- Update contact information -->
<div class="contact-item">
    <i class="fas fa-envelope"></i>
    <div>
        <h3>Email</h3>
        <p>your.email@example.com</p>
    </div>
</div>
```

### Skills Section
Update your skills in the skills section:

```html
<div class="skill-item">
    <div class="skill-icon">Python</div>
    <div class="skill-bar">
        <div class="skill-progress" style="width: 95%"></div>
        <span class="skill-percentage">95%</span>
    </div>
</div>
```

**Current Programming Language Efficiency:**
- Python: 95%
- JavaScript: 88%
- C: 90%
- C++: 85%
- Java: 80%

### Projects
Add or modify projects in the projects section:

```html
<div class="project-card">
    <div class="project-image">
        <i class="fas fa-rocket"></i>
    </div>
    <div class="project-content">
        <h3>Your Project Name</h3>
        <p>Project description goes here...</p>
        <div class="project-tech">
            <span class="tech-tag">Technology</span>
        </div>
        <div class="project-links">
            <a href="#" class="project-link"><i class="fas fa-external-link-alt"></i> Live Demo</a>
            <a href="#" class="project-link"><i class="fab fa-github"></i> Code</a>
        </div>
    </div>
</div>
```

### AI Chatbot Knowledge
Update the AI responses in `script.js`:

```javascript
const aiKnowledge = {
    skills: {
        keywords: ['skills', 'programming', 'languages'],
        response: "Your custom response about skills..."
    },
    // Add more categories...
};
```

### Color Scheme
Modify the color scheme in `styles.css`:

```css
/* Primary gradient */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Secondary gradient */
background: linear-gradient(45deg, #ffd700, #ffed4e);
```

## 🎨 Design Features

### Color Palette
- **Primary**: Purple gradient (#667eea to #764ba2)
- **Secondary**: Gold gradient (#ffd700 to #ffed4e)
- **Background**: Light gray (#f8f9fa)
- **Text**: Dark gray (#333)

### Typography
- **Font Family**: Poppins (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700
- **Responsive**: Scales appropriately on all devices

### Animations
- **Fade-in effects**: Elements appear as you scroll
- **Hover effects**: Interactive elements respond to user interaction
- **Smooth transitions**: All animations use CSS transitions
- **Parallax effects**: Subtle parallax on hero section

## 📱 Responsive Design

The website is fully responsive and optimized for:
- **Desktop**: 1200px+ (full layout)
- **Tablet**: 768px - 1199px (adjusted layout)
- **Mobile**: < 768px (mobile-first design)

### Mobile Features
- Hamburger navigation menu
- Touch-friendly buttons and interactions
- Optimized chatbot for mobile screens
- Responsive typography and spacing

## 🤖 AI Chatbot Features

### Capabilities
- **Skills Information**: Ask about programming languages and technologies
- **Project Details**: Get information about featured projects
- **Experience**: Learn about hackathon achievements
- **Contact Information**: Get contact details and social links
- **General Questions**: About section and background information

### Usage
- Click the robot icon in the bottom-right corner
- Type your question in natural language
- Press Enter or click the send button
- Use keyboard shortcuts (Ctrl/Cmd + K)

### Customization
Add new knowledge categories in `script.js`:

```javascript
const aiKnowledge = {
    newCategory: {
        keywords: ['keyword1', 'keyword2'],
        response: "Your custom response..."
    }
};
```

## 🚀 Performance Optimizations

- **Embedded CSS**: No external CSS files for faster loading
- **Optimized Images**: Font Awesome icons instead of images
- **Lazy Loading**: Images load only when needed
- **Minimal JavaScript**: Efficient code with no external dependencies
- **Smooth Animations**: Hardware-accelerated CSS animations

## 🔧 Browser Support

- **Chrome**: 60+
- **Firefox**: 55+
- **Safari**: 12+
- **Edge**: 79+
- **Mobile Browsers**: iOS Safari, Chrome Mobile

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you have any questions or need help customizing the portfolio:

1. Check the customization guide above
2. Review the code comments for guidance
3. Open an issue on GitHub
4. Contact through the portfolio's contact form

## 🎯 Future Enhancements

Potential features for future versions:
- **Dark Mode**: Toggle between light and dark themes
- **Multi-language Support**: Internationalization
- **Blog Integration**: Add a blog section
- **Portfolio Analytics**: Track visitor interactions
- **Advanced AI**: Integration with external AI APIs
- **CMS Integration**: Easy content management system

---

**Built with ❤️ for showcasing your amazing achievements!**

*Remember to update the personal information, projects, and achievements to match your actual portfolio content.* 