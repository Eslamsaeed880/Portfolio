import React from 'react';

export default function Contact() {

    return (
        <section className="contact">
        <h2>Get in <span className="highlight">Touch</span></h2>
        <p>Have a project in mind or want to collaborate? Feel free to reach out. I'm always open to discussing new opportunities.</p>
        <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
        </form>
        </section>
    );
}