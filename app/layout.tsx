import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Ravi Kiran Palaparthi",
  description: "Personal Portfolio App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased ${inter.className} !bg-[#fff7ef]`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
