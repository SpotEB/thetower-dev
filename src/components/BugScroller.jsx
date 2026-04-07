import './BugScroller.css'

const logos = [
  { src: '/logos/metafy.jpg', alt: 'Metafy' },
  { src: '/logos/recreation-gov.png', alt: 'Recreation.gov' },
  { src: '/logos/dathost.png', alt: 'DatHost' },
  { src: '/logos/shockbyte.png', alt: 'Shockbyte' },
  { src: '/logos/skins.png', alt: 'Skins' },
  { src: '/logos/skinsmonkey.png', alt: 'SkinsMonkey' },
]

function BugScroller() {
  if (logos.length === 0) {
    return (
      <section className="bug-scroller-section">
        <div className="section-header">
          <span className="section-tag">Track Record</span>
          <h2 className="section-title">Found & Reported Bugs On</h2>
          <p className="section-subtitle">Coming soon</p>
        </div>
      </section>
    )
  }

  return (
    <section className="bug-scroller-section">
      <div className="section-header">
        <span className="section-tag">Track Record</span>
        <h2 className="section-title">Found & Reported Bugs On</h2>
        <p className="section-subtitle">Including multiple critical-severity vulnerabilities</p>
      </div>
      <div className="logo-grid">
        {logos.map((logo, i) => (
          <div className="logo-card" key={i}>
            <img src={logo.src} alt={logo.alt} className="logo-img" />
          </div>
        ))}
      </div>
    </section>
  )
}

export default BugScroller
