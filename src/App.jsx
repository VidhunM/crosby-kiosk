import Header from './components/Header'
import HeroSection from './components/HeroSection'
import ProblemSection from './components/ProblemSection'
import SolutionSection from './components/SolutionSection'
import ServicesSection from './components/ServicesSection'
import PlatformFeaturesSection from './components/PlatformFeaturesSection'
import HowItWorksSection from './components/HowItWorksSection'
import WhoItsForSection from './components/WhoItsForSection'
import BenefitsSection from './components/BenefitsSection'
import WhyCrosbyKioskSection from './components/WhyCrosbyKioskSection'
import AboutSection from './components/AboutSection'
import FinalCTASection from './components/FinalCTASection'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <main className="landing-page">
      <Header />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <ServicesSection />
      <PlatformFeaturesSection />
      <HowItWorksSection />
      <WhoItsForSection />
      <BenefitsSection />
      <WhyCrosbyKioskSection />
      <AboutSection />
      <FinalCTASection />
      <Footer />
    </main>
  )
}

export default App

