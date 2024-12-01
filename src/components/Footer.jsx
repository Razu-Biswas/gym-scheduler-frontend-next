// components/Footer.js
import React from "react";

const Footer = () => {
    return (
        <footer className="bg-indigo-700 text-gray-300 py-12">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6">
                {/* Logo and About Section */}
                <div>
                    <h2 className="text-2xl font-bold text-white">Gym Scheduler</h2>
                    <p className="mt-4 text-sm leading-relaxed">
                        Transform your body, mind, and soul at FitFlex Gym.
                        Join our community and achieve your fitness goals today!
                    </p>
                </div>

                {/* Quick Links Section */}
                <div>
                    <h3 className="text-lg font-semibold text-white">Quick Links</h3>
                    <ul className="mt-4 space-y-3 text-sm">
                        <li>
                            <a href="#about" className="hover:text-white">About Us</a>
                        </li>
                        <li>
                            <a href="#classes" className="hover:text-white">Classes</a>
                        </li>
                        <li>
                            <a href="#trainers" className="hover:text-white">Our Trainers</a>
                        </li>
                        <li>
                            <a href="#contact" className="hover:text-white">Contact</a>
                        </li>
                    </ul>
                </div>

                {/* Contact Section */}
                <div>
                    <h3 className="text-lg font-semibold text-white">Contact Us</h3>
                    <ul className="mt-4 space-y-3 text-sm">
                        <li>
                            <span className="block hover:text-white">📍 123 Gym Street, Fitness City</span>
                        </li>
                        <li>
                            <a href="tel:+123456789" className="hover:text-white">📞 +1 (234) 567-890</a>
                        </li>
                        <li>
                            <a href="mailto:info@fitflexgym.com" className="hover:text-white">✉️ gym@scheduler.com</a>
                        </li>
                    </ul>
                </div>

                {/* Social Media Section */}
                <div>
                    <h3 className="text-lg font-semibold text-white">Follow Us</h3>
                    <div className="mt-4 flex space-x-4">
                        <a
                            href="#"
                            className="text-gray-400 hover:text-white"
                            aria-label="Facebook"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.325 24h11.495v-9.294H9.691V11.41h3.129V8.841c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24h-1.916c-1.504 0-1.796.714-1.796 1.763v2.313h3.592l-.467 3.295h-3.125V24h6.128c.732 0 1.325-.593 1.325-1.326V1.326C24 .593 23.407 0 22.675 0z" />
                            </svg>
                        </a>
                        <a
                            href="#"
                            className="text-gray-400 hover:text-white"
                            aria-label="Instagram"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.342 3.608 1.317.975.975 1.255 2.242 1.317 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.342 2.633-1.317 3.608-.975.975-2.242 1.255-3.608 1.317-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.342-3.608-1.317-.975-.975-1.255-2.242-1.317-3.608-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849c.062-1.366.342-2.633 1.317-3.608.975-.975 2.242-1.255 3.608-1.317 1.265-.058 1.645-.07 4.849-.07zm0-2.163C8.691 0 8.252.014 7.553.072 6.328.156 5.187.436 4.204 1.419c-.983.983-1.263 2.124-1.347 3.349C2.014 5.748 2 6.187 2 9.748v4.504c0 3.561.014 4.001.072 4.701.084 1.225.364 2.366 1.347 3.349.983.983 2.124 1.263 3.349 1.347.7.058 1.14.072 4.701.072s4.001-.014 4.701-.072c1.225-.084 2.366-.364 3.349-1.347.983-.983 1.263-2.124 1.347-3.349.058-.7.072-1.14.072-4.701V9.748c0-3.561-.014-4.001-.072-4.701-.084-1.225-.364-2.366-1.347-3.349-.983-.983-2.124-1.263-3.349-1.347C16.001.014 15.561 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
                            </svg>
                        </a>
                        <a
                            href="#"
                            className="text-gray-400 hover:text-white"
                            aria-label="Twitter"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M24 4.557a9.835 9.835 0 01-2.828.775A4.932 4.932 0 0023.337 3a9.865 9.865 0 01-3.127 1.195A4.92 4.92 0 0016.616 3c-2.717 0-4.92 2.203-4.92 4.92 0 .386.043.762.127 1.125A13.978 13.978 0 011.671 3.149a4.92 4.92 0 001.523 6.573A4.902 4.902 0 01.96 9.242v.062c0 2.414 1.715 4.423 3.993 4.874a4.935 4.935 0 01-2.212.084c.623 1.944 2.431 3.362 4.573 3.402A9.862 9.862 0 010 19.54a13.946 13.946 0 007.548 2.213c9.051 0 14.001-7.496 14.001-13.986 0-.213-.005-.426-.014-.637A10.012 10.012 0 0024 4.557z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            <div className="mt-8 text-center text-sm text-gray-400">
                <p>© {new Date().getFullYear()} Gym Scheduler. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;

