import React, { useState, useEffect } from "react";
import {
  Main,
  Timeline,
  Expertise,
  Experience,
  Project,
  Contact,
  Navigation,
  Footer,
} from "./components";

import FadeIn from "./components/FadeIn";
import "./index.scss";

function App() {
  const [mode, setMode] = useState("dark");

  const handleModeChange = () => {
    setMode((prevMode) => (prevMode === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div className={`main-container ${mode === "dark" ? "dark-mode" : "light-mode"}`}>
  <Navigation parentToChild={{ mode }} modeChange={handleModeChange} />

  <FadeIn transitionDuration={700}>
    <Main />
  </FadeIn>

  {/* Expertise fades independently */}
  <FadeIn transitionDuration={700} delay={100}>
    <Expertise />
  </FadeIn>

  {/* Experience fades independently */}
  <FadeIn transitionDuration={700} delay={100}>
    <Experience />
  </FadeIn>

  <FadeIn transitionDuration={700} delay={100}>
    <Timeline />
  </FadeIn>

  <FadeIn transitionDuration={700} delay={100}>
    <Project />
  </FadeIn>

  <FadeIn transitionDuration={700} delay={100}>
    <Contact />
  </FadeIn>

  <Footer />
</div>

  );
}

export default App;
