import React from "react";

const Web = () => {
  return (
    <>
      <div className="bg-white shadow-lg rounded-lg p-8 mb-10">
        <h1 className="text-4xl font-bold text-left text-orange-600">
          Web Design & Development
        </h1>
      </div>
      <div className="flex flex-wrap bg-gray-100">
        <div className="w-full lg:w-1/4 bg-orange-600 text-white p-8">
          <ul className="space-y-4">
            <li className="py-2 font-medium">Web Design & Development</li>
            <li className="py-2 font-medium">Ecommerce Solutions</li>
            <li className="py-2 font-medium">App Development</li>
            <li className="py-2 font-medium">Web Application</li>
            <li className="py-2 font-medium">School Management</li>
            <li className="py-2 font-medium">CRM Development</li>
          </ul>
        </div>

        <div className="w-full lg:w-3/4 bg-white p-8">
          <h1 className="text-3xl font-bold text-orange-600 mb-6">
            Web Design and Development Company
          </h1>
          <p className="text-gray-600 leading-relaxed mb-8">
            At Bus Technologies, we believe that website development is not about
            merely programming the data to create a collection of web-pages
            website, we believe that an efficient website helps in adding value
            to a brand. It helps a business reach out to a greater number of
            potential customers. We help you portray your brand values through
            compelling content, client liaison, network security and web server
            configuration. We also build highly effective e-commerce websites
            with payment gateways to help you establish a notable online
            marketplace for your products.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Static Website */}
            <div className="bg-red-600 text-white p-6 rounded-lg shadow">
              <h2 className="text-2xl font-bold">Static Website</h2>
              <p className="mt-4">
                Static websites are simple in nature. They are written in basic
                HTML and CSS, offering a straightforward way of presenting
                information online without complex functionalities.
              </p>
            </div>

            {/* Dynamic Website */}
            <div className="bg-green-600 text-white p-6 rounded-lg shadow">
              <h2 className="text-2xl font-bold">Dynamic Website</h2>
              <p className="mt-4">
                Dynamic websites allow for user interaction, offering a
                personalized user experience. This can include user-generated
                content, real-time updates, and more.
              </p>
            </div>

            {/* WordPress Website */}
            <div className="bg-blue-600 text-white p-6 rounded-lg shadow">
              <h2 className="text-2xl font-bold">WordPress Website</h2>
              <p className="mt-4">
                With thousands of customizable themes, WordPress allows users to
                design their websites as per their requirements, helping to
                create a unique online presence.
              </p>
            </div>
          </div>
          <h1 className="mt-10 text-3xl font-bold text-orange-600 mb-6">
            Features of Static, Dynamic and WordPress Websites
          </h1>
          <p className="text-gray-600 leading-relaxed mb-8">
            User-Friendly Interface : WordPress offers a user-friendly
            interface, making it easy even for beginners to create and manage
            their websites. <br />
            Plugin Functionality : WordPress has a vast library of plugins that
            can add additional functionality to your website. This includes SEO
            tools, social media integration, and e-commerce capabilities. <br />
            Blogging Support : WordPress originally started as a blogging
            platform and thus provides robust support for blog creation and
            management, making it ideal for businesses that rely on content
            marketing. <br />
          </p>
        </div>
      </div>
    </>
  );
};

export default Web;
