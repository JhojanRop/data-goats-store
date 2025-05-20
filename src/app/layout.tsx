'use client'

import { Poppins } from "next/font/google";
import "./globals.css";
import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  const pathname = usePathname()
  const hiddenHeaderRoutes = ['/login', '/register', '/admin']
  const showHeader = !hiddenHeaderRoutes.includes(pathname)


  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        {showHeader && <Header />}
        <main className="mx-auto mt-4 max-w-7xl px-4 sm:px-6 lg:px-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
