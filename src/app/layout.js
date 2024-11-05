import dynamic from "next/dynamic";
import "./globals.css";
import { Open_Sans } from 'next/font/google'
const Header=dynamic(()=>import('./layout/Header')) 
const Footer=dynamic(()=>import('./layout/Footer')) 

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
