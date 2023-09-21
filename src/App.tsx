import Run from "./assets/exploreIcons/run.png"
import Arrow from "./assets/exploreIcons/arrow.png"
import Dot from "./assets/exploreIcons/dot.png"
import About from './assets/about.png'

import Man from "./assets/man.png"
import Header from './components/Header/Header'
import './App.css'
import { useState } from "react"

function App() {
  const [widthDefault] = useState("300px");

  return (
    <>
      <Header />
      <section className='banner' >
        <div className="bannerContent ">
          <span>
            <span>|</span>Ninad Creative Agency
          </span>

          <h1>
            Creative <span>Mind</span> With
            Creative People
          </h1>

          <p>It is a long established fact that a reader will be distracted by the readable content of a page when at its layout.</p>

          <button type="button">read-more</button>
        </div>
        <div className="bannerImage">
          <img src={Man} alt="A man" width={widthDefault} />
        </div>
      </section>

      <section className="exploreService">
        <div className="exploreServiceText">
          <h1>Explore Service</h1>
          <p>The sky was cloudless and of a deep dark blue spectacle before us was indeed sublime.</p>
        </div>

        <div className="exploreServiceSrc">
          <div className="run">
            <img src={Run} alt="" width={'50px'} />
            <h5>Product Management</h5>
            <p>Stay on top of your task lists and stay in touch with what's happening</p>
          </div>
          <div className="arrow">
            <img src={Arrow} alt="" width={'50px'} />
            <h5>Design & Vreatives</h5>
            <p>Stay on top of your task lists and stay in touch with what's happening</p>
          </div>
          <div className="dot">
            <img src={Dot} alt="" width={'50px'} />
            <h5>Markething & Commuication</h5>
            <p>Stay on top of your task lists and stay in touch with what's happening</p>
          </div>

        </div>
      </section>

      <section className="about">
        <div className="aboutSrc">
          <img src={About} width={widthDefault} alt="" />
        </div>
        <div className="aboutContent">
          <span>About</span>
          <h1>Creating,
            Communicating
            & Delivering</h1>
          <p>Web designers plan, create and code internet sites and web pages, many of which combine text with sounds, pictures, graphics and video clips.</p>
          <a href="#">Learn More</a>
        </div>
      </section>
    </>
  )
}

export default App
