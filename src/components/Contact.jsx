import React from 'react';
import ContactInfo from './ContactInfo';
import DATA, { ICONS } from '../../data';

export default function Contact() {

    return (
        <section className="contact" id="contact">
            <div className="description">
                <h2>Get in <span className="highlight">Touch</span></h2>
                <p className="description-text">Have a project in mind or want to collaborate? Feel free to reach out. I'm always open to discussing new opportunities.</p>
            </div>
            <div className="info">
                <div className="contact-info">
                    <h3>Contact Information</h3>
                    <div className="info-cards">
                        <ContactInfo title="Email" content={ DATA.about.email} icon={ICONS.email} />
                        <ContactInfo title="Phone" content={ DATA.about.phone} icon={ICONS.phone} />
                        <ContactInfo title="Location" content={ DATA.about.location} icon={ICONS.location} />
                    </div>
                </div>
            </div>
        </section>
    );
}