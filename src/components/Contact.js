const Contact = () => {
  return (
    <div className="contact-page">
      <h1 className="contact-title">📬 Contact Us</h1>
      <p className="contact-description">
        We'd love to hear from you! Whether you have a question about meals, partnerships, or anything else — our team is ready to help.
      </p>

      <form className="contact-form">
        <label>
          Name:
          <input type="text" placeholder="Your Name" required />
        </label>

        <label>
          Email:
          <input type="email" placeholder="you@example.com" required />
        </label>

        <label>
          Message:
          <textarea rows="5" placeholder="Your message..." required></textarea>
        </label>

        <button type="submit">Send Message</button>
      </form>

      <div className="contact-info">
        <p>📧 Email: support@homefeast.in</p>
        <p>📞 Phone: +91 9151295969 / +91 7905445425 / +91 7380803666</p>
        <p>📍 Location: Kanpur, Uttar Pradesh, India</p>
      </div>
    </div>
  );
};

export default Contact;
