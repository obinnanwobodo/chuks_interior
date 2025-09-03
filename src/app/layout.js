import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import Script from "next/script";

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
      <head>
        {/* ✅ Facebook Pixel Code */}
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1452279094809624');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1452279094809624&ev=PageView&noscript=1"
          />
        </noscript>
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
