import "./globals.css";
import { Inter } from "next/font/google";
import { SideBar } from "./components/SideBar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased">
      <body className={inter.className}>
        <div className="min-h-screen grid grid-cols-app">
          <SideBar />
          <main className="px-8 pt-8 pb-12">{children}</main>
        </div>
      </body>
    </html>
  );
}
