import React from 'react'

const experiences = [
  {
    title: "Mobile & Web Developer | UI/UX Designer",
    company: "Loom Analytics – Toronto, ON",
    date: "Mar 2024 – Present",
    points: [
      "Spearheading development across web, mobile, and desktop platforms",
      "Designed and developed live transcription app using Figma, React, and WebSockets",
      "Built Electron apps for macOS and Windows",
      "Developed mobile applications using Kotlin, Swift, and Flutter",
      "Handled end-to-end UI/UX: wireframes, design systems, and implementation",
      "Managed source control, CI/CD, and deployments using GitHub, Jira, and AWS"
    ]
  },
  {
    title: "Software Developer Intern",
    company: "Stackodile Pvt. Ltd. – India",
    date: "Nov 2022 – Apr 2024",
    points: [
      "Built and maintained cross-platform mobile apps using Flutter and React Native",
      "Translated Figma designs into production-ready interfaces",
      "Integrated APIs and implemented business logic",
      "Supported feature development, performance optimization, and testing"
    ]
  },
  {
    title: "Software Developer Intern",
    company: "Company Confidential",
    date: "Apr 2024 – Sep 2024",
    points: [
      "Developed frontend interfaces using React and mobile components in Flutter",
      "Worked on UI polishing, testing, and incremental improvements"
    ]
  },
  {
    title: "Software Developer Intern",
    company: "Futura Labs – Kerala, India",
    date: "Nov 2021 – July 2022",
    points: [
      "Assisted in Android development, software testing, and basic web application features"
    ]
  }
]

function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="section-title">Professional Experience</h2>
        <div className="experience-grid">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-card">
              <h3>{exp.title}</h3>
              <h4>{exp.company}</h4>
              <p className="date">{exp.date}</p>
              <ul>
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience