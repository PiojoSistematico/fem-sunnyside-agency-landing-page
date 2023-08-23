import logo from "./assets/images/logo.svg";
import imgHeroMobile from "./assets/images/mobile/image-header.jpg";
import imgHeroDesktop from "./assets/images/desktop/image-header.jpg";
import imgTransformMobile from "./assets/images/mobile/image-transform.jpg";
import imgTransformDesktop from "./assets/images/desktop/image-transform.jpg";
import imgStandOutMobile from "./assets/images/mobile/image-stand-out.jpg";
import imgStandOutDesktop from "./assets/images/desktop/image-stand-out.jpg";
import imgGraphicDesignMobile from "./assets/images/mobile/image-graphic-design.jpg";
import imgGraphicDesignDesktop from "./assets/images/desktop/image-graphic-design.jpg";
import imgPhotographyMobile from "./assets/images/mobile/image-photography.jpg";
import imgPhotographyDesktop from "./assets/images/desktop/image-photography.jpg";

import emily from "./assets/images/image-emily.jpg";
import thomas from "./assets/images/image-thomas.jpg";
import jennie from "./assets/images/image-jennie.jpg";

import imgMilkMobile from "./assets/images/mobile/image-gallery-milkbottles.jpg";
import imgMilkDesktop from "./assets/images/desktop/image-gallery-milkbottles.jpg";
import imgOrangeMobile from "./assets/images/mobile/image-gallery-orange.jpg";
import imgOrangeDesktop from "./assets/images/desktop/image-gallery-orange.jpg";
import imgConeMobile from "./assets/images/mobile/image-gallery-cone.jpg";
import imgConeDesktop from "./assets/images/desktop/image-gallery-cone.jpg";
import imgSugarMobile from "./assets/images/mobile/image-gallery-sugar-cubes.jpg";
import imgSugarDesktop from "./assets/images/desktop/image-gallery-sugar-cubes.jpg";

import facebook from "./assets/images/icon-facebook.svg";
import instagram from "./assets/images/icon-instagram.svg";
import twitter from "./assets/images/icon-twitter.svg";
import pinterest from "./assets/images/icon-pinterest.svg";

import Menu from "./components/Menu";

function App() {
  return (
    <main>
      <Menu></Menu>

      <section className="grid-six">
        <picture className="one">
          <img src={imgTransformMobile} alt="" className="mobile" />
          <img src={imgTransformDesktop} alt="" className="desktop" />
        </picture>
        <div className="container-three-rows two">
          <h2>Transform your brand</h2>
          <p>
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </p>
          <a href="">Learn more</a>
        </div>
        <picture className="three">
          <img src={imgStandOutMobile} alt="" className="mobile" />
          <img src={imgStandOutDesktop} alt="" className="desktop" />
        </picture>
        <div className="container-three-rows four">
          <h2>Stand out to the right audience</h2>
          <p>
            Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we’ll build and
            extend your brand in digital places.
          </p>
          <a href="">Learn more</a>
        </div>

        <div className="container-two-rows five">
          <h2>Graphic design</h2>
          <p>
            Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we’ll build and
            extend your brand in digital places.
          </p>
        </div>
        <div className="container-two-rows six">
          <h2>Photography</h2>
          <p>
            Increase your credibility by getting the most stunning, high-quality
            photos that improve your business image.
          </p>
        </div>
      </section>
      <section className="testimonials-section">
        <h2>Client testimonials</h2>
        <div className="grid-three-col">
          <div className="card">
            <img src={emily} alt="Emily" />

            <p>
              We put our trust in Sunnyside and they delivered, making sure our
              needs were met and deadlines were always hit.
            </p>
            <span className="name">Emily R.</span>
            <span className="title">Marketing Director</span>
          </div>
          <div className="card">
            <img src={thomas} alt="Thomas" />

            <p>
              Sunnyside’s enthusiasm coupled with their keen interest in our
              brand’s success made it a satisfying and enjoyable experience.
            </p>
            <span className="name">Thomas S.</span>
            <span className="title">Chief Operating Officer</span>
          </div>
          <div className="card">
            <img src={jennie} alt="Jennie" />

            <p>
              Incredible end result! Our sales increased over 400% when we
              worked with Sunnyside. Highly recommended!
            </p>
            <span className="name">Jennie F.</span>
            <span className="title">Business Owner</span>
          </div>
        </div>
      </section>
      <section className="grid-four">
        <picture>
          <img src={imgMilkMobile} alt="Milk Bottles" className="mobile" />
          <img src={imgMilkDesktop} alt="Milk Bottles" className="desktop" />
        </picture>
        <picture>
          <img src={imgOrangeMobile} alt="Milk Bottles" className="mobile" />
          <img src={imgOrangeDesktop} alt="Milk Bottles" className="desktop" />
        </picture>
        <picture>
          <img src={imgConeMobile} alt="Milk Bottles" className="mobile" />
          <img src={imgConeDesktop} alt="Milk Bottles" className="desktop" />
        </picture>
        <picture>
          <img src={imgSugarMobile} alt="Milk Bottles" className="mobile" />
          <img src={imgSugarDesktop} alt="Milk Bottles" className="desktop" />
        </picture>
      </section>
      <footer>
        <picture>
          <img src={logo} alt="" className="footer-logo" />
        </picture>
        <ul>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Services</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
        </ul>
        <div className="social-links">
          <a href="">
            <img src={facebook} alt="" />
          </a>
          <a href="">
            <img src={instagram} alt="" />
          </a>
          <a href="">
            <img src={twitter} alt="" />
          </a>
          <a href="">
            <img src={pinterest} alt="" />
          </a>
        </div>
      </footer>
    </main>
  );
}

export default App;
