import { useState } from 'react'
import './GymRegistrationForm.css'

function GymRegistrationForm() {
  const [notice, setNotice] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    setNotice('Supabase is not connected yet, so your details have not been saved.')
  }

  return (
    <section className="registration-form-card" aria-labelledby="form-title">
      <div className="registration-form-heading">
        <span className="registration-form-step">GYM REGISTRATION</span>
        <h2 id="form-title">Tell us about your gym</h2>
        <p>Fill in your details to get your registration started.</p>
      </div>

      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-12">
          <label className="form-label" htmlFor="gym-name">Gym name</label>
          <input
            className="form-control"
            id="gym-name"
            name="gym_name"
            type="text"
            placeholder="e.g. Northside Fitness"
            autoComplete="organization"
            maxLength={120}
            required
          />
        </div>

        <div className="col-12">
          <label className="form-label" htmlFor="owner-name">Gym owner’s name</label>
          <input
            className="form-control"
            id="owner-name"
            name="owner_name"
            type="text"
            placeholder="e.g. Alex Morgan"
            autoComplete="name"
            maxLength={120}
            required
          />
        </div>

        <div className="col-12">
          <label className="form-label" htmlFor="gym-address">Gym address</label>
          <textarea
            className="form-control"
            id="gym-address"
            name="address"
            placeholder="Street address, city, state and ZIP code"
            autoComplete="street-address"
            rows={3}
            maxLength={500}
            required
          />
        </div>

        <div className="col-12 col-md-6">
          <label className="form-label" htmlFor="phone-number">Phone number</label>
          <input
            className="form-control"
            id="phone-number"
            name="phone"
            type="tel"
            placeholder="+1 (555) 000-0000"
            autoComplete="tel"
            maxLength={30}
            required
          />
        </div>

        <div className="col-12 col-md-6">
          <label className="form-label" htmlFor="email-address">Email address</label>
          <input
            className="form-control"
            id="email-address"
            name="email"
            type="email"
            placeholder="you@example.com"
            autoComplete="email"
            maxLength={254}
            required
          />
        </div>

        <div className="col-12">
          <p className="registration-privacy-note">
            Your information will only be used to set up your gym profile.
          </p>
        </div>
        <div className="col-12">
          <button className="btn btn-success w-100 registration-submit" type="submit">
            Register your gym
            <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path
                d="M4 10h12m-5-5 5 5-5 5"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <div className="col-12">
          <p className="registration-form-notice" role="status" aria-live="polite">
            {notice}
          </p>
        </div>
      </form>
    </section>
  )
}

export default GymRegistrationForm
