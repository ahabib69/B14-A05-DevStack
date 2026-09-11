import { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import techData from './data/technologies.json'

import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Loading from './components/Loading.jsx'
import TechGrid from './components/TechGrid.jsx'
import Stack from './components/Stack.jsx'
import InfoSection from './components/InfoSection.jsx'
import AboutSection from './components/AboutSection.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  const [techs, setTechs] = useState([])
  const [stack, setStack] = useState([])
  const [loading, setLoading] = useState(true)

  // fake a tiny delay so the loading state actually shows for a second
  useEffect(() => {
    const id = setTimeout(() => {
      setTechs(techData)
      setLoading(false)
    }, 350)

    return () => clearTimeout(id)
  }, [])

  const add = (tech) => {
    // already in the stack? don't add it again
    if (stack.find((item) => item.id === tech.id)) {
      toast.warning(`${tech.name} is already in your stack.`)
      return
    }

    setStack((prev) => [...prev, tech])
    toast.success(`${tech.name} added to your stack!`)
  }

  const remove = (tech) => {
    setStack((prev) => prev.filter((item) => item.id !== tech.id))
    toast.info(`${tech.name} removed.`)
  }

  const clear = () => {
    if (stack.length === 0) return
    setStack([])
    toast.info('Your stack has been cleared.')
  }

  return (
    <>
      <Navbar />

      <main>
        <Hero techCount={techData.length} />

        <section id="technologies" className="builder">
          <div className="section-heading">
            <div>
              <div className="eyebrow">TECHNOLOGY LIBRARY</div>
              <h2>Choose your technologies</h2>
              <p>Pick the tools you need and create a stack that matches your workflow.</p>
            </div>
            <div className="filter">{techs.length} technologies</div>
          </div>

          {loading ? (
            <Loading />
          ) : (
            <div className="builder-grid">
              <TechGrid technologies={techs} stack={stack} onAdd={add} />
              <Stack stack={stack} onRemove={remove} onClear={clear} />
            </div>
          )}
        </section>

        <InfoSection />
        <AboutSection />
      </main>

      <Footer />
      <ToastContainer position="top-right" autoClose={1800} />
    </>
  )
}