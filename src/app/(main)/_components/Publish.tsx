"use client";

import { useOrigin } from "@/hooks/use-origin";
import { Doc } from "../../../../convex/_generated/dataModel";
import { PopoverTrigger, Popover, PopoverContent } from "@/components/ui/popover";
import { useMutation } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import { useState } from "react";

interface PublishProps {
    initialData: Doc<"documents">;
};

export const Publish = ({
    initialData,
}: PublishProps) => {

    const origin = useOrigin();
    const update = useMutation(api.documents.update);

    const [copied, setCopied] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const url = `${origin}/preview/${initialData._id}`;

    return (
        <div>
            Publish
        </div>
    )
};