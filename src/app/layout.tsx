import type { Metadata } from "next";
import '@/app/styles/globals.scss';


import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Wostat",
  description: "Wostat web application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body><Header/>{children}<Footer/></body>
    </html>
  );
}
