import "./globals.css";
import Navbar from "./components/custom/Navbar";
import Footer from "./components/custom/Footer";
import { Toaster } from 'react-hot-toast';

export const metadata = {
  title: "glint",
  description: "we make tech feel better",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body>
        <Toaster position="bottom-right"
        reverseOrder={false}/>
        {/* <Navbar /> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
