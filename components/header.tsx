"use client";
import Link from "next/link";
import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const links = [
    { href: "/", text: "Home" },
    { href: "/meetings", text: "Meetings" },
    { href: "/groups", text: "Groups" },
  ];

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-customBlue text-customWhite">
      <nav className="p-4">
        <div className="flex justify-between items-center">
          D-group Notes
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="text-foreground hover:text-customYellow"
              aria-label="Toggle theme"
            >
              {/* {theme === "dark" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-sun"
                >
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2" />
                  <path d="M12 20v2" />
                  <path d="m4.93 4.93 1.41 1.41" />
                  <path d="m17.66 17.66 1.41 1.41" />
                  <path d="M2 12h2" />
                  <path d="M20 12h2" />
                  <path d="m6.34 17.66-1.41 1.41" />
                  <path d="m19.07 4.93-1.41 1.41" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-moon"
                >
                  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                </svg>
              )} */}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden"
              aria-label="Toggle menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-menu"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </button>
            <ul className="hidden md:flex md:space-x-4">
              <SignedIn>
                {links.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href} className="hover:text-customYellow">
                      {link.text}
                    </Link>
                  </li>
                ))}
                <UserButton />
              </SignedIn>
              <SignedOut>
                <li>
                  <Link href="/sign-in" className="hover:text-customYellow">
                    Sign In
                  </Link>
                </li>
              </SignedOut>
            </ul>
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-customBlue z-50 md:hidden">
          <div className="flex flex-col h-full">
            <div className="flex justify-end p-4">
              <button
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-x"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </div>
            <ul className="flex flex-col items-center space-y-8 mt-16">
              <SignedIn>
                {links.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-2xl hover:text-customYellow"
                      onClick={handleLinkClick}
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/sign-out"
                    className="text-2xl hover:text-customYellow"
                    onClick={handleLinkClick}
                  >
                    Sign Out
                  </Link>
                </li>
              </SignedIn>
              <SignedOut>
                <li>
                  <Link
                    href="/sign-in"
                    className="text-2xl hover:text-customYellow"
                    onClick={handleLinkClick}
                  >
                    Sign In
                  </Link>
                </li>
              </SignedOut>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}
