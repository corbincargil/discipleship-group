"use client";

import { SignOutButton } from "@clerk/nextjs";
import { useEffect } from "react";
import { useClerk } from "@clerk/clerk-react";
import { redirect } from "next/navigation";
export default function SignInPage() {
  const { signOut } = useClerk();

  useEffect(() => {
    signOut();
    redirect("/sign-in");
  }, [signOut]);
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <h1>Signing out...</h1>
      <SignOutButton />
    </div>
  );
}
