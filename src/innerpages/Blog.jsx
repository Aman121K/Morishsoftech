import React from "react";
import img1 from "../asset/ecommerce-development-company.webp";
import img2 from "../asset/website-designing-company-delhi.webp";
import img3 from "../asset/website-designing-company.webp";
import { NavLink } from "react-router-dom";

const Blog = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="text-white text-4xl font-bold mb-4 bg-orange-400 p-4">
        Latest Blog
      </div>
      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-3">
          {/* Blog Post 1 */}
          <div className="flex mb-4">
            <div className="w-1/3 mr-4">
              <div className="image-container relative overflow-hidden group">
                <img
                  src={img1}
                  alt="blog1"
                  className="w-full h-full transform transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>
            <div className="w-2/3">
              <div className="text-gray-700 text-xl font-medium mb-2">
                <div className="text-gray-700 text-sm mb-2">28 July 2023</div>
                Revolutionizing Online Retail: Ecommerce Website Design in
                Gurgaon
              </div>
              <div className="text-gray-700 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                quis lorem vitae nisi consequat varius. Quisque id lectus
                sapien. Fusce quis leo quis augue aliquet tincidunt. Morbi
                tincidunt, nisl quis consequat sagittis, justo lacus luctus
                lorem, quis ultrices nisi lorem vitae nisi.
                <div className="">
                  <button className="text-black border border-solid border-white py-2 px-4 rounded bg-opacity-70 hover:bg-opacity-90 transition duration-300">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Blog Post 2 */}
          <div className="flex mb-4">
            <div className="w-1/3 mr-4">
              <div className="image-container relative overflow-hidden group">
                <img
                  src={img2}
                  alt="blog2"
                  className="w-full h-full transform transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>
            <div className="w-2/3">
              <div className="text-gray-700 text-xl font-medium mb-2">
                <div className="text-gray-700 text-sm mb-2">28 July 2023</div>
                Why Choose Buslala Technologies as Your Website Designing Company in
                Delhi?
              </div>
              <div className="text-gray-700 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                quis lorem vitae nisi consequat varius. Quisque id lectus
                sapien. Fusce quis leo quis augue aliquet tincidunt. Morbi
                tincidunt, nisl quis consequat sagittis, justo lacus luctus
                lorem, quis ultrices nisi lorem vitae nisi.
                <div className="">
                  <button className="text-black border border-solid border-white py-2 px-4 rounded bg-opacity-70 hover:bg-opacity-90 transition duration-300">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Blog Post 3 */}
          <div className="flex mb-4">
            <div className="w-1/3 mr-4">
              <div className="image-container relative overflow-hidden group">
                <img
                  src={img3}
                  alt="blog3"
                  className="w-full h-full transform transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>
            <div className="w-2/3">
              <div className="text-gray-700 text-xl font-medium mb-2">
                <div className="text-gray-700 text-sm mb-2">28 July 2023</div>
                Benefits of Hiring Professional Website Designing Company
              </div>
              <div className="text-gray-700 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                quis lorem vitae nisi consequat varius. Quisque id lectus
                sapien. Fusce quis leo quis augue aliquet tincidunt. Morbi
                tincidunt, nisl quis consequat sagittis, justo lacus luctus
                lorem, quis ultrices nisi lorem vitae nisi.
                <div className="">
                  <button className="text-black border border-solid border-white py-2 px-4 rounded bg-opacity-70 hover:bg-opacity-90 transition duration-300">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="col-span-1">
          <div className="bg-orange-400 p-4 rounded-lg shadow-lg mb-4">
            <div className="text-white text-xl font-bold mb-2">Categories</div>
            <div className="text-white text-sm space-y-2 flex flex-col">
              <NavLink to="#">Landing Page</NavLink>
              <NavLink to="#">Portfolio</NavLink>
              <NavLink to="#">Business</NavLink>
              <NavLink to="#">Travel</NavLink>
            </div>
          </div>
          <div className="bg-orange-400 p-4 rounded-lg shadow-lg mb-4">
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
