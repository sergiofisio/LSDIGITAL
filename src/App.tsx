import Header from "./components/header";
import Services from "./components/services";
import Presetation from "./components/presentation";
import Business from "./components/business";
import Footer from "./components/footer";
import { useEffect, useState } from "react";
import Contact from "./components/contact";

export default function App() {
  const [modal, setModal] = useState(false);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <Header windowHeight={windowHeight} />
      <Presetation />
      <Business />
      <Services />
      <Footer setModal={setModal} />
      {modal && <Contact setModal={setModal} windowHeight={windowHeight} />}
    </>
  );
}
