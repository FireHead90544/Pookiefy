import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({ weight: ['100', '300', '400', '500', '700', '900'], subsets: ["latin"] });

export const metadata = {
  title: "Pookiefy",
  description: "A simple Next.js app that shows now playing status using Spotify API.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
