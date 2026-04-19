import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";
import { Toaster } from 'react-hot-toast';
import LogRocketProvider from "@/components/logrocket-provider";
import Script from "next/script";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI Demand Planning & Operations for Restaurants | Orkeneo",
  description: "Orchestrate your restaurant's success with Orkeneo. Predict demand, reduce waste, and automate operations using AI-powered forecasting and insights."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {process.env.NEXT_PUBLIC_ENV === "prod" && (
        <>
          {/* <!-- Google Tag Manager --> */}
          <Script id="google-tag-manager" strategy="afterInteractive">
            {`
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-WK6MMJC5');
            `}
          </Script>
          {/* <!-- End Google Tag Manager --> */}
          {/* <!-- Google tag (gtag.js) --> */}
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-TTMV8GJN6Y"
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
    
              gtag('config', 'G-TTMV8GJN6Y');
            `}
          </Script>
        </>
      )}
      <body
        className={`${inter.variable} ${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-[#F5F7FB]`}
      >
        {process.env.NEXT_PUBLIC_ENV === "prod" && (
          <>
            {/* <!-- Google Tag Manager (noscript) --> */}
            <noscript>
              <iframe
                src="https://www.googletagmanager.com/ns.html?id=GTM-WK6MMJC5"
                height="0"
                width="0"
                style={{ display: 'none', visibility: 'hidden' }}
              ></iframe>
            </noscript>
            {/* <!-- End Google Tag Manager (noscript) --> */}
          </>
        )}
        <LogRocketProvider />
        <Navbar/>
        {children}
        <Footer />
        <Toaster position="top-right" />
      </body>
      {/* <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script> */}
    </html>
  );
}
