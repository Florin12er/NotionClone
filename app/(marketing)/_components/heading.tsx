"use client";

import { Spinner } from "@/components/spinner";
import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/nextjs";
import { useConvexAuth } from "convex/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const Heading = () => {
    const { isAuthenticated, isLoading } = useConvexAuth();
    return (
        <div className="max-w-3xl space-y-4">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
                Your Ideas, Documents, & Plans. Unified Welcome to
                <span className="underline"> Jotion</span>
            </h1>
            <h3 className="text-base sm:text-xl md:text-2xl font-medium">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil aperiam
                commodi soluta velit nisi saepe, eos voluptatibus deserunt, omnis,
                inventore accusantium quidem unde corporis illo. Ullam accusamus ratione
                explicabo mollitia?
            </h3>
            {isLoading && (
                <div className="w-full flex items-center justify-center">
                    <Spinner size="lg" />
                </div>
            )}
            {isAuthenticated && !isLoading && (
                <Button asChild>
                    <Link href="/documents">
                        Enter Jotion
                        <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                </Button>
            )}
            {!isAuthenticated && !isLoading && (
                <>
                    <SignInButton mode="modal">
                        <Button size="sm">Get Jotion free</Button>
                    </SignInButton>
                </>
            )}
        </div>
    );
};
