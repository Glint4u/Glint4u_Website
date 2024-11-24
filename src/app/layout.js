import "./globals.css";
import Footer from "./component/Footer";
import Navbar from './component/Navbar';
import { Analytics } from '@vercel/analytics/react';

export const metadata = {
  title: "Glint4u",
  description: "We make tech feel better!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <Analytics />
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
