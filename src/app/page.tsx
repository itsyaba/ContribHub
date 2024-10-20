import FeatureCard from "@/components/FeatureCard";
import Testimonials from "@/components/Testimonials";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Spotlight } from "@/components/ui/spotlight";
import { Github, Globe, Users } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section></section>
      {/* LANDING PAGE */}
      <div className="h-screen w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
        <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0 flex items-center justify-between flex-col  gap-4">
          <div>
            <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
              Connect, Contribute, Innovate.
            </h1>
            <p className="mt-4 font-normal text-xl text-neutral-300 max-w-2xl font-fredoka text-center mx-auto">
              ContribHub is your gateway to the world of open-source. Find projects that match your
              skills, contribute with ease, and grow as a developer.
            </p>
          </div>
          <Button variant="default" size="actionBtn">
            Explore Projects
          </Button>
        </div>
      </div>
      {/* LANDING PAGE */}
      {/* Why ContribHub? */}

      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
            Why ContribHub?
          </h2>
          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
            <FeatureCard
              icon={<Github className="h-10 w-10" />}
              title="Project Matching"
              description="Find open-source projects that align with your skills and interests."
            />
            <FeatureCard
              icon={<Users className="h-10 w-10" />}
              title="Community Collaboration"
              description="Connect with like-minded developers and build your network."
            />
            <FeatureCard
              icon={<Globe className="h-10 w-10" />}
              title="Global Impact"
              description="Contribute to projects that make a difference worldwide."
            />
          </div>
        </div>
      </section>
      {/* TESTIMONIALS */}
      <Testimonials />
      {/* Join ContribHub Today */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Join ContribHub Today
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Start your open-source journey and make meaningful contributions to projects you
                care about.
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2">
              <form className="flex space-x-2">
                <Input className="max-w-lg flex-1" placeholder="Enter your email" type="email" />
                <Button type="submit">Sign Up</Button>
              </form>
              <p className="text-xs text-muted-foreground">
                By signing up, you agree to our{" "}
                <Link className="underline underline-offset-2" href="#">
                  Terms & Conditions
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Join ContribHub Today */}
    </>
  );
}
