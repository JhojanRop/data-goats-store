import "./globals.css";
import { Metadata } from "next";
import { Poppins } from "next/font/google";
import ClientLayout from "./ClientLayout";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Data Goats Store",
  description: "A store for data goats",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return <ClientLayout font={poppins}>{children}</ClientLayout>;
}
