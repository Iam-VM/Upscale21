import { useRef} from 'react'
import Header from "./components/Header";
import Info from "./components/Info";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Speakers from './components/Speakers';
import Schedule from './components/Schedule';
import Contact from "./components/contact/Contact";
import Register from './components/Register';

import ideaPitchingImg from './assets/idea-pitching.svg';
import ideaPitchingImgMob from './assets/idea-pitching-mb.svg';

function App()
{
  //pass the refs to the corresponding components
  const headerRef = useRef("home")
  const infoRef = useRef("about")
  const scheduleRef = useRef("schedule")
  const speakerRef = useRef("speaker")
  const contactRef = useRef("contactRef")

  const scrollToRef = (ref) =>
  {

    console.log(ref.current.offsetTop + 1000,ref.current.offsetTop)
      window.scrollTo({ top: ref.current.offsetTop, behavior: "smooth" });
    // ref.current.scrollIntoView(true);
    };
  return (
    <>
      <NavBar
        scrollToRef={scrollToRef}
        headerRef={headerRef}
        infoRef={infoRef}
        scheduleRef={scheduleRef}
        speakerRef={speakerRef}
        contactRef={contactRef}
      />
      <Header headerRef={headerRef} />
      <Info infoRef={infoRef} />
      <Register />
      <IdeaPitchingImg />
      <Schedule scheduleRef={scheduleRef} />
      <Speakers speakerRef={speakerRef} />
      <Contact contactRef={contactRef} />
      <Footer />
    </>
  );
}

const IdeaPitchingImg = () => {
    return (
        <div style={{width: "100%", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
            <img className={"ideaPitchingImg"} src={ideaPitchingImg} alt={"idea pitching schedule"} style={{alignSelf: "center", margin: "2rem auto"}} />
            <img className={"ideaPitchingImgMob"} src={ideaPitchingImgMob} alt={"idea pitching schedule"} style={{alignSelf: "center", margin: "2rem auto", marginLeft: "-30rem"}} />
        </div>
    );
};

export default App;
