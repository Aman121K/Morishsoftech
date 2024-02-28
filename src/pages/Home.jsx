import React from 'react'
import Hero from "../pages/Hero";
import Consultation from "../pages/Consultation";
import Service from "../pages/Service";
import ServicesSection from "../pages/ServicesSection";
import CoreValuesSection from "../pages/CoreValuesSection";
import Testimonial from "../pages/Testimonial";
import BlogSection from "../pages/BlogSection";
import BusinessSection from "../pages/BusinessSection";


const Home = () => {
  return (
    <>
      <Hero />
        <Consultation />
        <Service />
        <ServicesSection />
        <CoreValuesSection />
        <Testimonial />
        <BlogSection />
        <BusinessSection />
    </>
  )
}

export default Home
