import React from "react";
import img1 from "../asset/ecommerce-development-company.webp";
import img2 from "../asset/website-designing-company-delhi.webp";
import img3 from "../asset/website-designing-company.webp";
import { NavLink } from "react-router-dom";

const BlogCard = ({ date, title, description, imageUrl }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
      <div className="relative">
        <img
          className="w-full h-40 object-cover transition-transform duration-300 transform hover:scale-105"
          src={imageUrl}
          alt="Blog post illustration"
        />
        <span className="absolute bottom-0 left-0 bg-orange-200 px-2 py-1 text-xs md:text-sm font-semibold text-gray-700 ">
          {date}
        </span>
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-lg md:text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-sm md:text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <NavLink
          to="#"
          className="inline-block bg-orange-500 rounded-full px-3 py-1 text-xs md:text-sm font-semibold text-white mr-2 mb-2"
        >
          READ MORE
        </NavLink>
      </div>
    </div>
  );
};

const BlogSection = () => {
  const blogs = [
    {
      date: "28 July 2023",
      title:
        "Revolutionizing Online Retail: Ecommerce Website Design in Gurgaon",
      description:
        "In today's digital age, ecommerce has become an integral part of our lives.",
      imageUrl: img1,
    },
    {
      date: "28 July 2023",
      title:
        "Revolutionizing Online Retail: Ecommerce Website Design in Gurgaon",
      description:
        "In today's digital age, ecommerce has become an integral part of our lives.",
      imageUrl: img2,
    },
    {
      date: "28 July 2023",
      title:
        "Revolutionizing Online Retail: Ecommerce Website Design in Gurgaon",
      description:
        "In today's digital age, ecommerce has become an integral part of our lives.",
      imageUrl: img3,
    },
  ];

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-2xl md:text-4xl font-bold text-center my-4 md:my-8">
        Latest Blogs
      </h2>
      <div className="flex flex-wrap justify-center">
        {blogs.map((blog, index) => (
          <BlogCard key={index} {...blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
