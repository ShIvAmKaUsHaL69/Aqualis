import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Entry from "../../sections/home/Entry";
import { Poppins } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Acqalis Marine",
  description: "Offering Efficient and Reliable Fueling Services",
};

const poppins = Poppins({
  subsets: ["latin"], // You can change this to other subsets if needed
  weight: ["400", "500", "600", "700"], // Choose the font weights you need
  variable: "--font-poppins", // Set a CSS variable
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <Entry />
        {children}
        <Footer />
      </body>
    </html>
  );
}
