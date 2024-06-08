import type { Metadata } from "next";
import '@/app/styles/globals.scss';

import Header from "./components/Header";
import Footer from "./components/Footer";

import { headers } from "next/headers";




export const metadata: Metadata = {
  title: "Wostat",
  description: "Wostat web application",
};

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    const headerList = headers();
    const pathName = headerList.get("curPath");
    const isAdminPanel = pathName === '/admin' || pathName === '/admin/EditSeo' || pathName === '/admin/AddPost';
    console.log(pathName, isAdminPanel);
  return (
    <html lang="en">
      {/* <header>
        <link rel="icon" type="image/x-icon" href="/images/logo/logo.svg"></link>
      </header> */}
      <body>{ !isAdminPanel ? <Header/> : null}{children} { !isAdminPanel ? <Footer/> : null }</body>
    </html>
  );
}
