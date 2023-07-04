import "@/app/globals.css";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Karla } from "next/font/google";

const karla = Karla({ subsets: ["latin"] });

export const metadata = {
  title: "The Blog",
  description: "A Arturo's next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${karla.className} max-w-7xl mx-auto`}>
        <Header />

        {children}
        <Footer />
      </body>
    </html>
  );
}
