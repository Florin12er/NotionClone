"use client";

import { Spinner } from "@/components/spinner";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import { useMutation } from "convex/react";
import { PlusCircle } from "lucide-react";
import Image from "next/image";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";

const DocumentsPage = () => {
    const { isLoaded, user } = useUser();
    const create = useMutation(api.documents.create);

    const onCreate = () => {
        const promise = create({ title: "Untitled" });

        toast.promise(promise, {
            loading: "Creating a new note...",
            success: "New note created",
            error: "Failded to create a new note",
        });
    };

    if (!isLoaded) {
        return <Spinner size="lg" />;
    }

    return (
        <div className="h-full flex flex-col items-center justify-center space-y-4">
            <Image
                src="/empty.png"
                alt="empty image"
                height={300}
                width={300}
                className="dark:hidden"
            />
            <Image
                src="/empty-dark.png"
                alt="empty dark image"
                height={300}
                width={300}
                className="hidden dark:block"
            />
            <h2 className="text-lg font-medium">
                Welcome to {user?.firstName}&apos;s Jotion
            </h2>
            <Button onClick={onCreate}>
                <PlusCircle className="h-4 w-4 mr-2" />
                Create a note
            </Button>
        </div>
    );
};

export default DocumentsPage;
