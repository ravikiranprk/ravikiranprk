"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, MapPin, Send } from "lucide-react";
import { useRef, useState } from "react";

import emailjs from "@emailjs/browser";

export default function ContactPage() {
    const formRef = useRef(null);
    const [loading, setLoading] = useState(false);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        setLoading(true);

        try {
            await emailjs.sendForm(
                process.env.NEXT_PUBLIC_PORTFOLIO_EMAILJS_SERVICE_ID as string,
                process.env.NEXT_PUBLIC_PORTFOLIO_EMAILJS_TEMPLATE_ID as string,
                formRef.current || "",
                process.env.NEXT_PUBLIC_PORTFOLIO_EMAILJS_PUBLIC_KEY as string
            )
            setName("");
            setEmail("");
            setSubject("");
            setMessage("");
            setLoading(false);
        } catch (error) {
            console.log("EmailJS Error", error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <section className="w-full min-h-screen bg-white/60 backdrop-blur-xl py-24 px-6 md:px-20 flex flex-col items-center">
            {/* Heading */}
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-6xl font-extrabold text-center mb-14 text-gray-800"
            >
                Get In{" "}
                <span className="bg-linear-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">
                    Touch
                </span>
            </motion.h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full max-w-6xl">
                {/* Left: Contact Info */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    className="bg-white/50 border border-gray-200 backdrop-blur-xl rounded-2xl p-8 shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_15px_45px_rgba(59,130,246,0.25)] transition-all"
                >
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Let's Connect</h2>
                    <p className="text-gray-700 mb-8">
                        I'm looking for full-time/part-time roles in the tech industry. I'm open to freelance projects, collaborations, or just a friendly chat about tech and creativity. Reach out through any of the following platforms:
                    </p>

                    <div className="flex flex-col gap-5">
                        <a
                            href="mailto:ravikiranprk160@gmail.com"
                            className="flex items-center gap-3 text-gray-800 hover:text-blue-600 transition"
                        >
                            <Mail size={22} /> ravikiranprk160@gmail.com
                        </a>
                        <a
                            href="https://github.com/ravikiranprk"
                            target="_blank"
                            className="flex items-center gap-3 text-gray-800 hover:text-blue-600 transition"
                        >
                            <Github size={22} /> github.com/ravikiranprk
                        </a>
                        <a
                            href="https://www.linkedin.com/in/ravi-kiran-palaparthi-ab7934221/"
                            target="_blank"
                            className="flex items-center gap-3 text-gray-800 hover:text-blue-600 transition"
                        >
                            <Linkedin size={22} /> linkedin.com/in/ravi-kiran-palaparthi-ab7934221/
                        </a>
                        <div className="flex items-center gap-3 text-gray-800">
                            <MapPin size={22} /> Guntur, India
                        </div>
                    </div>
                </motion.div>

                {/* Right: Contact Form */}
                <motion.form
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    className="bg-white/50 border border-gray-200 backdrop-blur-xl rounded-2xl p-8 shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_15px_45px_rgba(59,130,246,0.25)] transition-all flex flex-col gap-6"
                    ref={formRef}
                    onSubmit={handleSubmit}
                >
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                        Send a Message
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="border border-gray-300 rounded-xl px-4 py-3 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="border border-gray-300 rounded-xl px-4 py-3 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <input
                        type="text"
                        placeholder="Subject"
                        className="border border-gray-300 rounded-xl px-4 py-3 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                    />

                    <textarea
                        rows={4}
                        placeholder="Your Message"
                        className="border border-gray-300 rounded-xl px-4 py-3 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />

                    <button
                        type="submit"
                        disabled={loading}
                        className="cursor-pointer flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition-all"
                    >
                        {loading ? <span>Sending...</span> : <span className="flex gap-3 items-center justify-center">Send Message <Send size={18} /> </span>}
                    </button>
                </motion.form>
            </div>
        </section>
    );
}