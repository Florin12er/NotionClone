"use client";

import { useScrollTop } from "@/hooks/use-scroll-top";

import { cn } from "@/lib/utils";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { useConvexAuth } from "convex/react";
import { SignInButton, UserButton } from "@clerk/nextjs";
import { Spinner } from "@/components/spinner";
import Link from "next/link";

export const Navbar = () => {
  const scrolled = useScrollTop();
  const { isAuthenticated, isLoading } = useConvexAuth();
  return (
    <>
      <div
        className={cn(
          "z-[9999] bg-background dark:bg-[#1f1f1f] fixed top-0 flex items-center w-full p-6",
          scrolled && "border-b-shadow-sm",
        )}
      >
        <Logo />
        <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2">
          {isLoading && <Spinner />}
          {!isAuthenticated && !isLoading && (
            <>
              <SignInButton mode="modal">
                <Button variant="ghost" size="sm">
                  Log in
                </Button>
              </SignInButton>
              <SignInButton mode="modal">
                <Button size="sm">Get Jotion free</Button>
              </SignInButton>
            </>
          )}
          {isAuthenticated && !isLoading && (
            <>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/documents">Enter Jotion</Link>
              </Button>
              <UserButton signInUrl="/" />
            </>
          )}
          <ModeToggle />
        </div>
      </div>
    </>
  );
};
