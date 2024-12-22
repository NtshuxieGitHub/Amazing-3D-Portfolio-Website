import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactMe = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      emailjs.send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Ntshuxeko",
          from_email: form.email,
          to_email: "ntshuxekom@ncmatpro.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );

      setLoading(false);

      alert("Thanks for the message, I will get back to you soon 🙂.");

      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setLoading(false);
      console.log(error);
      alert("Something went wrong 🥲.");
    }
  };

  return (
    <section className="c-space my-20" id="contact">
      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <img
          src="/assets/terminal.png"
          alt="terminal-background"
          className="absolute inset-0 min-h-screen left-3"
        />

        <div className="contact-container">
          <h3 className="head-text">Let&apos;s Chat</h3>
          <p className="text-lg text-white-600 mt-3">
            Whether you&apos;re looking to build a new website, improve your
            existing website, or bring some ideas to life. I would love to
            collaborate.
          </p>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col space-y-7"
          >
            <label className="space-y-3">
              <span className="field-label">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="Enter your name..."
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Your Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="Enter your email..."
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Your Message</span>
              <input
                type="text"
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="Enter your message..."
              />
            </label>

            <button className="field-btn" type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send"}

              <img
                src="/assets/arrow-up.png"
                alt="arrow-up"
                className="field-btn_arrow"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
