import ieee from "../assets/ieee.svg";
import iedc from "../assets/IEDC.svg";
import pie from "../assets/PIE.svg";
import sb from "../assets/SB.svg";
import tbi from "../assets/TBI.svg";
import upscale from '../assets/upscale.svg'
import React from "react";
import ScheduleTag from "./schedule/scheduleTag";
const Header = ({headerRef}) => {
  return (
      <div className='container-fluid ' style={{display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "center"}} id="home" ref={headerRef}>
        {/*<div className="demo"></div>*/}
          <div className="logo-container">
              <img className="logo" src={upscale} alt="Upscale'21"/>
          </div>
          <img className="logo-mobile" src={upscale} alt="Upscale'21"/>
          <ScheduleTag />
          {/*<a className={"register-now-btn"} href={"https://www.yepdesk.com/embed/upscale-21"} target={"_blank"}>*/}
          {/*    <span className={"register-now-btn-text"}>Register Now</span>*/}
          {/*</a>*/}
          <a href={"https://www.yepdesk.com/embed/upscale-21"} target={"_blank"} className="register-btn" style={{alignSelf: "center"}}>
              <button className="reg-btn">Register Now</button>
          </a>
      <div className='img-tags' style={{width: "100%"}}>
        <img className='sponsor-img' src={sb} alt='IEEE SB Palakkad' />
        <img className='sponsor-img' src={iedc} alt='IEDC' style={{maxWidth: "90px"}} />
          <img className='sponsor-img' src={tbi} alt='TBI GEC Palakkad' style={{maxWidth: "110px"}} />
        <img className='sponsor-img pie' src={pie} alt='PIE' />
          <img className='sponsor-img' src={ieee} alt='IEEE' />
      </div>
    </div>
  );
};

export default Header;
