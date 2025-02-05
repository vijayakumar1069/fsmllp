import { Urbanist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GoToTop from "@/components/GoToTop";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-urbanist",
});

export const metadata = {
  title: "FSMLLP",
  description: "Audit and Assurance",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${urbanist.variable} relative  antialiased`}>
        <div className="min-h-screen flex flex-col">
          <nav className="sticky top-0 z-[1000]">
            <Navbar />
          </nav>

          <div className="flex-1 max-w-[90%] mx-auto pt-14">
            {" "}
            {/* Increased padding-top */}
            <main>{children}</main>
          </div>
          <GoToTop />
          <footer>
            <Footer />
          </footer>
        </div>
      </body>
    </html>
  );
}
