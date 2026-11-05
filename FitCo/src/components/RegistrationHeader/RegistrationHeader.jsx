import './RegistrationHeader.css'

function RegistrationHeader() {
  return (
    <header className="registration-header">
      <div className="container-xl px-4">
        <div className="d-flex align-items-center justify-content-between">
          <a className="registration-brand" href="/" aria-label="FitCo home">
            <span className="registration-brand-mark" aria-hidden="true">
              <svg viewBox="0 0 32 32" fill="none">
                <path
                  d="M7 11h18M7 21h18M11 7v18m10-18v18"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <span>fitco</span>
          </a>
          <span className="registration-header-note">For gym owners</span>
        </div>
      </div>
    </header>
  )
}

export default RegistrationHeader
