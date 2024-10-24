"use client";

import { Code2, Menu } from "lucide-react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Button, buttonVariants } from "./ui/button";
import { UserAccountNav } from "./UserAccountNav";
import { Spinner } from "./spinner";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session, status } = useSession();
  const isLoading = status === "loading";
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`px-4 lg:px-6 h-16 flex items-center justify-between fixed top-0 left-0 right-0 z-50 font-fredoka transition-colors duration-300 ${
        isScrolled ? "backdrop-blur-lg" : "backdrop-blur-none"
      }`}
    >
      <Link className="flex items-center justify-center" href="/">
        <Code2 className="h-8 w-8 mr-4" />
        <span className="ml-2 text-4xl font-bold tracking-wide">ContribHub</span>
      </Link>
      <nav className="ml-auto hidden md:flex gap-4 sm:gap-6 items-center">
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
          Features
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="/bookmark">
          Bookmark
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="/projects">
          Explore Projects
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
          About
        </Link>
        {isLoading ? (
          <Spinner />
        ) : session ? (
          <UserAccountNav user={session.user} />
        ) : (
          <Link href="/sign-in" className={buttonVariants()}>
            Sign In
          </Link>
        )}
      </nav>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right">
          <SheetTitle>{"  "}</SheetTitle>
          <nav className="flex flex-col gap-4">
            <Link
              className="text-md font-medium hover:underline underline-offset-4"
              href="#"
              onClick={() => setIsOpen(false)}
            >
              Features
            </Link>
            <Link
              className="text-md font-medium hover:underline underline-offset-4"
              href="/projects"
              onClick={() => setIsOpen(false)}
            >
              Explore Projects
            </Link>
            <Link
              className="text-md font-medium hover:underline underline-offset-4"
              href="#"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            {isLoading ? (
              <Spinner />
            ) : session ? (
              <div className="flex flex-row items-center justify-start mt-1 bg-slate-700 py-3 rounded-md px-2 gap-4">
                <UserAccountNav user={session.user} />
                {session.user?.name}
              </div>
            ) : (
              <Link href="/sign-in" className={buttonVariants()} onClick={() => setIsOpen(false)}>
                Sign In
              </Link>
            )}
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default Navbar;
