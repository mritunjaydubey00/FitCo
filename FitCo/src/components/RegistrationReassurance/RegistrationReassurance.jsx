import './RegistrationReassurance.css'

function RegistrationReassurance() {
  return (
    <section className="registration-reassurance" aria-labelledby="reassurance-title">
      <div className="container-xl px-4">
        <div className="reassurance-card">
          <span className="reassurance-doodle reassurance-doodle-left" aria-hidden="true">
            ✨
          </span>
          <div className="reassurance-copy">
            <span className="reassurance-eyebrow">A GOOD MOVE FOR YOUR GYM</span>
            <h2 id="reassurance-title">Every great gym deserves a place online.</h2>
            <p>
              Taking your business digital is a positive step toward reaching
              more people and building what comes next.
            </p>
          </div>
          <span className="reassurance-doodle reassurance-doodle-right" aria-hidden="true">
            💪
          </span>
        </div>
      </div>
    </section>
  )
}

export default RegistrationReassurance
