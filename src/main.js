import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'

function App() {
  return (
    <div>
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <h1 className="nav-logo">Aswin John</h1>
          <ul className="nav-menu">
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <img src="/aswinjohn2.JPG" alt="Aswin John - Profile Photo" className="hero-image" />
          <h1 className="hero-title">Aswin John</h1>
          <h2 className="hero-subtitle">Mobile & Web Developer | UI/UX Designer</h2>
          <p className="hero-location">Toronto, Ontario, Canada</p>
          <div className="hero-contact">
            <a href="mailto:aswinjohn41@gmail.com" className="contact-link">📧 aswinjohn41@gmail.com</a>
            <a href="https://github.com/aswinjohn41" className="contact-link" target="_blank">💻 github.com/aswinjohn41</a>
            <span className="contact-link">📱 226-977-8917</span>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <p className="about-text">
            I'm a passionate Mobile & Web Developer with expertise in UI/UX design, specializing in creating
            seamless cross-platform experiences. With experience in fast-paced startup environments and
            diverse technology stacks, I bring innovative solutions to complex problems.
          </p>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section">
        <div className="container">
          <h2 className="section-title">Professional Experience</h2>
          <div className="experience-grid">
            <div className="experience-card">
              <h3>Mobile & Web Developer | UI/UX Designer</h3>
              <h4>Loom Analytics – Toronto, ON</h4>
              <p className="date">Mar 2024 – Present</p>
              <ul>
                <li>Spearheading development across web, mobile, and desktop platforms</li>
                <li>Designed and developed live transcription app using Figma, React, and WebSockets</li>
                <li>Built Electron apps for macOS and Windows</li>
                <li>Developed mobile applications using Kotlin, Swift, and Flutter</li>
                <li>Handled end-to-end UI/UX: wireframes, design systems, and implementation</li>
                <li>Managed source control, CI/CD, and deployments using GitHub, Jira, and AWS</li>
              </ul>
            </div>

            <div className="experience-card">
              <h3>Software Developer</h3>
              <h4>Stackodile Pvt. Ltd. – India</h4>
              <p className="date">Nov 2022 – Apr 2024</p>
              <ul>
                <li>Built and maintained cross-platform mobile apps using Flutter and React Native</li>
                <li>Translated Figma designs into production-ready interfaces</li>
                <li>Integrated APIs and implemented business logic</li>
                <li>Supported feature development, performance optimization, and testing</li>
              </ul>
            </div>

            <div className="experience-card">
              <h3>Software Developer</h3>
              <h4>Company Confidential</h4>
              <p className="date">Apr 2024 – Sep 2024</p>
              <ul>
                <li>Developed frontend interfaces using React and mobile components in Flutter</li>
                <li>Worked on UI polishing, testing, and incremental improvements</li>
              </ul>
            </div>

            <div className="experience-card">
              <h3>Software Developer Intern</h3>
              <h4>Futura Labs – Kerala, India</h4>
              <p className="date">Nov 2021 – July 2022</p>
              <ul>
                <li>Assisted in Android development, software testing, and basic web application features</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section">
        <div className="container">
          <h2 className="section-title">Technical Skills</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Mobile Development</h3>
              <div className="skill-tags">
                <span className="skill-tag">React Native</span>
                <span className="skill-tag">Flutter</span>
                <span className="skill-tag">Kotlin</span>
                <span className="skill-tag">Swift</span>
                <span className="skill-tag">Android Studio</span>
                <span className="skill-tag">Xcode</span>
              </div>
            </div>

            <div className="skill-category">
              <h3>Web & Desktop Development</h3>
              <div className="skill-tags">
                <span className="skill-tag">React.js</span>
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">Electron.js</span>
                <span className="skill-tag">WebSockets</span>
                <span className="skill-tag">HTML</span>
                <span className="skill-tag">CSS</span>
                <span className="skill-tag">JavaScript</span>
              </div>
            </div>

            <div className="skill-category">
              <h3>UI/UX & Design</h3>
              <div className="skill-tags">
                <span className="skill-tag">Figma</span>
                <span className="skill-tag">Wireframing</span>
                <span className="skill-tag">Prototyping</span>
                <span className="skill-tag">Responsive Design</span>
                <span className="skill-tag">Design Systems</span>
              </div>
            </div>

            <div className="skill-category">
              <h3>Backend & Tools</h3>
              <div className="skill-tags">
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">Firebase</span>
                <span className="skill-tag">SQLite</span>
                <span className="skill-tag">REST APIs</span>
                <span className="skill-tag">Git</span>
                <span className="skill-tag">GitHub</span>
                <span className="skill-tag">AWS</span>
                <span className="skill-tag">Jira</span>
                <span className="skill-tag">Postman</span>
              </div>
            </div>

            <div className="skill-category">
              <h3>Workflow & Methodologies</h3>
              <div className="skill-tags">
                <span className="skill-tag">Agile/Scrum</span>
                <span className="skill-tag">CI/CD</span>
                <span className="skill-tag">Testing & QA</span>
                <span className="skill-tag">Code Review</span>
                <span className="skill-tag">DevOps Basics</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <div className="container">
          <h2 className="section-title">Project Highlights</h2>
          <div className="projects-grid">
            <div className="project-card">
              <h3>Live Transcription Platform</h3>
              <p>Loom Analytics</p>
              <ul>
                <li>Designed UI in Figma, built frontend with React + WebSockets</li>
                <li>Deployed via Electron for desktop (macOS & Windows)</li>
                <li>Supported mobile users (iOS & Android) with seamless UX</li>
              </ul>
            </div>

            <div className="project-card">
              <h3>Smart Ticketing App</h3>
              <p>Android Application</p>
              <ul>
                <li>Created QR-code ticket system for offline validation</li>
                <li>Implemented secure ticket generation and verification</li>
              </ul>
            </div>

            <div className="project-card">
              <h3>React Native Weather App</h3>
              <p>Firebase Integration</p>
              <ul>
                <li>Synced live weather data with Firebase</li>
                <li>Implemented persistent storage for user preferences</li>
              </ul>
            </div>

            <div className="project-card">
              <h3>Flutter BMI Calculator</h3>
              <p>Mobile Application</p>
              <ul>
                <li>Clean, intuitive UI with accurate calculations</li>
                <li>Minimal user input friction and responsive design</li>
              </ul>
            </div>

            <div className="project-card">
              <h3>Birthday Tracker</h3>
              <p>Kotlin Android App</p>
              <ul>
                <li>Local storage-based birthday reminder system</li>
                <li>User-friendly interface for managing reminders</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section">
        <div className="container">
          <h2 className="section-title">Education</h2>
          <div className="education-grid">
            <div className="education-card">
              <h3>Post-Graduate Certificate – Mobile Application Development</h3>
              <h4>Fanshawe College – London, Ontario</h4>
              <p className="date">May 2023 – Sep 2024</p>
            </div>

            <div className="education-card">
              <h3>Bachelor of Computer Application (BCA)</h3>
              <h4>Don Bosco Arts and Science College – India</h4>
              <p className="date">Aug 2018 – Aug 2022</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-info">
            <div className="contact-item">
              <h3>📧 Email</h3>
              <a href="mailto:aswinjohn41@gmail.com">aswinjohn41@gmail.com</a>
            </div>
            <div className="contact-item">
              <h3>📱 Phone</h3>
              <a href="tel:226-977-8917">226-977-8917</a>
            </div>
            <div className="contact-item">
              <h3>💻 GitHub</h3>
              <a href="https://github.com/aswinjohn41" target="_blank">github.com/aswinjohn41</a>
            </div>
            <div className="contact-item">
              <h3>📍 Location</h3>
              <p>Toronto, Ontario, Canada</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>© 2024 Aswin John. Built with React & Vite.</p>
        </div>
      </footer>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
