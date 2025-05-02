const Contact = () => {
  return (
    <div className="h-screen w-full px-6 py-8 box-border flex flex-col justify-center font-sans text-[#333] bg-gradient-to-r from-[#7e4f1f] to-[#d9a679]">
      <div className="max-w-[750px] mx-auto p-6 border border-[#6b3e26] rounded-lg bg-[#e4bc9b] shadow-md">
        <h1 className="text-center text-[2rem] mb-3 text-[#6b3e26]">📬 Contact Us</h1>
        <p className="text-center text-[1rem] max-w-[500px] mx-auto mb-6 leading-[1.4]">
          We'd love to hear from you! Whether you have a question about meals, partnerships, or anything else — our team is ready to help.
        </p>

        <form className="max-w-[500px] mx-auto mb-8 flex flex-col gap-3">
          <label className="text-[0.9rem] flex flex-col gap-[0.2rem]">
            Name:
            <input type="text" placeholder="Your Name" required className="p-[0.6rem] border border-[#ccc] rounded-[5px] text-[0.9rem]"/>
          </label>

          <label className="text-[0.9rem] flex flex-col gap-[0.2rem]">
            Email:
            <input type="email" placeholder="you@example.com" required className="p-[0.6rem] border border-[#ccc] rounded-[5px] text-[0.9rem]"/>
          </label>

          <label className="text-[0.9rem] flex flex-col gap-[0.2rem]">
            Message:
            <textarea rows="4" placeholder="Your message..." required className="p-[0.6rem] border border-[#ccc] rounded-[5px] text-[0.9rem]"></textarea>
          </label>

          <button type="submit" className="bg-[#ff914d] text-white p-[0.6rem] text-[0.9rem] rounded-[5px] cursor-pointer transition-colors duration-300 ease-in-out hover:bg-[#e2752c]">
            Send Message
          </button>
        </form>

        <div className="text-center text-[0.9rem] leading-[1.4] text-[#555]">
          <p>📧 Email: support@homefeast.in</p>
          <p>📞 Phone: +91 9151295969 / +91 7905445425 / +91 7380803666</p>
          <p>📍 Location: Kanpur, Uttar Pradesh, India</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
