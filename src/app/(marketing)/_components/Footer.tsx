import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="flex flex-col items-center w-full p-6 bg-background z-50 dark:bg-[#1F1F1F]">
      <div className="text-sm flex items-center gap-1">
        <Image
          src={"/logo.svg"}
          height={24}
          width={24}
          alt="Logo"
          className="mr-1"
        />{" "}
        by{" "}
        <Link
          href={"https://x.com/UkhangM45926"}
          target="_blank"
          className="font-medium hover:underline duration-300"
        >
          Ukhang
        </Link>
      </div>
      <p className="text-sm mt-2">© {year} Memoa. All rights reserved.</p>
      <div className="md:ml-auto w-full justify-between md:justify-end flex items-center gap-x-2 text-muted-foreground mt-2">
        <Button variant={"ghost"} size={"sm"}>
          Privacy Policy
        </Button>
        <Button variant={"ghost"} size={"sm"}>
          Terms & Conditions
        </Button>
      </div>
    </footer>
  );
};

export default Footer;
