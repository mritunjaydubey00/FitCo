import './registerGym.css'
import GymRegistrationForm from '../components/GymRegistrationForm/GymRegistrationForm.jsx'
import RegistrationFooter from '../components/RegistrationFooter/RegistrationFooter.jsx'
import RegistrationHeader from '../components/RegistrationHeader/RegistrationHeader.jsx'
import RegistrationIntro from '../components/RegistrationIntro/RegistrationIntro.jsx'

function RegisterGym() {
  return (
    <div className="gym-registration">
      <RegistrationHeader />

      <main className="container-xl registration-main">
        <div className="row align-items-center gy-5 gx-lg-5">
          <div className="col-12 col-lg-5">
            <RegistrationIntro />
          </div>
          <div className="col-12 col-lg-7">
            <GymRegistrationForm />
          </div>
        </div>
      </main>

      <RegistrationFooter />
    </div>
  )
}

export default RegisterGym