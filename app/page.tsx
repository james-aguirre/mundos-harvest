import Header from "@/components/Header";
import "./globals.css";
import { Figtree } from "next/font/google";
import Image from "next/image";

const font = Figtree({ subsets: ["latin"] });

export const metadata = {
  title: "Mundos Harvest",
  description: "A local family owned business",
};
export const revalidate = 0;

export default function Home() {
  return (
    <html lang="en">
      <body className={font.className}>
        <Header />
      </body>
    </html>
  );
}
