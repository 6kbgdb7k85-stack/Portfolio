import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./assets/theme.js";
import "./assets/index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import LandingComponent from "./components/Landing/LandingComponent.jsx";
import AboutPageComponent from "./components/AboutPageComponent.jsx";
import ContactPageComponent from "./components/ContactPageComponent.jsx";
import SkillsPageComponent from "./components/SkillsPageComponent.jsx";
import Projects from "./components/Landing/Projects.jsx";
import ResumePageComponent from "./components/ResumePage/ResumePageComponent.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<LandingComponent />} />
            <Route path="about" element={<AboutPageComponent />} />
            <Route path="contact" element={<ContactPageComponent />} />
            <Route path="skills" element={<SkillsPageComponent />} />
            <Route path="projects" element={<Projects />} />
            <Route path="resume" element={<ResumePageComponent />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
);
