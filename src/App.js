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
