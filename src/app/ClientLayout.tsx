'use client';

import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import { NextFontWithVariable } from "next/dist/compiled/@next/font";

export default function ClientLayout({ children, font }: Readonly<{ children: React.ReactNode, font: NextFontWithVariable }>) {
  const pathname = usePathname()
  const hiddenHeaderRoutes = ['/login', '/register', '/admin']
  const showHeader = !hiddenHeaderRoutes.includes(pathname)

  return (
    <html lang="en">
      <body className={`${font.variable} antialiased`}>
        {showHeader && <Header />}
        <main className="mx-auto mt-4 max-w-7xl px-4 sm:px-6 lg:px-8">{children}</main>
      </body>
    </html>
  );
}