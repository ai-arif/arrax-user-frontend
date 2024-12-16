import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import assets from "../../../public/images";

const Logo = ({ className }) => {
  return (
    <Link href="/">
      <Image
        className={cn("h-auto w-[100px] object-cover md:w-[140px]", className)}
        src={assets?.svgs?.logo}
        alt="Arrax"
        priority
      />
    </Link>
  );
};

export default Logo;
