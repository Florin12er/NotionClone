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
                Your Ideas, Documents, &amp; Plans. Unified Welcome to
                <span className="underline"> Jotion</span>
            </h1>
            <h3 className="text-base sm:text-xl md:text-2xl font-medium">
                Organize, manage, and access all your important notes, tasks, and ideas in one seamless place. Whether it&apos;s for personal projects, work, or study, Jotion simplifies your workflow with real-time updates and intuitive organization tools.
                Never lose track of your thoughts again – with powerful features like secure authentication, effortless task management, and an elegant, user-friendly interface, Jotion helps you stay focused, organized, and productive.
                Transform the way you take notes and manage projects. Your ideas deserve a platform that keeps them safe, accessible, and easy to manage. Welcome to the future of note-taking. Welcome to Jotion.
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
