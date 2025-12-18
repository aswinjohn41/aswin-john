import React from 'react'

const skillCategories = [
  {
    title: "Mobile Development",
    skills: ["React Native", "Flutter", "Kotlin", "Swift", "Android Studio", "Xcode"]
  },
  {
    title: "Web & Desktop Development",
    skills: ["React.js", "Node.js", "Electron.js", "WebSockets", "HTML", "CSS", "JavaScript"]
  },
  {
    title: "UI/UX & Design",
    skills: ["Figma", "Wireframing", "Prototyping", "Responsive Design", "Design Systems"]
  },
  {
    title: "Backend & Tools",
    skills: ["Node.js", "Firebase", "SQLite", "REST APIs", "Git", "GitHub", "AWS", "Jira", "Postman"]
  },
  {
    title: "Workflow & Methodologies",
    skills: ["Agile/Scrum", "CI/CD", "Testing & QA", "Code Review", "DevOps Basics"]
  }
]

function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3>{category.title}</h3>
              <div className="skill-tags">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills