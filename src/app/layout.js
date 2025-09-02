import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Chuks Interior Enterprise",
  description: "Official website for Chuks Interior Enterprise",
  verification: {
    google: "Y3H1zisaIkRbDcekhhTwmRzGUKt2Rswet2aQ9RYc_Kk",
  },
}

export default function RootLayout({ children }) {
  return (


    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
