import "./globals.css";
import { Open_Sans } from 'next/font/google'
import Header from "./layout/Header";
import Footer from "./layout/Footer";

const openSans = Open_Sans({
  subsets: ['latin'],
  weight:[ '400','600'], 
});

export const metadata = {
  title: "Portfolio",
  description: "Team Portfolio",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={`${openSans.className} antialiased h-screen text-[#171717] bg-white`}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
