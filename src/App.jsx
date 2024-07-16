import React from 'react';
import { Menu, Dropdown, Card, Form, Input, Button } from 'antd';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope,FaInstagram, FaFacebook } from 'react-icons/fa';
import './App.css';

function App() {
    return (
        <div className="bg-gray-100 font-sans">
            {/* Header */}
            <header className="bg-white shadow-md sticky top-0 z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                    <div className="text-2xl font-bold">Amna Khan</div>
                    <nav className="hidden md:block">
                        <Menu mode="horizontal" className="border-b-0">
                            <Menu.Item key="about">About</Menu.Item>
                            <Menu.Item key="projects">Projects</Menu.Item>
                            <Menu.Item key="contact">Contact</Menu.Item>

                            </Menu>
                    </nav>
                    <div className="md:hidden">
                        <Dropdown overlay={
                            <Menu>
                                <Menu.Item key="about">About</Menu.Item>
                                <Menu.Item key="projects">Projects</Menu.Item>
                                <Menu.Item key="contact">Contact</Menu.Item>
                            </Menu>
                        }>
                            <a onClick={e => e.preventDefault()}>Menu</a>
                        </Dropdown>
                    </div>
                </div>
            </header>

            {/* Hero */}
            <motion.section
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-gray-900 text-white py-32"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-bold mb-4">Amna Khan - Full-Stack Developer</h1>
                    <p className="text-lg mb-8">
                        Building Bridges between Technology and Humanity
                    </p>
                    <a href="https://www.linkedin.com/in/amna-khan-373b861b0/" target="_blank" rel="noopener noreferrer">
                        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg">
                            Let's Connect
                        </button>
                    </a>
                </div>
            </motion.section>

            {/* About */}
            <motion.section
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white py-16"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold mb-8">About Me</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <Card>
                            <h3 className="text-xl font-bold mb-4">My Background</h3>
                            <p>
                                Hey, I'm a Full Stack developer and UI/UX designer with 2+ years of experience in crafting high-performance websites that drive business results. My expertise spans Next.js, React, Node.js, Python , TailwindCSS, FamerMotion, Figma ,WordPress, AWS( serverless architecture), with a focus on scalability, security, and user experience. I've successfully delivered numerous projects for clients across various industries, consistently meeting deadlines and exceeding expectations. Let's collaborate to bring your web vision to life!
                            </p>
                        </Card>
                        <Card>
                            <h3 className="text-xl font-bold mb-4">My Skills</h3>
                            <div className="grid grid-cols-3 gap-4">
                                <div className="flex flex-col items-center">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React" className="h-12 mb-2" />
                                </div>
                                <div className="flex flex-col items-center">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" alt="Node.js" className="h-12 mb-2" />
                                </div>
                                <div className="flex flex-col items-center">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg" alt="Next.js" className="h-8 mb-2" />
                                </div>
                                <div className="flex flex-col items-center">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" alt="Figma" className="h-12 mb-2" />
                                </div>
                                <div className="flex flex-col items-center">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" alt="AWS" className="h-12 mb-2" />
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </motion.section>

            {/* Projects */}
            <motion.section
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-gray-100 py-16"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold mb-8">My Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <Card>
                            <img src="https://miro.medium.com/v2/resize:fit:554/format:webp/1*8qWrAXLuEUPSi2YCpTQOwg.png" alt="Project 1" className="rounded-t-lg ml-6 mt-4" />
                            <div className="p-4">
                                <h3 className="text-xl font-bold mb-2">The SocialBot</h3>
                                <p className="mb-4">
                                    A responsive and interactive  website built with Nextjs, Ant Design, and Tailwind CSS.
                                </p>
                                <a href="https://www.thesocialbot.ai/" className="text-blue-500 hover:text-blue-600">
                                    View Project
                                </a>
                            </div>
                        </Card>
                        <Card>
                            <img src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*OoNGzay7mR0q-aSpCd-Y5Q.png" alt="Project 1" className="rounded-t-lg ml-2" />
                            <div className="p-4">
                                <h3 className="text-xl font-bold mb-2">Meral & Co</h3>
                                <p className="mb-4">An Ecommerce website for Jewelry</p>
                                <a href="https://amnakhan15.github.io/project_WAD/" className="text-blue-500 hover:text-blue-600">
                                    View Project
                                </a>
                            </div>
                        </Card>
                        <Card>
                            <img src="https://miro.medium.com/v2/resize:fit:604/format:webp/1*2fBj8x7-Hmf-J1vE7o8wkA.png" alt="Project 1" className="rounded-t-lg ml-2" />
                            <div className="p-4">
                                <h3 className="text-xl font-bold mb-2">HealHub</h3>
                                <p className="mb-4">
                                    A responsive and interactive  website built with Nextjs, Ant Design, and Tailwind CSS.
                                </p>
                                <a href="https://amnakhan15.github.io/healhub/index.html" className="text-blue-500 hover:text-blue-600">
                                    View Project
                                </a>
                            </div>
                        </Card>
                    </div>
                </div>
            </motion.section>

            {/* Contact */}
            <motion.section
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="bg-white py-16"
            >
                <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
                    <Form layout="vertical">
                        <Form.Item label="Name" name="name">
                            <Input />
                        </Form.Item>
                        <Form.Item label="Email" name="email">
                            <Input />
                        </Form.Item>
                        <Form.Item label="Message" name="message">
                            <Input.TextArea rows={4} />
                        </Form.Item>
                        <Button type="primary" htmlType="submit" className="bg-blue-500 hover:bg-blue-600">
                            Submit
                        </Button>
                    </Form>
                    <div className="mt-8 flex justify-center space-x-4">
                        <a href="https://github.com/AmnaKhan15" className="text-gray-500 hover:text-gray-700">
                            <FaGithub size={24} />
                        </a>
                        <a href="https://www.linkedin.com/in/amna-khan-373b861b0/" className="text-gray-500 hover:text-gray-700">
                            <FaLinkedin size={24} />
                        </a>
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ek.amnakhan@gmail.com" className="text-gray-500 hover:text-gray-700">
                            <FaEnvelope size={24} />
                        </a>
                        <a href="https://www.instagram.com/amna_meral/?hl=en" className="text-gray-500 hover:text-gray-700">
                            <FaInstagram size={24} />
                        </a>
                        <a href="https://www.facebook.com/ek.amnakhan" className="text-gray-500 hover:text-gray-700">
                            <FaFacebook size={24} />
                        </a>
                    </div>
                </div>
            </motion.section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p>&copy; 2024 Amna Khan. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}

export default App;
