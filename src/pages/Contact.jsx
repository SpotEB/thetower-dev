import { FiMail, FiGlobe, FiShield, FiMessageCircle } from 'react-icons/fi'
import './Contact.css'

function Contact() {
  return (
    <main className="contact-page">
      <section className="contact-hero">
        <div className="contact-hero-bg">
          <div className="contact-gradient"></div>
          <div className="contact-grid"></div>
        </div>
        <div className="contact-content">
          <span className="section-tag">Contact</span>
          <h1 className="contact-title">Reach The Tower</h1>
          <p className="contact-subtitle">
            Interested in security testing, vulnerability disclosure, or
            collaboration? I'd like to hear from you.
          </p>

          <div className="contact-cards">
            <div className="contact-card">
              <div className="contact-icon">
                <FiMail />
              </div>
              <h3>Email</h3>
              <p className="copyable">roland@thetower.dev</p>
            </div>

            <div className="contact-card">
              <div className="contact-icon">
                <FiGlobe />
              </div>
              <h3>Web</h3>
              <p>thetower.dev</p>
            </div>

            <div className="contact-card">
              <div className="contact-icon">
                <FiMessageCircle />
              </div>
              <h3>Discord</h3>
              <p>roland403</p>
            </div>

            <div className="contact-card">
              <div className="contact-icon">
                <FiShield />
              </div>
              <h3>HackerOne</h3>
              <p>Available on request</p>
            </div>
          </div>

          <div className="contact-note">
            <p>
              <strong>For organisations:</strong> If you believe your application
              may have a security vulnerability, or you'd like to discuss security
              testing services, please reach out via email. All communications
              regarding vulnerabilities are handled responsibly and confidentially.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Contact
