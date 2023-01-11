import React, { useState } from "react";
import "./App.scss";
import "./styles/main.scss";
import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";
import { Route, Routes } from "react-router-dom";
import TopBlock from "./components/TopBlock/TopBlock";
import Skills from "./components/Skills/Skills";
import Contacts from "./components/Contacts/Contacts";
import BgOverlay from "./components/Common/BgOverlay/BgOverlay";
import NotFound from "./components/NotFound/NotFound";

function App() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="App">
      <BgOverlay setOpenMenu={setOpenMenu} openMenu={openMenu} />
      <Header setOpenMenu={setOpenMenu} openMenu={openMenu} />
      <div className="content">
        <Routes>
          <Route path="/" element={<TopBlock />} />
          <Route path="/home" element={<TopBlock />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
