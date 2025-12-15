import React from 'react'
import './Footer.css'
import Logo from '../../assets/logo.svg'
import user from '../../assets/user.svg'
const Footer = () => {
    return (
        <div class="footer">
            <div class="footer-top">
                <div class="footer-top-left">
                    <img src={Logo} alt='logo' class="footer-logo" />
                    <p>
                        I am a frontend developer passionate about building modern and
                        user-friendly web experiences.
                    </p>
                </div>
                <div class="footer-top-right">
                    <div class="footer-email-input">
                        <img src={user} alt='user' class="email-icon" />
                        <input
                        type="email"
                        placeholder="Enter your email"
                        />
                    </div>
                    <button class="footer-subscribe">Subscribe</button>
                </div>
            </div>
            <hr />
            <div class="footer-bottom">
                <p class="footer-bottom-left">
                    © 2025 Mohammed Elalimy. All rights reserved.
                </p>
                <div class="footer-bottom-right">
                    <p>Terms of Service</p>
                    <p>Privacy Policy</p>
                    <p>Connect with me</p>
                </div>
            </div>
        </div>

)
}

export default Footer
