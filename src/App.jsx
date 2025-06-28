import { Route, Routes } from "react-router-dom";
import { Toaster } from 'react-hot-toast';

import HomePage from "./Pages/HomePage";
import ContactPage from "./Pages/ContactPage";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import Services from "./Pages/Services";
import ServiceDetail from "./Pages/ServiceDetail";
import ProjectsPage from "./Pages/ProjectPage";
import AboutPage from "./Pages/AboutPage";
import Footer from "./components/Footer";

function App() {
  return (
    <div className='min-h-screen bg-[#FFF6E5] text-[#1F1F1F] relative overflow-hidden'>
      {/* Background gradient */}
      <div className='absolute inset-0 -z-10'>
        <div className='w-full h-full bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.3)_0%,rgba(10,80,60,0.2)_45%,rgba(0,0,0,0.1)_100%)]' />
      </div>

      <ScrollToTop />
      <Navbar />

      <main className='relative z-10 px-4 sm:px-6 md:px-10'>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="services" element={<Services/>}/>
          <Route path="/services/:id" element={<ServiceDetail />} />
          <Route path="/projects" element={<ProjectsPage />} />
           <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>
      <Footer/>

      <Toaster />
    </div>
  );
}

export default App;
