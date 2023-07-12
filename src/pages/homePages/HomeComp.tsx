// import React from 'react'

// import { NewsCard } from "../../components"
import Contact from "./Contact"
import Donate from "./Donate"
import Hero from "./Hero"
import Involved from "./Involved"
import News from "./News"
import Projects from "./Projects"
import Record from "./Record"


const HomeComp = () => {
  return (
    <div>

      <Hero />
      <Involved />
      <Projects />
      <Record />
      <News />
      <Donate />
      <Contact />

    </div>
  )
}

export default HomeComp