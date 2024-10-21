"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  IconBrandAngular,
  IconBrandCpp,
  IconBrandFlutter,
  IconBrandJavascript,
  IconBrandMantine,
  IconBrandMongodb,
  IconBrandNextjs,
  IconBrandNodejs,
  IconBrandPhp,
  IconBrandPrisma,
  IconBrandPython,
  IconBrandReact,
  IconBrandReactNative,
  IconBrandRedux,
  IconBrandTailwind,
  IconBrandTypescript,
  IconBrandVue,
  IconGitPullRequest,
  IconGrain,
  IconSql,
} from "@tabler/icons-react";
import { HoverEffect } from "./ui/card-hover-effect";

export default function StartContributing() {
  const programmingLanguages = [
    {
      title: "Next.Js",
      logo: <IconBrandNextjs size={100} stroke={1.25} />,
    },
    {
      title: "Python",
      logo: <IconBrandPython size={100} stroke={1.25} />,
    },
    {
      title: "Flutter",
      logo: <IconBrandFlutter size={100} stroke={1.25} />,
    },
    {
      title: "C++",
      logo: <IconBrandCpp size={100} stroke={1.25} />,
    },
    {
      title: "Vue",
      logo: <IconBrandVue size={100} stroke={1.25} />,
    },

    {
      title: "Typescript",
      logo: <IconBrandTypescript size={100} stroke={1.25} />,
    },
    {
      title: "Javascript",
      logo: <IconBrandJavascript size={100} stroke={1.25} />,
    },
    {
      title: "React",
      logo: <IconBrandReact size={100} stroke={1.25} />,
    },
    {
      title: "Angular",
      logo: <IconBrandAngular size={100} stroke={1.25} />,
    },
    {
      title: "React Native",
      logo: <IconBrandReactNative size={100} stroke={1.25} />,
    },
    {
      title: "PHP",
      logo: <IconBrandPhp size={100} stroke={1.25} />,
    },
    {
      title: "Node.Js",
      logo: <IconBrandNodejs size={100} stroke={1.25} />,
    },
    {
      title: "MongoDB",
      logo: <IconBrandMongodb size={100} stroke={1.25} />,
    },
    {
      title: "Express",
      logo: <IconGrain size={100} stroke={1.25} />,
    },
    {
      title: "Sql",
      logo: <IconSql size={100} stroke={1.25} />,
    },
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 ">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
          Start Contributing In
        </h2>
        <p className="text-xl text-muted-foreground text-center mb-8 max-w-3xl mx-auto">
          Choose your preferred programming language and discover open-source projects that need
          your expertise.
        </p>

        <div className="max-w-6xl mx-auto px-8">
          <HoverEffect items={programmingLanguages} />
        </div>
        <div className="mt-12 text-center">
          <Button size="lg" asChild>
            <Link href="#">Explore All Languages</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

function LanguageCard({ name, icon }: { name: string; icon: string }) {
  return (
    <Card className="group hover:border-primary transition-colors">
      <CardContent className="p-4">
        <Link href="#" className="flex flex-col items-center text-center space-y-2">
          <span className="text-4xl" role="img" aria-label={name}>
            {icon}
          </span>
          <span className="font-medium group-hover:text-primary transition-colors">{name}</span>
        </Link>
      </CardContent>
    </Card>
  );
}
