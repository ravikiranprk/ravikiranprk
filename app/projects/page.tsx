"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
    {
        title: "Essential Toolkit",
        desc: "Fullstack application with real-life tools necessary for daily life.",
        tech: ["Next.js", "React.js", "MongoDB", "Node.js", "Tailwind CSS", "Mathematics"],
        live: "https://essential-toolkit.vercel.app/",
        github: "https://github.com/ravikiranprk/essential-toolkit",
    },
    {
        title: "Pokedex",
        desc: "A Pokedexter application built with Next.js and PokeAPI API",
        tech: ["Next.js", "React", "Typescript", "Tailwind CSS", "PokeAPI", "Framer Motion"],
        live: "https://nextjs-pokedexter.vercel.app/",
        github: "https://github.com/ravikiranprk/nextjs-pokedexter",
    },
    {
        title: "Blog Application",
        desc: "A blog application built with Next.js with Biblical content.",
        tech: ["Next.js", "React.js", "Tailwind CSS", "MongoDB", "Node.js", "NextAuth", "JWT"],
        live: "https://blog-bible.vercel.app/",
        github: "https://github.com/ravikiranprk/blog-bible",
    },
    {
        title: "Essential Toolkit Mobile App",
        desc: "A React Native Mobile Application with real-life tools necessary for daily life.",
        tech: ["Expo", "React Native", "React", "Typescript", "Tailwind CSS (Nativewind)", "Mathematics"],
        live: "#",
        github: "https://github.com/ravikiranprk/essential-toolkit-android",
    },
    {
        title: "Todo App",
        desc: "Todo App with Admin Dashboard & Role-based access control",
        tech: ["Next.js", "React.js", "Tailwind CSS", "PostgreSQL", "Drizzle ORM", "Node.js", "NextAuth", "JWT", "Server Actions", "Role based access"],
        live: "https://nextjs-admin-dashboard-gamma.vercel.app/signin",
        github: "https://github.com/ravikiranprk/todo-app",
    },
    {
        title: "First Portfolio Website",
        desc: "My First Portfolio Website built with Next.js and Tailwind CSS",
        tech: ["Next.js", "React.js", "Tailwind CSS", "GSAP"],
        live: "https://portfolio-nextjs-nine-xi.vercel.app/",
        github: "https://github.com/ravikiranprk/portfolio-nextjs",
    },
    {
        title: "Node.js + Express.js REST API",
        desc: "A REST API built with Node.js and Express.js",
        tech: ["Node.js", "Express.js", "SQLite3", "Postman"],
        live: "#",
        github: "https://github.com/ravikiranprk/node-express-crud-api",
    },
    {
        title: "Spring Boot REST API",
        desc: "A REST API built with Java and Spring Boot",
        tech: ["Java", "Spring Boot", "MySQL", "Postman"],
        live: "#",
        github: "https://github.com/ravikiranprk/spring-boot-crud-api",
    },
    {
        title: "Django REST API",
        desc: "A REST API built with Python and Django",
        tech: ["Python", "Django", "SQLite3", "Postman"],
        live: "#",
        github: "https://github.com/ravikiranprk/django-crud-api",
    },
    {
        title: "Flask REST API",
        desc: "A REST API built with Python and Flask",
        tech: ["Python", "Flask", "SQLite3", "Postman"],
        live: "#",
        github: "https://github.com/ravikiranprk/flask-crud-api",
    },
];

export default function ProjectsPage() {
    return (
        <section className="w-full min-h-screen bg-white/60 backdrop-blur-xl py-24 px-6 md:px-20">
            {/* Heading */}
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-6xl font-extrabold text-center mb-14 text-neutral-800"
            >
                My{" "}
                <span className="bg-linear-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">
                    Projects
                </span>
            </motion.h1>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((p, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        className="bg-white/50 backdrop-blur-xl border border-gray-200 p-6 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_15px_45px_rgba(59,130,246,0.30)] transition-all duration-300"
                    >
                        <h2 className="text-2xl font-bold text-gray-900">{p.title}</h2>
                        <p className="mt-3 text-gray-700">{p.desc}</p>

                        {/* Tech chips */}
                        <div className="mt-4 flex flex-wrap gap-2">
                            {p.tech.map((t, idx) => (
                                <span
                                    key={idx}
                                    className="text-sm text-blue-700 bg-blue-100 border border-blue-200 px-3 py-1 rounded-xl"
                                >
                                    {t}
                                </span>
                            ))}
                        </div>

                        {/* CTA Buttons */}
                        <div className="mt-6 flex gap-4">
                            <a
                                href={p.live}
                                target="_blank"
                                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-xl text-white font-semibold text-sm transition"
                            >
                                Live Demo <ExternalLink size={16} />
                            </a>

                            <a
                                href={p.github}
                                target="_blank"
                                className="flex items-center gap-2 border border-gray-300 hover:border-gray-900 px-4 py-2 rounded-xl text-sm font-semibold text-gray-800 transition"
                            >
                                Code <Github size={16} />
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}