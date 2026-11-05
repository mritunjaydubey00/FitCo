import './App.css'
import RegisterGym from './pages/registerGym.jsx'
import TermsComingSoon from './pages/TermsComingSoon.jsx'

function App() {
  if (window.location.pathname === '/terms') {
    return <TermsComingSoon />
  }

  return (
    <div className="app-shell">
      <RegisterGym />
    </div>
  )
}

export default App