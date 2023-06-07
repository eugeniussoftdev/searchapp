import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";

import Header from "./components/Header";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Blog",
  description: "Blog",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
