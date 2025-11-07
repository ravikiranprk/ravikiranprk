"use client";

import { motion } from "framer-motion";

const experiences = [
    {
        role: "Fullstack Trainer",
        company: "Freelance (Prepinsta)",
        duration: "May 2025 - September 2025",
        desc: "Developed and delivered student-centric training sessions on fullstack application development using modern Java & JavaScript Frameworks."
    },
    {
        role: "Subject Matter Expert (Web Development)",
        company: "Straive",
        duration: "September 2023 - April 2025",
        desc: "I work on developing and maintaining the frontend and backend of the company's web applications using modern JavaScript frameworks."
    },
    {
        role: "Programming Trainer",
        company: "Informatics",
        duration: "April 2022 - June 2022",
        desc: "Delivered student-centric training sessions on programming languages with hands-on projects."
    }
];

export default function ExperiencePage() {
    return (
        <section className="min-h-screen w-full bg-white/60 backdrop-blur-xl py-24 px-6 md:px-20">

            {/* Title */}
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-6xl font-extrabold text-center mb-12 bg-linear-to-r from-blue-300 via-indigo-500 to-indigo-800 bg-clip-text text-transparent"
            >
                Experience
            </motion.h1>

            {/* Experience Cards */}
            <div className="flex flex-col gap-8 max-w-4xl mx-auto">
                {experiences.map((exp, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: i * 0.1 }}
                        className="bg-white/70 border border-gray-200 rounded-2xl p-6 md:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_15px_45px_rgba(59,130,246,0.30)] transition-all duration-300"
                    >
                        <h2 className="text-2xl font-bold text-gray-900">{exp.role}</h2>
                        <p className="text-lg text-gray-700 mt-1">{exp.company}</p>
                        <p className="text-sm text-gray-600 mt-1">{exp.duration}</p>
                        <p className="text-gray-700 mt-4 leading-relaxed">{exp.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
