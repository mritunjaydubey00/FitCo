import './RegistrationIntro.css'

function RegistrationIntro() {
  return (
    <section className="registration-intro" aria-labelledby="registration-title">
      <div className="registration-eyebrow">
        <span className="registration-eyebrow-dot" />
        FOR GYM OWNERS
      </div>
      <h1 id="registration-title">
        Your gym’s next <span>big move.</span>
      </h1>
      <p className="registration-intro-copy">
        Bring your gym online. Start building a stronger connection with the
        people looking for a place to train.
      </p>
      <div className="registration-intro-actions">
        <a
          className="registration-intro-cta physical-button"
          href="#gym-registration-form"
        >
          Get started
          <span aria-hidden="true">↓</span>
        </a>
        <a className="registration-terms-cta physical-button" href="/terms">
          Terms and Services
        </a>
      </div>
      <div className="registration-benefits" aria-label="Why register your gym">
        <div className="registration-benefit">
          <span className="registration-benefit-icon" aria-hidden="true">01</span>
          <span>Put your gym on the digital map</span>
        </div>
        <div className="registration-benefit">
          <span className="registration-benefit-icon" aria-hidden="true">02</span>
          <span>Make it easier for people to find you</span>
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
