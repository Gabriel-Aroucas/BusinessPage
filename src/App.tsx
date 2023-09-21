import Run from "./assets/exploreIcons/run.png"
import Arrow from "./assets/exploreIcons/arrow.png"
import Dot from "./assets/exploreIcons/dot.png"
import About from './assets/about.png'
import printPreview from './assets/printPreview.png'
import static1 from './assets/static1.png'
import static2 from './assets/static2.png'
import analyze from './assets/analyze.png'
import fakeIframe from './assets/fakeIframe.png'
import profileBernar from './assets/profile/bernar.png'
import profileFabiano from './assets/profile/fabiano.png'
import profileAlik from './assets/profile/alik.png'
import profileAnton from './assets/profile/anton.png'
import billy from './assets/profile/billy.png'
import clickcenter from './assets/clienteProfile/clickcenter.png'
import digitalside from './assets/clienteProfile/digitalSide.png'
import vortex from './assets/clienteProfile/vortex.png'
import travel from './assets/clienteProfile/travel.png'
import fuzion from './assets/clienteProfile/fuzion.png'
import grandma from './assets/blogsrc/grandma.png'
import family from './assets/blogsrc/family.png'
import see from './assets/blogsrc/see.png'
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
          <span className="descript">
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

      <section className="discoverOurWork">
        <div className="discoverOurWorkTitle">
          <h1>Discover Our Work</h1>
          <p>Web designer is responsible for creating the design and layout of a website.</p>
        </div>
        <div className="discoverOurWorkContent">
          <div className="discoverOurWorkSrcText">
            <span>User interface</span>
            <h1>Creative Agency & Portfolio</h1>
            <p>Web designers plan, create and code internet sites and web pages, text with sounds.</p>
          </div>
          <div className="discoverOurWorkSrc">
            <img src={printPreview} width={widthDefault} alt="" />
          </div>
        </div>
      </section>

      <section className="statistic">
        <div className="statisticSrc">
          <img src={static1} width={widthDefault} alt="" />
          <img src={static2} width={widthDefault} alt="" />
        </div>

        <div className="statisticText">
          <article className="revenue">
            <h1>4.200%</h1>
            <p>Revenue</p>
          </article>

          <article className="projects">
            <h1>73+</h1>
            <p>projects</p>
          </article>

          <article className="uptime">
            <h1>99.5+</h1>
            <p>uptime</p>
          </article>
        </div>
      </section>

      <section className="analyze">
        <div className="analyzeContent">
          <h1>Analyze & Improve</h1>
          <p>Web designer is responsible for creating the design and layout of a website or web pages. It and can mean working on a brand new website.</p>

          <section className="responsiveArticle">
            <article>
              <i className="icon">✓</i> <span>Well Planned Architecture</span>
            </article>

            <article>
              <i className="icon">✓</i> <span>Accessible to All Users</span>
            </article>

            <article>
              <i className="icon">✓</i> <span>Mobile Compatibility</span>
            </article>
          </section>

        </div>
        <div className="analyzeSrc">
          <img src={analyze} width={widthDefault} alt="" />
        </div>
      </section>

      <section className="howWeWork">
        <div className="howWeWorkSrc">
          <img src={fakeIframe} width={'500px'} alt="" />
        </div>
        <div className="howWeWorkContent">
          <h1>How We Work</h1>
          <p>Web designers plan, create and code internet sites and web pages, many of which combine text with sounds, pictures, graphics and video clips.</p>
        </div>
      </section>


      <section className="teamMembers">
        <div className="teamMembersText">
          <h1>Team Members</h1>
          <p>Combine text with sounds, pictures, graphics and video clips.</p>
        </div>
        <div className="teamMembersSrc">
          <article className="bernar">
            <img src={profileBernar} width={'150px'} alt="" />
            <h2>Bernarr Dominik</h2>
            <p>Founder</p>
          </article>

          <article className="fabiano">
            <img src={profileFabiano} width={'150px'} alt="" />
            <h2>Fabiano Horta</h2>
            <p>Account Manager</p>
          </article>

          <article className="alike">
            <img src={profileAlik} width={'150px'} alt="" />
            <h2>Alike Stanger</h2>
            <p>Designer</p>
          </article>

          <article className="anton">
            <img src={profileAnton} width={'150px'} alt="" />
            <h2>Anton Brownstain</h2>
            <p>Developer</p>
          </article>
        </div>
      </section>


      <section className="testmonials">
        <div className="testmonialsText">
          <h1>Our Testimonials</h1>
          <p>Read some awesome feedback from our students all over the world. We are giving the best to our students</p>
        </div>
        <div className="testmonialsSrc">

          <article>
            <p className="testmonialsSrcTitle">Lorem ipsum dolor sit amet, con adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis</p>
            <div className="articleSrc">
              <img src={billy} width={'50px'} alt="" />
              <h2>Billy Root <p className="codename">torest</p></h2>
            </div>
          </article>
          <article>
            <p className="testmonialsSrcTitle">Lorem ipsum dolor sit amet, con adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis</p>
            <div className="articleSrc">
              <img src={billy} width={'50px'} alt="" />
              <h2>Billy Root <p className="codename">torest</p></h2>
            </div>
          </article>
          <article>
            <p className="testmonialsSrcTitle">Lorem ipsum dolor sit amet, con adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis</p>
            <div className="articleSrc">
              <img src={billy} width={'50px'} alt="" />
              <h2>Billy Root <p className="codename">torest</p></h2>
            </div>
          </article>
        </div>
      </section>

      <section className="clients">
        <div className="clientsText">
          <h3>Our Famous Clients</h3>
        </div>
        <div className="clientsSrc">
          <img src={clickcenter} width={'100px'} alt="" />
          <img src={digitalside} width={'100px'} alt="" />
          <img src={vortex} width={'100px'} alt="" />
          <img src={travel} width={'100px'} alt="" />
          <img src={fuzion} width={'80px'} alt="" />
        </div>
      </section>

      <section className="blog">
        <div className="blogText">
          <h1>Latest From Blog</h1>
        </div>

        <div className="blogSrc">
          <div className="card">
            <div>
              <img src={grandma} alt="" />
            </div>
            <div className="cardTitle">
              <h2>Build prototypes with thousands of components.</h2>
              <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches.</p>
              <span className="readmoreOne" >Read more</span>
            </div>
          </div>

          <div className="card">
            <div>
              <img src={family} alt="" />
            </div>
            <div className="cardTitle">
              <h2>Build prototypes with thousands of components.</h2>
              <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches.</p>
              <span className="readmoreTwo">Read more</span>
            </div>
          </div>


          <div className="card">
            <div>
              <img src={see} alt="" />
            </div>
            <div className="cardTitle">
              <h2>Build prototypes with thousands of components.</h2>
              <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches.</p>
              <span className="readmoreThree">Read more</span>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <section className="footerLists">
          <div className="footerbrand">
            <span>WD</span>
          </div>
          <div className="menu">
            <p>Menu</p>
            <ul>
              <li>About</li>
              <li>Portifólio</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="service">
            <p>Service</p>
            <ul>
              <li>User Experience</li>
              <li>User Interface</li>
              <li>Logotype</li>
              <li>See More</li>
            </ul>
          </div>
          <div className="socialMedia">
            <img src="https://placehold.co/50x50" alt="" />
            <img src="https://placehold.co/50x50" alt="" />
            <img src="https://placehold.co/50x50" alt="" />
          </div>
        </section>
        <section className="copy">
          <span>Copyright © 2020 Laaqiq. All Rights Reserved.</span>
          <div className="terms">
            <a href="#">Terms of Use</a>
            <a href="#">Privacy Policy</a>
          </div>
        </section>
      </footer>
    </>
  )
}

export default App
