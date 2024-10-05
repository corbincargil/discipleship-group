"use client";
import { ThemeProvider } from "@/context/ThemeContext";
import Header from "@/components/header";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ThemeProvider>
        <body>
          <Header />
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}
