import type { Metadata } from "next";
import Head from "next/head";
import "./globals.css";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

// import "highlight.js/styles/github.css";

export const metadata: Metadata = {
  title: "leejunkim",
  description: "Personal notes",
  icons: {
    icon: "/favicon1.png", // Or specify a PNG file like /favicon.png
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <Head>
        <meta charSet="UTF-8" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />

        <link rel="preconnect" href={process.env.NEXT_PUBLIC_API_URL} />
        <link rel="dns-prefetch" href={process.env.NEXT_PUBLIC_API_URL} />
      </Head>
      <meta
        name="google-site-verification"
        content="o_7CxN7gSSBek2bzrce1_LKa5Y7YeDCFZH2rff2sNZw"
      />
      <GoogleAnalytics gaId="G-VEJVKJLKK7" />

      <body className="mt-25">
        <Header />
        <div className="px-6  md:pl-70 lg:pl-82 xl:pl-90 lg:w-10/12">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
