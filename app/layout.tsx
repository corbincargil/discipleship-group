"use client";
import { ClerkProvider } from "@clerk/nextjs";
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
      <ClerkProvider>
        <ThemeProvider>
          <body>
            <Header />
            <main>{children}</main>
          </body>
        </ThemeProvider>
      </ClerkProvider>
    </html>
  );
}
