import ieee from "../assets/ieee.svg";
import iedc from "../assets/IEDC.svg";
import pie from "../assets/PIE.svg";
import sb from "../assets/SB.svg";
import tbi from "../assets/TBI.svg";
import upscale from '../assets/upscale.svg'
const Header = ({headerRef}) => {
  return (
      <div className='container-fluid ' id="home" ref={headerRef}>
        <div className="demo"></div>
          <div className="logo-container">
              <img className="logo" src={upscale} alt="Upscale'21"/>
          </div>
          <a className={"register-now-btn"} href={"https://www.yepdesk.com/embed/upscale-21"} target={"_blank"}>
              <span className={"register-now-btn-text"}>Register Now</span>
          </a>
      <div className='img-tags'>
        <img className='sponsor-img' src={sb} alt='IEEE SB Palakkad' />
        <img className='sponsor-img' src={iedc} alt='IEDC' />
        <img className='sponsor-img' src={ieee} alt='IEEE' />
        <img className='sponsor-img pie' src={pie} alt='PIE' />
        <img className='sponsor-img' src={tbi} alt='TBI GEC Palakkad' />
      </div>
    </div>
  );
};

export default Header;
