import React from 'react';
import ContactInfo from './ContactInfo';
import DATA from '../../data';
import EMAIL_ICON from '../../public/email.svg';
import PHONE_ICON from '../../public/phone.svg';
import LOCATION_ICON from '../../public/location.svg';
import useRevealOnScroll from '../useRevealOnScroll';

export default function Contact() {
    const revealRef = useRevealOnScroll('translate-in');

    return (
        <section className="contact reveal" id="contact" ref={revealRef}>
            <div className="description">
                <h2>Get in <span className="highlight">Touch</span></h2>
                <p className="description-text">Have a project in mind or want to collaborate? Feel free to reach out. I'm always open to discussing new opportunities.</p>
            </div>
            <div className="info">
                <div className="contact-info">
                    <h3>Contact Information</h3>
                    <div className="info-cards">
                        <ContactInfo title="Email" content={ DATA.about.email} icon={EMAIL_ICON} />
                        <ContactInfo title="Phone" content={ DATA.about.phone} icon={PHONE_ICON} />
                        <ContactInfo title="Location" content={ DATA.about.location} icon={LOCATION_ICON} />
                    </div>
                </div>
            </div>
        </section>
    );
}