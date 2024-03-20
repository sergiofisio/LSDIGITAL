import Header from "./components/header";
import Services from "./components/services";
import Presetation from "./components/presentation";
import Business from "./components/business";
import Footer from "./components/footer";
import { useState } from "react";
import Contact from "./components/contact";

export default function App() {
  const [modal, setModal] = useState(false);
  return (
    <>
      <Header />
      <Presetation />
      <Business />
      <Services />
      <Footer setModal={setModal} />
      {modal && <Contact setModal={setModal} />}
    </>
  );
}
