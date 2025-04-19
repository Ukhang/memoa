import Image from "next/image";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import Link from "next/link";

const font = Poppins({
    subsets: ["latin"],
    weight: ["400", "600"]
});

const Logo = () => {
  return (
    <Link className="hidden md:flex items-center gap-x-2" href="/">
        <Image
            src={"/logo.svg"}
            height={24}
            width={24}
            alt="Logo"
            className="dark:hidden"
        />
        <Image
            src={"/dark-logo.svg"}
            height={24}
            width={24}
            alt="Logo"
            className="hidden dark:block"
        />
        <p className={cn("font-medium text-black dark:text-white", font.className)}>
            Memoa
        </p>
    </Link>
  )
}

export default Logo;
