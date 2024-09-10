import { Inter } from "next/font/google";
import "./globals.css";
import StickyNavbar from "@/components/StickyNavbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Guru 99",
  description: "Sheena Seeds guru 99 ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      {children}
      </body>
    </html>
  );
}
