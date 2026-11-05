import { useEffect, useState } from 'react'
import './registerGym.css'
import GymRegistrationForm from '../components/GymRegistrationForm/GymRegistrationForm.jsx'
import RegistrationFooter from '../components/RegistrationFooter/RegistrationFooter.jsx'
import RegistrationHeader from '../components/RegistrationHeader/RegistrationHeader.jsx'
import RegistrationIntro from '../components/RegistrationIntro/RegistrationIntro.jsx'
import RegistrationReassurance from '../components/RegistrationReassurance/RegistrationReassurance.jsx'

function RegisterGym() {
  const [isMobileMotionReady] = useState(() => {
    const isMobile = window.matchMedia('(max-width: 575.98px)').matches
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    return isMobile && !prefersReducedMotion && 'IntersectionObserver' in window
  })
  const [hasReachedForm, setHasReachedForm] = useState(false)

  useEffect(() => {
    const formCard = document.getElementById('gym-registration-form')

    if (!isMobileMotionReady || !formCard) {
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasReachedForm(true)
          observer.disconnect()
        }
      },
      {
        rootMargin: '0px 0px -45% 0px',
        threshold: 0,
      },
    )

    observer.observe(formCard)

    return () => observer.disconnect()
  }, [isMobileMotionReady])

  return (
    <div className="gym-registration">
      <RegistrationHeader />

      <main
        className={[
          'container-xl registration-main',
          isMobileMotionReady && 'registration-main--mobile-motion-ready',
          hasReachedForm && 'registration-main--form-revealed',
        ]
          .filter(Boolean)
          .join(' ')}
      >
        <div className="row align-items-center gy-5 gx-lg-5">
          <div className="col-12 col-lg-5 registration-intro-column">
            <RegistrationIntro />
          </div>
          <div className="col-12 col-lg-7 registration-form-column">
            <GymRegistrationForm />
          </div>
        </div>
      </main>

      <RegistrationReassurance />
      <RegistrationFooter />
    </div>
  )
}

export default RegisterGym