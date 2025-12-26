import React, { useState } from 'react'
import './contact.css'
import theme from '../../assets/theme.svg'
import mail from '../../assets/mail.svg'
import phone from '../../assets/phone.svg'
import location from '../../assets/location.svg'
import Swal from 'sweetalert2'
const Contact = () => {
    const [result, setResult] = useState("");
    const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "285a4185-57e3-4f9a-ad26-2fea262992a9");

    const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
        });


        const data = await response.json();
            if (data.success) {
                Swal.fire({
                    icon: 'success',
                    title: 'Done!',
                    text: 'Email submitted successfully 🚀',
                    confirmButtonColor: '#B415FF',
                });

                event.target.reset();
                } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                });
                }
    };

    return (
        <div className='contact' id='contact'>
            <div className="title">
                <h1>Get in touch</h1>
                <img src={theme} alt='theme'/>
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's talk</h1>
                    <p>I'm currently available to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail} alt=''/><p>mohammed.m.elalimy@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                            <img src={phone} alt=''/><p>+20 11 1341 4805</p>
                        </div>
                        <div className="contact-detail">
                            <img src={location} alt=''/><p>Tanta , Egypt</p>
                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit}className="contact-right">
                    <input type="hidden" name="subject" value="New Submission from Portfolio" />
                    <label>Your Name</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        required
                    />
                    <label>Your Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        required
                    />
                    <label>Your Message</label>
                    <textarea
                        name="message"
                        rows="8"
                        placeholder="Enter your message"
                        required
                    ></textarea>
                    <div
                        className="h-captcha"
                        data-sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
                    ></div>

                    <button type="submit" className="contact-submit">
                        Submit now
                    </button>
                </form>

            </div>
        </div>
    )
}

export default Contact
