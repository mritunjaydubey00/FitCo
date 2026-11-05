import './RegistrationIntro.css'

function RegistrationIntro() {
  return (
    <section className="registration-intro" aria-labelledby="registration-title">
      <div className="registration-eyebrow">
        <span className="registration-eyebrow-dot" />
        GROW WITH FITCO
      </div>
      <h1 id="registration-title">Your gym belongs here.</h1>
      <p className="registration-intro-copy">
        Put your gym in front of more people. Tell us a little about your
        business and we’ll get you started.
      </p>

      <div className="registration-highlight">
        <div className="registration-highlight-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none">
            <path
              d="M4 19V9l8-5 8 5v10M9 19v-6h6v6M2 19h20"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div>
          <strong>One simple step</strong>
          <span>Start your gym’s journey with FitCo.</span>
        </div>
      </div>
      <div className="registration-decoration" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
    </section>
  )
}

export default RegistrationIntro
