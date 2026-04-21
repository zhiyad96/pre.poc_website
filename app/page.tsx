import Home from '@/component/home'
import AboutSection from '@/component/about'
import Overview from '@/component/overview'
import Services from '@/component/service'
import Clients from '@/component/client_colabretion'
import Footer from '@/component/footer'

export default function Page() {
  return (
    <>
      <Home />
      <AboutSection/>
      <Overview/>
      <Services/>
      <Clients/>
      <Footer/>
      
    </>
  )
}
