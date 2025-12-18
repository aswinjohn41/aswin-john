import React from 'react'

function Hero() {
  return (
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
  )
}

export default Hero