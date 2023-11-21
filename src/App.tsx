import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import i18n from "i18next";
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import Contact from "./pages/Contact.tsx";
import Live from "./pages/live.tsx"; // Corrected the filename to "Live.tsx"
import LanguageSelector from "./pages/LanguageSelector.tsx"
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-locize-backend';


import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import MyBets from "./components/MyBets.tsx";
import MyBetsMain from "./pages/MyBetsMain.tsx"; /*npm install flag-icons*/




i18n
.use(initReactI18next)
.use(LanguageDetector)
.use(Backend)
.init({
  supportedLngs:['en','ar-001','ar-DZ','be-BY','bg-BG','bs-BA','cs','da-DK','de','de-AT','de-BE','de-CH','de-LI','de-LU','en-AU','en-US','es','es-419','fi','fr','fr-BE','hr','hu','id-ID','it','it-CH','lt','lv','nb','nl-BE','nl-NL','pl-PL','pt-BR','pt-PT','ro','ru-RU','sk-SK','sl'],
  fallbackLng: "en",
  debug:true,
  saveMissing:true,
  detection:{
    order: [ 'path', 'cookie', 'htmlTag', 'localStorage', 'subdomain'],
    caches:['cookie'],
  },
  backend:{
    projectId: '9f6ad09a-477a-48f3-bc3e-0cd398e8c1b1',
      apiKey: '0be201a1-2742-45dc-9c09-6454f969d001',
  } 
});

function App() {
  i18n.loadResources();
  const { t } = useTranslation();

  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/live" element={<Live />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/home" element={<Home />} />
        <Route path="/mybets" element={<MyBetsMain />} />
        <Route path ="/LanguageSelector"element={<LanguageSelector />} />
      </Routes>
    </Router>
  );
}

export default App;
