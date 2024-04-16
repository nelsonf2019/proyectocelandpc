import { Header } from "./components/header"
import { Features } from "./components/features"
import { About } from "./components/about"
import aboutImage from "./images/Frame 19.png"
import aboutImage2 from "./images/download.png"
import { Presentation } from "./components/presentation"
import { Contact } from "./components/contact"
import { Footer } from "./components/footer"

function App() {
 

  return (
    <div>
      <Header />
      <Features />
      <About phatImage={aboutImage} title="Cubre todas sus necesidades" boton="Obtenga su App"/>
      <Presentation />
      <About phatImage={aboutImage2} title="Descargue y obtengala ahora" boton="Descarga"/>
      <Contact />
      <Footer />
    </div>
  )
}

export default App
