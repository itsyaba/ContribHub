import SignUp from "@/components/SignUp";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

const page = () => {
  return (
    <div className="h-screen">
      <div className="flex flex-col items-center justify-center h-full max-w-2xl gap-20 mx-auto">
        <Link href="/" className={cn(buttonVariants({ variant: "ghost" }), "self-start -mt-20")}>
          <ChevronLeft className="w-4 h-4 mr-2" />
          Home
        </Link>

        <SignUp />
      </div>
    </div>
  );
};

export default page;
