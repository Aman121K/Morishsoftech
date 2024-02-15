import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Top from "./components/top";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Consultation from "./pages/Consultation";
import Service from "./pages/Service";
import ServicesSection from "./pages/ServicesSection";
import CoreValuesSection from "./pages/CoreValuesSection";
import Testimonial from "./pages/Testimonial";
import BlogSection from "./pages/BlogSection";
import BusinessSection from "./pages/BusinessSection";
import Footer from "./components/Footer";
import Blog from "./innerpages/Blog";
import ContactForm from "./innerpages/ContactForm";
import Web from "./innerpages/Web";
import Ecommerce from "./innerpages/Ecommerce";
import Appdevelopment from "./innerpages/Appdevelopment";
import Webapplication from "./innerpages/Webapplication";
import Search from "./innerpages/Search";
import Social from "./innerpages/Social";
import School from "./innerpages/School";
import About from "./innerpages/About";
import Choose from "./innerpages/Choose";
import Mission from "./innerpages/Mission";

function App() {
  return (
    <>
      <BrowserRouter>
        <Top />
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/consultation" element={<Consultation />} />
          <Route path="/service" element={<Service />} />
          <Route path="/servicesection" element={<ServicesSection />} />
          <Route path="/corevaluesection" element={<CoreValuesSection />} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/blogsection" element={<BlogSection />} />
          <Route path="/businesssection" element={<BusinessSection />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/web-development" element={<Web />} />
          <Route path="/ecommerce" element={<Ecommerce />} />
          <Route path="/appdevelopment" element={<Appdevelopment />} />
          <Route path="/webapplication" element={<Webapplication />} />
          <Route path="/seo" element={<Search />} />
          <Route path="/smm" element={<Social />} />
          <Route path="/school-management" element={<School />} />
          <Route path="/about" element={<About />} />
          <Route path="/choose-us" element={<Choose />} />
          <Route path="/mission-values" element={<Mission />} />
          
        </Routes>
        <Home />
        <Consultation />
        <Service />
        <ServicesSection />
        <CoreValuesSection />
        <Testimonial />
        <BlogSection />
        <BusinessSection />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;