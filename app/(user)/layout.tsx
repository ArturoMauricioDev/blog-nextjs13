import "@/app/globals.css";
import Banner from "@/components/Banner";
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
      <body className={karla.className}>
        <Header />
        <Banner />
        {children}
      </body>
    </html>
  );
}
