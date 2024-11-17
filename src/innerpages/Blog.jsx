import React from "react";
import img1 from "../asset/ecommerce-development-company.webp";
import img2 from "../asset/website-designing-company-delhi.webp";
import img3 from "../asset/website-designing-company.webp";
import { NavLink } from "react-router-dom";

const Blog = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="text-white text-4xl font-bold mb-4 bg-purple-500 p-4">
        Latest Blog
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="col-span-1 lg:col-span-3">
          {/* Blog Posts */}
          {[
            {
              id: 1,
              image: img1,
              title:
                "Revolutionizing Online Retail: Ecommerce Website Design in Gurgaon",
              date: "28 July 2023",
              article:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit ",
            },
            {
              id: 2,
              image: img2,
              title:
                "  Why Choose Morishsoftech as Your Website Designing Company in Gurgaon",
              date: "28 July 2023",
              article:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            },
            {
              id: 3,
              image: img3,
              title:
                "Benefits of Hiring Professional Website Designing Company",
              date: "28 July 2023",
              article:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            },
          ].map((post) => (
            <div key={post.id} className="flex mb-4">
              <div className="w-full sm:w-1/3 mr-4">
                <div className="image-container relative overflow-hidden group">
                  <img
                    src={post.image}
                    alt={`blog${post.id}`}
                    className="w-full h-full transform transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>
              <div className="w-full sm:w-2/3">
                <div className="text-gray-700 text-xs md:text-xl font-medium mb-2">
                  <div className="text-gray-700 text-xs md:text-sm mb-2">
                    {post.date}
                  </div>
                  {post.title}
                </div>
                <div className="text-gray-700 text-xs md:text-sm">
                  {post.article}
                  <div className="">
                    <button className="text-black border border-solid border-white py-2 px-4 rounded bg-opacity-70 hover:bg-opacity-90 transition duration-300">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="col-span-1 lg:col-span-1">
          <div className="bg-purple-500 p-4 rounded-lg shadow-lg mb-4">
            <div className="text-white text-xl font-bold mb-2">Categories</div>
            <div className="text-white text-sm space-y-2 flex flex-col">
              <NavLink to="#">Landing Page</NavLink>
              <NavLink to="#">Portfolio</NavLink>
              <NavLink to="#">Business</NavLink>
              <NavLink to="#">Travel</NavLink>
            </div>
          </div>
          <div className="bg-purple-500 p-4 rounded-lg shadow-lg mb-4">
            <div className="text-white text-xl font-bold mb-2">Tags</div>
            <div className="text-white text-sm space-x-2">
              <NavLink to="#">Web</NavLink>
              <NavLink to="#">Travel</NavLink>
              <NavLink to="#">Hosting</NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
