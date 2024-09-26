import type { Metadata } from "next";
import { Unbounded } from "next/font/google";
import "./globals.css";

const unbounded = Unbounded({
  subsets: ["latin"],
  variable: "--font-unbounded",
  weight: ["700", "400", "500"],
});

export const metadata: Metadata = {
  title: "Varasampath Portfolio",
  description: "Journey of Varasampath in his career.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${unbounded.className} antialiased `}>{children}</body>
    </html>
  );
}
