import Header from './components/Header'
import HeroSection from './components/HeroSection'
import ProblemSection from './components/ProblemSection'
import InfoGridSection from './components/InfoGridSection'
import BringLegal from './components/BringLegal'
import HelpdeskSection from './components/HelpdeskSection'
import HowItWorksSection from './components/HowItWorksSection'
import BenefitsSection from './components/BenefitsSection'
import IdealWorkspacesSection from './components/IdealWorkspacesSection'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <main className="landing-page">
      <Header />
      <HeroSection />
      <ProblemSection />
      <InfoGridSection />
      <BringLegal />
      <HelpdeskSection />
      <HowItWorksSection />
      <BenefitsSection />
      <IdealWorkspacesSection />
      <Footer />
    </main>
  )
}

export default App
