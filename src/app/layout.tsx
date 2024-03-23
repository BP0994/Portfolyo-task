import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "../css/animate.min.css"
import "../css/bootstrap-menu.css"
import "../css/bootstrap.min.css"
import "../css/elegant-line-icons.css"
import "../css/main.css"
import "../css/owl.carousel.css"
import "../css/owl.theme.default.min.css"
import "../css/themify-icons.css"
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio-website",
  description: "JOHN - {SOFTWARE DEVELOPER}",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div>{children}</div>
        </Providers>
      </body>
    </html>
  );
}
