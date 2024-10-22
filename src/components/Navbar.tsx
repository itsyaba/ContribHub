"use client";
import { Code2, Menu } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Button, buttonVariants } from "./ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="px-4 lg:px-6 h-16 flex items-center justify-between absolute top-0 left-0 right-0 z-50 bg-transparent font-fredoka">
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
        {/* SIGN IN BUTTON */}

        <Link
          href="/sign-in"
          className={buttonVariants({
            variant: "default",
            className:
              "text-sm font-medium underline-offset-4 bg-white text-black hover:bg-white/90",
          })}
        >
          Sign In
        </Link>
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
              href="#"
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
            {/* SIGN IN BUTTON */}
            <Link
              href="/sign-in"
              onClick={() => setIsOpen(false)}
              className={buttonVariants({
                variant: "default",
                className:
                  "text-sm font-medium underline-offset-4 bg-white text-black hover:bg-white/90",
              })}
            >
              Sign In
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default Navbar;
