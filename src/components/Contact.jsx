function Contact() {
  return (
    <section id="contact" className="contact-section">
      <p className="section-label">CONTACT</p>

      <h1>Let's Work Together</h1>

      <p className="contact-description">
        I'm currently looking for Front-end Developer Internship opportunities.
      </p>

      <form
        action="https://formspree.io/f/moeqrprz"
        method="POST"
        className="contact-form"
      >
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="ploypailinkumpook@gmail.com"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="6"
            placeholder="Your message..."
            required
          ></textarea>
        </div>

        <button type="submit" className="contact-button">
          Send Message
        </button>
      </form>
    </section>
  )
}

export default Contact