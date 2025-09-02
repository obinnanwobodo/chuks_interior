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
  description: " Transform your space with Chuks Interior Decor. We provide elegant interiors, <br />premium furniture, and stylish home solutions and merchandise across Lagos.",
  verification: {
    google: "Y3H1zisaIkRbDcekhhTwmRzGUKt2Rswet2aQ9RYc_Kk",
  },

  icons: {
    icon: [
      {
        url: "/logo/logo.png",
        type: "image/png",
        sizes: "32x32",
      },
      // You can add more icons here
    ],
  },

  


};

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
