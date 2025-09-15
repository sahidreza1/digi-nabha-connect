// Initialize Lucide icons
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Lucide icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // Class data
    const classData = [
        {
            grade: "6",
            subjects: ["Mathematics", "Science", "English", "Hindi"],
            icon: "calculator",
            color: "linear-gradient(135deg, #3b82f6, #60a5fa)",
            students: "250+ Students",
        },
        {
            grade: "7", 
            subjects: ["Mathematics", "Science", "English", "Social Studies"],
            icon: "flask-conical",
            color: "linear-gradient(135deg, #10b981, #34d399)",
            students: "300+ Students",
        },
        {
            grade: "8",
            subjects: ["Mathematics", "Physics", "Chemistry", "Biology"],
            icon: "globe",
            color: "linear-gradient(135deg, #3b82f6, #60a5fa)",
            students: "280+ Students",
        },
        {
            grade: "9",
            subjects: ["Mathematics", "Physics", "Chemistry", "Biology"],
            icon: "book-open",
            color: "linear-gradient(135deg, #10b981, #34d399)", 
            students: "320+ Students",
        },
        {
            grade: "10",
            subjects: ["Mathematics", "Physics", "Chemistry", "English"],
            icon: "trophy",
            color: "linear-gradient(135deg, #3b82f6, #60a5fa)",
            students: "290+ Students",
        },
        {
            grade: "11",
            subjects: ["Physics", "Chemistry", "Mathematics", "Biology"],
            icon: "palette",
            color: "linear-gradient(135deg, #10b981, #34d399)",
            students: "180+ Students", 
        },
        {
            grade: "12",
            subjects: ["Physics", "Chemistry", "Mathematics", "Computer Science"],
            icon: "music",
            color: "linear-gradient(135deg, #3b82f6, #60a5fa)",
            students: "160+ Students",
        }
    ];

    // Features data
    const features = [
        {
            icon: "wifi-off",
            title: "Offline Learning",
            description: "Complete lessons and exercises without internet connectivity. Download content when online and learn anytime.",
            color: "#3b82f6"
        },
        {
            icon: "languages",
            title: "Local Language Support", 
            description: "Content available in Punjabi, Hindi, and English to ensure better comprehension for rural students.",
            color: "#10b981"
        },
        {
            icon: "smartphone",
            title: "Low-End Device Optimized",
            description: "Works smoothly on basic smartphones and tablets with minimal storage and processing requirements.",
            color: "#f59e0b"
        },
        {
            icon: "bar-chart-3",
            title: "Progress Tracking",
            description: "Teachers and students can monitor learning progress with detailed analytics and performance insights.",
            color: "#8b5cf6"
        },
        {
            icon: "download",
            title: "Resource Downloads",
            description: "Download textbooks, videos, and interactive content for offline access during power outages.",
            color: "#ef4444"
        },
        {
            icon: "users",
            title: "Teacher Dashboard",
            description: "Comprehensive tools for educators to manage classes, assign homework, and track student engagement.",
            color: "#6366f1"
        },
        {
            icon: "shield",
            title: "Safe & Secure",
            description: "Child-safe content with privacy protection and secure data handling for student information.",
            color: "#06b6d4"
        },
        {
            icon: "heart",
            title: "Inclusive Design",
            description: "Designed specifically for rural education needs with cultural sensitivity and accessibility features.",
            color: "#ec4899"
        },
        {
            icon: "zap",
            title: "Quick Access",
            description: "Fast loading times and efficient data usage to work well with limited internet bandwidth.",
            color: "#eab308"
        }
    ];

    // Populate class grid
    const classGrid = document.getElementById('class-grid');
    if (classGrid) {
        classGrid.innerHTML = classData.map(classItem => `
            <div class="class-card" onclick="navigateToClass('${classItem.grade}')">
                <div class="class-header" style="background: ${classItem.color}"></div>
                <div class="class-content">
                    <div class="class-info">
                        <div class="class-icon-wrapper">
                            <div class="class-icon-bg">
                                <i data-lucide="${classItem.icon}" class="class-icon"></i>
                            </div>
                            <div>
                                <h3 class="class-number">Class ${classItem.grade}</h3>
                                <p class="class-students">${classItem.students}</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="subjects-section">
                        <h4 class="subjects-title">Subjects Available:</h4>
                        <div class="subjects-list">
                            ${classItem.subjects.map(subject => `
                                <span class="subject-tag">${subject}</span>
                            `).join('')}
                        </div>
                    </div>
                    
                    <button class="class-btn">
                        Enter Class ${classItem.grade}
                        <i data-lucide="book-open"></i>
                    </button>
                </div>
            </div>
        `).join('');
    }

    // Populate features grid
    const featuresGrid = document.getElementById('features-grid');
    if (featuresGrid) {
        featuresGrid.innerHTML = features.map(feature => `
            <div class="feature-card">
                <div class="feature-card-content">
                    <div class="feature-card-icon-bg">
                        <i data-lucide="${feature.icon}" class="feature-card-icon" style="color: ${feature.color}"></i>
                    </div>
                    <div class="feature-card-text">
                        <h3 class="feature-card-title">${feature.title}</h3>
                        <p class="feature-card-description">${feature.description}</p>
                    </div>
                </div>
            </div>
        `).join('');
    }

    // Re-initialize Lucide icons after dynamic content is added
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // Mobile menu functionality
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            // You can add mobile menu functionality here
            alert('Mobile menu clicked! You can implement a mobile navigation here.');
        });
    }

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
            }
        });
    });
});

// Function to handle class navigation
function navigateToClass(grade) {
    // Navigate to class8.html for Class 8
    if (grade === "8") {
        window.location.href = "class8.html";
    } else {
        // Show alert for other classes (you can add more specific navigation later)
        alert(`Navigate to Class ${grade}!\n\nYou can replace this with:\n- Link to class-${grade}.html\n- External URL\n- Open a modal\n- Any custom functionality`);
    }
}

// Function to add animation effects
function addScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe cards and sections
    document.querySelectorAll('.card, .class-card, .feature-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Initialize scroll animations when page loads
document.addEventListener('DOMContentLoaded', addScrollAnimations);