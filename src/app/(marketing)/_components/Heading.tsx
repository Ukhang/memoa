"use client";

import { Spinner } from "@/components/spinner";
import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/clerk-react";
import { useConvexAuth } from "convex/react";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { TextRoll } from "@/components/motion-primitives/text-roll";
import { TextShimmer } from "@/components/motion-primitives/text-shimmer";
import { Magnetic } from "@/components/motion-primitives/magnetic";

const Heading = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();

  return (
    <div className="max-w-[400px] sm:max-w-[480px] md:max-w-[620px] space-y-4">
      <TextRoll className="text-3xl sm:text-4xl md:text-5xl font-semibold text-black dark:text-white leading-tight sm:leading-tight md:leading-tight">
        Organize your workflow and capture ideas effortlessly.
      </TextRoll>
      <h3 className="text-lg sm:text-xl md:text-2xl font-normal max-w-[360px] sm:max-w-[400px] md:max-w-[500px] mx-auto text-center">
        <TextShimmer>
          Memoa is the connected workspace where better, faster work happens.
        </TextShimmer>
      </h3>
      {isLoading && (
        <div className="w-full flex items-center justify-center">
          <Spinner size={"lg"} />
        </div>
      )}
      {isAuthenticated && !isLoading && (
        <Magnetic>
          <Button asChild size={"sm"}>
            <Link href={"/documents"}>
              Enter Memoa
              <ChevronRight className="h-4 w-4" />
            </Link>
          </Button>
        </Magnetic>
      )}
      {!isAuthenticated && !isLoading && (
        <Magnetic>
          <SignInButton mode="modal">
            <Button size={"sm"}>
              Get Memoa free
              <ChevronRight className="h-4 w-4" />
            </Button>
          </SignInButton>
        </Magnetic>
      )}
    </div>
  );
};

export default Heading;
