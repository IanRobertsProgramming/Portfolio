/* eslint-disable react/no-unescaped-entities */

import "../styles/contact.css";
import { Icon } from "@iconify/react";

export default function Contact() {
  return (
    <section id="contact">
      <div className="userInfo">
        <h1 className="contactTitle">Let's Connect!</h1>
        <span className="contactDesc">
          Looking to hire a skilled and adaptable software developer? I’d love
          to chat! Whether you have a job opportunity, a project idea, or just
          want to learn more about my work, feel free to reach out.
          <br />
          <br />
          You can contact me via email or connect with me on LinkedIn. I’ll get
          back to you as soon as possible!
          <br />
          <br />
          Looking forward to working together!
        </span>
        <form className="contactForm">
          <input type="text" placeholder="Your Name" className="name" />
          <input type="email" placeholder="Your Email" className="email" />
          <textarea placeholder="Message" className="msg" rows="5"></textarea>
          <button type="submit" value="send" className="submitBtn">
            Submit
          </button>
          <div className="links">
            <Icon icon="akar-icons:linkedin-fill" className="link" />
            <Icon icon="akar-icons:github-fill" className="link" />
          </div>
        </form>
      </div>
      <h1>Contact Information</h1>
      <h3>Ian Roberts</h3>
      <h3>Email: IanR9532@gmail.com</h3>
    </section>
  );
}
