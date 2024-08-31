import React from "react";
import Link from "next/link";
import Logo from "@/components/Logo";

import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

const Navbar = () => {
  return (
    <>
      <div className="w-full h-12 bg-emerald-800 sticky top-0">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <Logo title="Logo" />
            <ul className="hidden md:flex gap-x-6 text-white">
              <li>
                <Link href="/inventory/0">
                  <p>Inventory</p>
                </Link>
              </li>
              <li>
                <Link href="/checkout">
                  <p>Checkout</p>
                </Link>
              </li>
              <li>
                <Link href="/dashboard">
                  <p>Dashboard</p>
                </Link>
              </li>
            </ul>
            <ClerkProvider>
              <SignedOut>
                <SignInButton>
                  <button className="text-white">Sign In</button>
                </SignInButton>
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </ClerkProvider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
