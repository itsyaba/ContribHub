"use client";
import { Code2, Menu } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Button, buttonVariants } from "./ui/button";
import { UserAccountNav } from "./UserAccountNav";
import { Spinner } from "./spinner";
import { useToast } from "@/hooks/use-toast";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [session, setSession] = useState(null);
  const { toast } = useToast();

  useEffect(() => {
    setIsLoading(true);
    const fetchSession = async () => {
      const response = await fetch("/api/auth/session");
      if (response.ok) {
        const data = await response.json();
        setSession(data);
      } else {
        console.error("Failed to fetch session");
        toast({
          title: "Error",
          description: "Failed to fetch session",
          variant: "destructive",
        });
      }
    };

    fetchSession();
    setIsLoading(false);
  }, [toast]);

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
        {isLoading && <Spinner />}
        {session && !isLoading ? (
          <UserAccountNav user={session?.user} />
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
            {isLoading && <Spinner />}
            {session?.user && !isLoading ? (
              <div className="flex flex-row items-center justify-start mt-1 bg-slate-700 py-3 rounded-md px-2 gap-4">
                <UserAccountNav user={session?.user} />
                {session?.user?.name}
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
