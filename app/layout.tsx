import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-zinc-900`}>
        <div className="bg-zinc-800 fixed h-screen w-1/6 pl-6 pt-32">
          <Link
            href="/"
            className="mt-8 block text-3xl text-slate-300 font-semibold"
          >
            메인 페이지
          </Link>
          <Link
            href="/list"
            className="mt-8 block text-3xl text-slate-300 font-semibold"
          >
            상품 목록
          </Link>
          <Link
            href="/cart"
            className="mt-8 block text-3xl text-slate-300 font-semibold"
          >
            장바구니
          </Link>
        </div>
        {children}
      </body>
    </html>
  );
}
