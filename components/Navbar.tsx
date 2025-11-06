"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/skills", label: "Skills" },
        { href: "/projects", label: "Projects" },
        { href: "/experience", label: "Experience" },
        { href: "/contact", label: "Contact" },
    ];

    return (
        <header className="fixed top-0 left-0 w-full z-50 text-black">
            <nav className="container mx-auto flex justify-between items-center px-5 py-4
        bg-white/20 backdrop-blur-xl border border-white/30 shadow-lg rounded-xl mt-2">

                {/* Logo */}
                <Link
                    href="/"
                    className="text-xl font-bold text-black drop-shadow-lg tracking-tight"
                >
                    MyPortfolio
                </Link>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-8 text-[1.07rem] font-medium text-black">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                className="hover:text-gray-600 transition drop-shadow"
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-black"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </nav>

            {/* Mobile Dropdown */}
            {isOpen && (
                <div className="md:hidden mt-2 w-full bg-white/20 backdrop-blur-md border border-white/30 rounded-xl shadow-lg">
                    <ul className="flex flex-col items-center gap-6 py-6 text-lg text-black font-medium">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="hover:text-gray-600 transition drop-shadow"
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </header>
    );
}