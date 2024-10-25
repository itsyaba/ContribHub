import FeatureCard from "@/components/FeatureCard";
import StartContributing from "@/components/startContributing";
import Testimonials from "@/components/Testimonials";
import { Button, buttonVariants } from "@/components/ui/button";
import { Spotlight } from "@/components/ui/spotlight";
import { Github, Globe, Users } from "lucide-react";
import Link from "next/link";
export default function Home() {
  return (
    <>
      {/* HERO PAGE */}
      <div className="h-screen w-full rounded-md flex items-center justify-center gap-8 bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
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
          <Link
            href="/projects"
            className={buttonVariants({ variant: "default", size: "actionBtn" })}
          >
            Explore Projects
          </Link>
        </div>
      </div>
      {/* HERO PAGE */}
      {/* Why ContribHub? */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
            Why ContribHub?
          </h2>
          <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-3">
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
          {/* TODO: STATS */}
          {/* <div className="mt-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold mb-2">50+</div>
                  <div className="text-gray-600">Open Source Projects</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">100+</div>
                  <div className="text-gray-600">Contributors</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">300+</div>
                  <div className="text-gray-600">Community Members</div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </section>
      <StartContributing />
      <Testimonials />
      {/* Join ContribHub Today */}
      <section className="w-full py-12 md:py-24 lg:py-32 ">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Join Our Community
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Start your open-source journey today and become part of our growing community of
                contributors.
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2">
              <Button className="w-full" size="lg">
                Sign Up Now
              </Button>
              <p className="text-xs text-muted-foreground">
                Join thousands of developers already contributing through ContribHub.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Join ContribHub Today */}
    </>
  );
}
