import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import assets from "../../public/images";

const NotFound = () => {
  return (
    <div className="flex min-h-screen items-center justify-center p-4 lg:p-10">
      <div className="space-y-4 text-center md:space-y-6">
        <div className="flex flex-col items-center">
          <Image
            className="h-auto max-w-full object-cover"
            src={assets?.images?.notFound}
            alt="not found"
          />
        </div>
        <h2 className="text-xl font-semibold md:text-3xl md:font-bold">
          Oops! That page can&apos;t be found
        </h2>
        <p className="text-xs text-zinc-300 md:text-sm">
          The page you are looking for might have been removed had its name
          changed or is temporarily unavailable.
        </p>
        <Button size="lg" className="" asChild>
          <Link href="/">Go To Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
