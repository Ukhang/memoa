"use client";

import Image from "next/image";
import { useUser } from "@clerk/clerk-react";
import { PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useMutation } from "convex/react";
import { api } from "../../../../../convex/_generated/api";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { motion } from "motion/react";
import { Magnetic } from "@/components/motion-primitives/magnetic";

const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

const TRANSITION_SECTION = {
  duration: 0.3,
};

const Documents = () => {
  const router = useRouter();
  const { user } = useUser();
  const create = useMutation(api.documents.create);

  const onCreate = () => {
    const promise = create({ title: "Untitled" }).then((documentId) =>
      router.push(`/documents/${documentId}`)
    );

    toast.promise(promise, {
      loading: "Create a new note...",
      success: "New note created!",
      error: "Failed to create a new note.",
    });
  };

  return (
    <motion.div
      className="h-full flex flex-col items-center justify-center space-y-4"
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={VARIANTS_SECTION} transition={TRANSITION_SECTION}>
        <Image
          src="/empty.svg"
          alt="Empty"
          height={220}
          width={220}
          className="dark:hidden border-b-2"
        />
        <Image
          src="/dark-empty.svg"
          alt="Empty"
          height={220}
          width={220}
          className="hidden dark:block border-b-2 border-neutral-600"
        />
      </motion.div>

      <motion.h2
        className="font-medium text-muted-foreground"
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        Welcome to {user?.firstName}&apos;s Memoa
      </motion.h2>
      <motion.div variants={VARIANTS_SECTION} transition={TRANSITION_SECTION}>
        <Magnetic>
          <Button onClick={onCreate} size={"sm"}>
            <PlusCircle className="h-4 w-4" />
            Create a note
          </Button>
        </Magnetic>
      </motion.div>
    </motion.div>
  );
};

export default Documents;
