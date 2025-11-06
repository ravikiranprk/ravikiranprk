"use client";

import Link from "next/link";

export default function Home() {
    return (
        <main className="min-h-screen bg-[#fff7ef] flex flex-col">
            {/* Hero Section */}
            <section className="flex-1 flex justify-center items-center px-4">
                <div className="container mx-auto flex flex-col md:flex-row items-center gap-12 p-10">

                    {/* Text */}
                    <div className="flex-1">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Hi, I'm <span className="text-gray-900">Ravi Kiran Palaparthi</span>
                        </h1>
                        <p className="text-gray-700 text-lg mb-6 max-w-lg">
                            I'm a web developer passionate about creating interactive and dynamic user experiences.
                        </p>
                        <button className="bg-gray-900 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-black transition cursor-pointer">
                            <Link href="/contact">
                                Get in touch
                            </Link>
                        </button>
                    </div>

                    {/* Avatar */}
                    <div className="flex-1 flex justify-center">
                        <div className="w-48 h-48 md:w-60 md:h-60 bg-[#f0dfc8] rounded-full flex items-center justify-center overflow-hidden">
                            {/* Replace with your image */}
                            <img
                                src="https://avatars.githubusercontent.com/u/000000?v=4"
                                alt="Profile"
                                className="w-40 h-40 md:w-48 md:h-48 object-cover rounded-full"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}