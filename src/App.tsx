import Run from "./assets/exploreIcons/run.png"
import Arrow from "./assets/exploreIcons/arrow.png"
import Dot from "./assets/exploreIcons/dot.png"

import Man from "./assets/man.png"
import Header from './components/Header/Header'
import './App.css'

function App() {

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
          <img src={Man} alt="A man" width="300px" />
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

    </>
  )
}

export default App
