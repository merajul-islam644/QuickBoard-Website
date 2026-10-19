import { useState, type FormEvent } from "react";
import "./contact.css";

const CONTACT_EMAIL = "hello@quickboard.app";

type FieldErrors = {
  name?: string;
  email?: string;
  message?: string;
};

export function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [sent, setSent] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors: FieldErrors = {};
    if (!name.trim()) {
      nextErrors.name = "Please add your name so we know who we're replying to.";
    }
    if (!email.trim()) {
      nextErrors.email = "Please add an email address so we can reply.";
    }
    if (!message.trim()) {
      nextErrors.message = "Please add a short message so we know how to help.";
    }

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setSent(false);
      return;
    }

    const subject = `QuickBoard — message from ${name.trim()}`;
    const body = `Name: ${name.trim()}\nEmail: ${email.trim()}\n\n${message.trim()}`;
    const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
    setSent(true);
  };

  return (
    <main>
      <section className="section contact-intro">
        <div className="container">
          <h1 className="contact-intro__heading">Get started with QuickBoard</h1>
          <p className="contact-intro__text">
            Send us a note and we&rsquo;ll help you get set up.
          </p>
        </div>
      </section>

      <section className="section section--tight contact-body">
        <div className="container">
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="contact-field">
              <label className="contact-field__label" htmlFor="contact-name">
                Name
              </label>
              <input
                id="contact-name"
                className="contact-field__input"
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                aria-invalid={errors.name ? true : undefined}
                aria-describedby={errors.name ? "contact-name-error" : undefined}
              />
              {errors.name && (
                <p className="contact-field__error" id="contact-name-error" role="alert">
                  {errors.name}
                </p>
              )}
            </div>

            <div className="contact-field">
              <label className="contact-field__label" htmlFor="contact-email">
                Email
              </label>
              <input
                id="contact-email"
                className="contact-field__input"
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-invalid={errors.email ? true : undefined}
                aria-describedby={errors.email ? "contact-email-error" : undefined}
              />
              {errors.email && (
                <p className="contact-field__error" id="contact-email-error" role="alert">
                  {errors.email}
                </p>
              )}
            </div>

            <div className="contact-field">
              <label className="contact-field__label" htmlFor="contact-message">
                Message
              </label>
              <textarea
                id="contact-message"
                className="contact-field__input contact-field__input--area"
                name="message"
                rows={6}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                aria-invalid={errors.message ? true : undefined}
                aria-describedby={errors.message ? "contact-message-error" : undefined}
              />
              {errors.message && (
                <p className="contact-field__error" id="contact-message-error" role="alert">
                  {errors.message}
                </p>
              )}
            </div>

            <button type="submit" className="btn btn--primary btn--large contact-form__submit">
              Send Message
            </button>

            <p className="contact-form__note">
              This opens your mail app with your message ready to send —
              nothing is saved here.
            </p>

            {sent && (
              <p className="contact-form__thanks" role="status">
                Thanks — your mail app should be open with your message ready to
                send.
              </p>
            )}
          </form>
        </div>
      </section>
    </main>
  );
}
