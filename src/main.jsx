import './style.css'

document.querySelector('#app').innerHTML = `
  <!-- Navigation -->
  <nav class="navbar">
    <div class="nav-container">
      <h1 class="nav-logo">Aswin John</h1>
      <ul class="nav-menu">
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
  </nav>

  <!-- Hero Section -->
  <section class="hero">
    <div class="hero-container">
      <img src="/aswinjohn2.JPG" alt="Aswin John - Profile Photo" class="hero-image">
      <h1 class="hero-title">Aswin John</h1>
      <h2 class="hero-subtitle">Mobile & Web Developer | UI/UX Designer</h2>
      <p class="hero-location">Toronto, Ontario, Canada</p>
      <div class="hero-contact">
        <a href="mailto:aswinjohn41@gmail.com" class="contact-link">📧 aswinjohn41@gmail.com</a>
        <a href="https://github.com/aswinjohn41" class="contact-link" target="_blank">💻 github.com/aswinjohn41</a>
        <span class="contact-link">📱 226-977-8917</span>
      </div>
    </div>
  </section>

  <!-- About Section -->
  <section id="about" class="section">
    <div class="container">
      <h2 class="section-title">About Me</h2>
      <p class="about-text">
        I'm a passionate Mobile & Web Developer with expertise in UI/UX design, specializing in creating
        seamless cross-platform experiences. With experience in fast-paced startup environments and
        diverse technology stacks, I bring innovative solutions to complex problems.
      </p>
    </div>
  </section>

  <!-- Experience Section -->
  <section id="experience" class="section">
    <div class="container">
      <h2 class="section-title">Professional Experience</h2>
      <div class="experience-grid">
        <div class="experience-card">
          <h3>Mobile & Web Developer | UI/UX Designer</h3>
          <h4>Loom Analytics – Toronto, ON</h4>
          <p class="date">Mar 2024 – Present</p>
          <ul>
            <li>Spearheading development across web, mobile, and desktop platforms</li>
            <li>Designed and developed live transcription app using Figma, React, and WebSockets</li>
            <li>Built Electron apps for macOS and Windows</li>
            <li>Developed mobile applications using Kotlin, Swift, and Flutter</li>
            <li>Handled end-to-end UI/UX: wireframes, design systems, and implementation</li>
            <li>Managed source control, CI/CD, and deployments using GitHub, Jira, and AWS</li>
          </ul>
        </div>

        <div class="experience-card">
          <h3>Software Developer Intern</h3>
          <h4>Stackodile Pvt. Ltd. – India</h4>
          <p class="date">Nov 2022 – Apr 2024</p>
          <ul>
            <li>Built and maintained cross-platform mobile apps using Flutter and React Native</li>
            <li>Translated Figma designs into production-ready interfaces</li>
            <li>Integrated APIs and implemented business logic</li>
            <li>Supported feature development, performance optimization, and testing</li>
          </ul>
        </div>

        <div class="experience-card">
          <h3>Software Developer Intern</h3>
          <h4>Company Confidential</h4>
          <p class="date">Apr 2024 – Sep 2024</p>
          <ul>
            <li>Developed frontend interfaces using React and mobile components in Flutter</li>
            <li>Worked on UI polishing, testing, and incremental improvements</li>
          </ul>
        </div>

        <div class="experience-card">
          <h3>Software Developer Intern</h3>
          <h4>Futura Labs – Kerala, India</h4>
          <p class="date">Nov 2021 – July 2022</p>
          <ul>
            <li>Assisted in Android development, software testing, and basic web application features</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- Skills Section -->
  <section id="skills" class="section">
    <div class="container">
      <h2 class="section-title">Technical Skills</h2>
      <div class="skills-grid">
        <div class="skill-category">
          <h3>Mobile Development</h3>
          <div class="skill-tags">
            <span class="skill-tag">React Native</span>
            <span class="skill-tag">Flutter</span>
            <span class="skill-tag">Kotlin</span>
            <span class="skill-tag">Swift</span>
            <span class="skill-tag">Android Studio</span>
            <span class="skill-tag">Xcode</span>
          </div>
        </div>

        <div class="skill-category">
          <h3>Web & Desktop Development</h3>
          <div class="skill-tags">
            <span class="skill-tag">React.js</span>
            <span class="skill-tag">Node.js</span>
            <span class="skill-tag">Electron.js</span>
            <span class="skill-tag">WebSockets</span>
            <span class="skill-tag">HTML</span>
            <span class="skill-tag">CSS</span>
            <span class="skill-tag">JavaScript</span>
          </div>
        </div>

        <div class="skill-category">
          <h3>UI/UX & Design</h3>
          <div class="skill-tags">
            <span class="skill-tag">Figma</span>
            <span class="skill-tag">Wireframing</span>
            <span class="skill-tag">Prototyping</span>
            <span class="skill-tag">Responsive Design</span>
            <span class="skill-tag">Design Systems</span>
          </div>
        </div>

        <div class="skill-category">
          <h3>Backend & Tools</h3>
          <div class="skill-tags">
            <span class="skill-tag">Node.js</span>
            <span class="skill-tag">Firebase</span>
            <span class="skill-tag">SQLite</span>
            <span class="skill-tag">REST APIs</span>
            <span class="skill-tag">Git</span>
            <span class="skill-tag">GitHub</span>
            <span class="skill-tag">AWS</span>
            <span class="skill-tag">Jira</span>
            <span class="skill-tag">Postman</span>
          </div>
        </div>

        <div class="skill-category">
          <h3>Workflow & Methodologies</h3>
          <div class="skill-tags">
            <span class="skill-tag">Agile/Scrum</span>
            <span class="skill-tag">CI/CD</span>
            <span class="skill-tag">Testing & QA</span>
            <span class="skill-tag">Code Review</span>
            <span class="skill-tag">DevOps Basics</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Projects Section -->
  <section id="projects" class="section">
    <div class="container">
      <h2 class="section-title">Project Highlights</h2>
      <div class="projects-grid">
        <div class="project-card">
          <h3>Live Transcription Platform</h3>
          <p>Loom Analytics</p>
          <ul>
            <li>Designed UI in Figma, built frontend with React + WebSockets</li>
            <li>Deployed via Electron for desktop (macOS & Windows)</li>
            <li>Supported mobile users (iOS & Android) with seamless UX</li>
          </ul>
        </div>

        <div class="project-card">
          <h3>Smart Ticketing App</h3>
          <p>Android Application</p>
          <ul>
            <li>Created QR-code ticket system for offline validation</li>
            <li>Implemented secure ticket generation and verification</li>
          </ul>
        </div>

        <div class="project-card">
          <h3>React Native Weather App</h3>
          <p>Firebase Integration</p>
          <ul>
            <li>Synced live weather data with Firebase</li>
            <li>Implemented persistent storage for user preferences</li>
          </ul>
        </div>

        <div class="project-card">
          <h3>Flutter BMI Calculator</h3>
          <p>Mobile Application</p>
          <ul>
            <li>Clean, intuitive UI with accurate calculations</li>
            <li>Minimal user input friction and responsive design</li>
          </ul>
        </div>

        <div class="project-card">
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

  <!-- Education Section -->
  <section id="education" class="section">
    <div class="container">
      <h2 class="section-title">Education</h2>
      <div class="education-grid">
        <div class="education-card">
          <h3>Post-Graduate Certificate – Mobile Application Development</h3>
          <h4>Fanshawe College – London, Ontario</h4>
          <p class="date">May 2023 – Sep 2024</p>
        </div>

        <div class="education-card">
          <h3>Bachelor of Computer Application (BCA)</h3>
          <h4>Don Bosco Arts and Science College – India</h4>
          <p class="date">Aug 2018 – Aug 2022</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Contact Section -->
  <section id="contact" class="section">
    <div class="container">
      <h2 class="section-title">Get In Touch</h2>
      <div class="contact-info">
        <div class="contact-item">
          <h3>📧 Email</h3>
          <a href="mailto:aswinjohn41@gmail.com">aswinjohn41@gmail.com</a>
        </div>
        <div class="contact-item">
          <h3>📱 Phone</h3>
          <a href="tel:226-977-8917">226-977-8917</a>
        </div>
        <div class="contact-item">
          <h3>💻 GitHub</h3>
          <a href="https://github.com/aswinjohn41" target="_blank">github.com/aswinjohn41</a>
        </div>
        <div class="contact-item">
          <h3>📍 Location</h3>
          <p>Toronto, Ontario, Canada</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="footer">
    <div class="container">
      <p>© 2024 Aswin John</p>
    </div>
  </footer>
`
