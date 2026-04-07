import { Link } from 'react-router-dom'
import BugScroller from '../components/BugScroller'
import './Home.css'

function Home() {
  return (
    <main className="home">
      <section className="hero">
        <div className="hero-bg">
          <div className="hero-gradient"></div>
          <div className="hero-grid"></div>
        </div>
        <div className="hero-content">
          <div className="hero-badge">Security Researcher</div>
          <h1 className="hero-title">
            <span className="hero-name">Roland</span>
            <span className="hero-tagline">of The Tower</span>
          </h1>
          <p className="hero-desc">
            Ethical hacker and bug bounty hunter. I find security vulnerabilities
            before the malicious parties do. Helping organisations build safer
            systems through responsible disclosure.
          </p>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-icon">&#9872;</span>
              <div>
                <span className="stat-value">Bug Bounty</span>
                <span className="stat-label">Hunter</span>
              </div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <span className="stat-icon">&#128737;</span>
              <div>
                <span className="stat-value">Responsible</span>
                <span className="stat-label">Disclosure</span>
              </div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <span className="stat-icon">&#9881;</span>
              <div>
                <span className="stat-value">Web App</span>
                <span className="stat-label">Pentesting</span>
              </div>
            </div>
          </div>
          <div className="hero-cta">
            <Link to="/contact" className="btn btn-primary">Get In Touch</Link>
            <a href="#bugs" className="btn btn-ghost">View Track Record</a>
          </div>
        </div>
      </section>

      <section className="about" id="about">
        <div className="about-container">
          <div className="about-content">
            <span className="section-tag">About</span>
            <h2>Why It Matters</h2>
            <p>
              Most security breaches start with a vulnerability that could have been
              found before it was exploited. The reality is that most applications have vulnerabilities,
              but the difference between a breach and a near-miss often comes down to whether someone was looking.
            </p>
            <p>
              I specialise in web application penetration testing, working through
              bug bounty programmes and coordinated disclosure. I test for the
              vulnerabilities that actually get exploited in the wild by malicious parties:
              broken access controls, authentication flaws, injection, and the
              kinds of logic bugs that automated scanners miss. When I find
              something, I write it up clearly with reproduction steps so your
              team can fix it quickly.
            </p>
            <div className="about-skills">
              <span className="skill-tag">OWASP Top 10</span>
              <span className="skill-tag">Web App Testing</span>
              <span className="skill-tag">API Security</span>
              <span className="skill-tag">Authentication Flaws</span>
              <span className="skill-tag">Access Control</span>
              <span className="skill-tag">Injection</span>
            </div>
          </div>
        </div>
      </section>

      <div id="bugs">
        <BugScroller />
      </div>
    </main>
  )
}

export default Home
