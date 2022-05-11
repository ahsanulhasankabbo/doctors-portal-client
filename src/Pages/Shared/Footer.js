import React from 'react';
import footer from '../../assets/images/footer.png'

const Footer = () => {
    return (
        <footer style={{
            backgroundImage: `url(${footer})`,
            backgroundSize: 'cover'
        }} Class="p-10">
            <div Class='footer'>
                <div>
                    <span Class="footer-title">Services</span>
                    <a Class="link link-hover">Branding</a>
                    <a Class="link link-hover">Design</a>
                    <a Class="link link-hover">Marketing</a>
                    <a Class="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span Class="footer-title">Company</span>
                    <a Class="link link-hover">About us</a>
                    <a Class="link link-hover">Contact</a>
                    <a Class="link link-hover">Jobs</a>
                    <a Class="link link-hover">Press kit</a>
                </div>
                <div>
                    <span Class="footer-title">Legal</span>
                    <a Class="link link-hover">Terms of use</a>
                    <a Class="link link-hover">Privacy policy</a>
                    <a Class="link link-hover">Cookie policy</a>
                </div>

            </div>
            <div Class='text-center my-10'>
                <p>Copyright © 2022 - All right reserved</p>
            </div>
        </footer>
    );
};

export default Footer;