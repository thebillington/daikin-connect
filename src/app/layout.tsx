import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Daikin Connect",
  description: "Fetch Daikin Consumption Data",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
