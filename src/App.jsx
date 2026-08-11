import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProblemSection from './components/ProblemSection'
import Services from './components/Services'
import FeaturedService from './components/FeaturedService'
import Process from './components/Process'
import Automation from './components/Automation'
import UseCases from './components/UseCases'
import WhyUs from './components/WhyUs'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import ContactForm from './components/ContactForm'
import CTA from './components/CTA'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

// Orden pensado como embudo: problema → solución → confianza → precio → CTA → WhatsApp.
// El usuario puede llegar a WhatsApp desde casi cualquier sección.
function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <Services />
        <FeaturedService />
        <Process />
        <Automation />
        <UseCases />
        <WhyUs />
        <Pricing />
        <FAQ />
        <ContactForm />
        <CTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App
