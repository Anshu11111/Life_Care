import React from 'react';

const Contact = () => {
  return (
    <section>
      <div className="px-4 mx-auto max-w-screen-md">
        <h2 className="heading text-center">Contact Us</h2>
        <p className="mb-8 lg:mb-16 font-light text-center text_para">
          Got a technical issue? Want to send feedback about a beta feature? Let us know.
        </p>
        <form action="#" className="space-y-8">
          <div>
            <label htmlFor="email" className="form_label">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="example@gmail.com"
              className="form_input mt-1"
              required
            />
          </div>
          <div className='sm:col-span-2'>
            <label htmlFor="subject" className="form_label">
              Your Message
            </label>
            <textarea
              id="message"
              placeholder="Your message here..."
              className="form_input mt-1"
              rows="4"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="px-6 py-3 bg-primaryColor text-white font-semibold rounded-md"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
