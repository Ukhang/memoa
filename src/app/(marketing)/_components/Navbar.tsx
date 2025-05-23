"use client";

import { useScrollTop } from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";
import Logo from "./Logo";
import { ModeToggle } from "@/components/mode-toggle";
import { useConvexAuth } from "convex/react";
import { SignInButton, UserButton } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/spinner";
import Link from "next/link";

const Navbar = () => {

  const { isAuthenticated, isLoading } = useConvexAuth();
  const scrolled = useScrollTop();

  return (
    <nav className={cn(
      "z-50 fixed top-0 flex items-center w-full px-6 py-4 bg-background bg-white dark:bg-[#1F1F1F]",
      scrolled && "border-b shadow-sm dark:border-b-neutral-700"
    )}>
        <Logo/>
        <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2">
          {isLoading && (
            <Spinner/>
          )}
          {!isAuthenticated && !isLoading && (
            <>
              <SignInButton mode="modal">
                <Button variant={"ghost"} size={"sm"}>Log in</Button>
              </SignInButton>
              <SignInButton mode="modal">
                <Button size={"sm"}>
                  Get Memoa Free
                </Button>
              </SignInButton>
            </>
          )}
          {isAuthenticated && !isLoading && (
            <>
              <Button variant={"ghost"} size={"sm"} asChild>
                <Link href={"/documents"}>
                  Enter Memoa
                </Link>
              </Button>
              <UserButton
                afterSignOutUrl="/"
              />
            </>
          )}
          <ModeToggle/>
        </div>
    </nav>
  )
}

export default Navbar;
