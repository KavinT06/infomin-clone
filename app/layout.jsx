import { Geist, Geist_Mono, Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "./Header/page";

const opensans = Open_Sans({
  subsets: ['latin'],
  weight: ["400", "700"],
  variable: "--font-opensans",
  fallback: ['sans-serif'],
  display: 'swap',
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata = {
  title: "Infomin Solutions - Web Development Services",
  description: "Professional web development and software solutions for businesses at affordable costs.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${opensans.variable} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
