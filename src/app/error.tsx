"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

const Error = () => {
    return (
        <div className="h-full flex flex-col items-center justify-center space-y-4">
            <h1 className="text-4xl font-bold">Error</h1>
            <h4 className="text-xl font-medium">Something went wrong</h4>
            <Button asChild>
                <Link href="/documents">Go back</Link>
            </Button>
        </div>
    )
}

export default Error;