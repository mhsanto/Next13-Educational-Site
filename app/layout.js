import Header from "@/components/Header";
import "./globals.css";
import { Poppins } from "next/font/google";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "BGIFT Institute of Science & Technology",
  description: "Created By Mahmodul Hasan Santo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.varia}`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
