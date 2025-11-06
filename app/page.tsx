"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
    return (
        <main className="min-h-screen bg-[#fff7ef] flex flex-col">
            {/* Hero Section */}
            <section className="flex-1 flex justify-center items-center px-4">
                <div className="container mx-auto flex flex-col md:flex-row items-center gap-12 p-10">

                    {/* Text Section */}
                    <motion.div
                        className="flex-1"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Hi, I'm{" "}
                            <motion.span
                                className="text-gray-900 inline-block"
                                initial={{ scale: 0.8 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                            >
                                Ravi Kiran Palaparthi
                            </motion.span>
                        </h1>
                        <motion.p
                            className="text-gray-700 text-lg mb-6 max-w-lg"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            I'm a web developer passionate about creating interactive and dynamic user experiences.
                        </motion.p>

                        <motion.button
                            whileHover={{
                                scale: 1.05,
                                backgroundColor: "#000000",
                                transition: { duration: 0.2 },
                            }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-gray-900 text-white px-6 py-3 rounded-lg text-sm font-medium transition cursor-pointer"
                        >
                            <Link href="/contact">
                                Get in touch
                            </Link>
                        </motion.button>
                    </motion.div>

                    {/* Avatar Section */}
                    <motion.div
                        className="flex-1 flex justify-center"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                    >
                        <motion.div
                            className="w-48 h-48 md:w-60 md:h-60 bg-[#f0dfc8] rounded-full flex items-center justify-center overflow-hidden shadow-md"
                            animate={{
                                y: [0, -10, 0],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        >
                            <motion.img
                                src="https://avatars.githubusercontent.com/u/000000?v=4"
                                alt="Profile"
                                className="w-40 h-40 md:w-48 md:h-48 object-cover rounded-full"
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.7 }}
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}