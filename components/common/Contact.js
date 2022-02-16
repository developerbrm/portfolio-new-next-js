import React, { useState, useEffect } from "react";

const Contact = () => {
  const initialFormData = {
    name: "",
    email: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
  };

  useEffect(() => {
    const form = document.forms["contact-form"];

    setFormData((prevData) => ({
      ...prevData,
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    }));
  }, []);

  return (
    <section id="contact" title="Contact Me" className="bg-slate-100">
      <h2 className="py-8 text-center font-laila text-4xl font-bold text-custom-dark-blue">
        Contact Me
      </h2>

      <form
        name="contact-form"
        className="w-full space-y-5 bg-slate-50 p-5  text-slate-800"
        onSubmit={handleFormSubmit}
      >
        <label title="Name" className="block">
          <div className="mb-1 font-semibold text-custom-dark-blue">
            Full Name
          </div>
          <input
            type="text"
            name="name"
            placeholder="Enter your full name"
            id=""
            value={formData["name"]}
            onChange={handleInputChange}
            required
            className="block w-full rounded-md border border-slate-300 bg-white px-3 py-2 placeholder-slate-400 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 focus:invalid:border-pink-500 focus:invalid:text-pink-500 focus:invalid:ring-pink-500 disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-500 disabled:shadow-none sm:text-sm"
          />
        </label>
        <label title="Email" className="block">
          <div className="mb-1 font-semibold text-custom-dark-blue">Email</div>
          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            id=""
            value={formData["email"]}
            onChange={handleInputChange}
            required
            className="block w-full rounded-md border border-slate-300 bg-white px-3 py-2 placeholder-slate-400 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 focus:invalid:border-pink-500 focus:invalid:text-pink-500 focus:invalid:ring-pink-500 disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-500 disabled:shadow-none sm:text-sm"
          />
        </label>
        <label title="Name" className="block">
          <div className="mb-1 font-semibold text-custom-dark-blue">
            Message
          </div>
          <textarea
            name="message"
            placeholder="Enter your message"
            id=""
            value={formData["message"]}
            onChange={handleInputChange}
            className="block max-h-[6rem] min-h-[3rem] w-full max-w-full rounded-md border border-slate-300 bg-white px-3 py-2 placeholder-slate-400 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 focus:invalid:border-pink-500 focus:invalid:text-pink-500 focus:invalid:ring-pink-500 disabled:border-slate-200 disabled:bg-slate-50 disabled:text-slate-500 disabled:shadow-none sm:text-sm"
          />
        </label>

        {/* <div className="!my-8 block h-px rounded-full bg-slate-200"></div> */}

        <div className="!py-8 ">
          <button type="submit" className="btn bg-emerald-500 text-white">
            Send Message
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
