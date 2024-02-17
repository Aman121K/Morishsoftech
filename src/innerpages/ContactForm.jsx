import React, { useState } from "react";

function ContactForm() {
  // Define state variables for form inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Send form data to server or API
    console.log({ name, email, phone, company, message });
    // Clear form inputs
    setName("");
    setEmail("");
    setPhone("");
    setCompany("");
    setMessage("");
  };

  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-6"></div>
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h1 className="text-4xl font-bold text-left text-gray-800">
            Contact Us
          </h1>
          <p className="text-xl font-bold text-orange-600 text-center mb-8">
            Get in touch with us
          </p>
          <div className="grid grid-cols-2 gap-8">
            <div className="col-span-2 md:col-span-1">
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-gray-600 font-medium mb-2"
                  >
                    Your Name*
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-gray-600 font-medium mb-2"
                  >
                    Email Id*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="phone"
                    className="block text-gray-600 font-medium mb-2"
                  >
                    Contact Number*
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="company"
                    className="block text-gray-600 font-medium mb-2"
                  >
                    Company Name (if any)
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="block text-gray-600 font-medium mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows="4"
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                  ></textarea>
                </div>
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="bg-orange-500 text-white font-bold px-8 py-3 rounded-md hover:bg-black"
                  >

                    Submit
                  </button>
                </div>
              </form>
            </div>
            <div className="col-span-2 md:col-span-1">
              <div className="bg-orange-200 p-6 rounded-md">
                <h2 className="text-xl font-bold text-gray-800 mb-4">
                  India Address :

                </h2>
                <p className="text-gray-600 mb-2">
                  RZF 535, Rajnagar-2,
                  <br />
                  South West Delhi, Delhi-110077
                </p>
                <p className="text-gray-600 mb-2"></p>
                <p className="text-gray-600 mb-2">
                 support@buslalatechnologies.ltd
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
