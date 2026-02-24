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
        <div className="min-h-screen lg:grid dark:bg-zinc-900 lg:grid-cols-app">
          <SideBar />
          <main className="px-4 pt-24 lg:col-start-2 lg:px-8  lg:pt-8 max-w-screen pb-12">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
