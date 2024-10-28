"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  IconBrandGithub,
  IconArrowLeft,
  IconStar,
  IconGitFork,
  IconEye,
} from "@tabler/icons-react";
import { projects } from "@/lib/data";
import { Spinner } from "@/components/spinner";

interface pageProps {
  params: {
    projectId: number;
  };
}

export default function ProjectDetailPage({ params }: pageProps) {
  const projectId = params.projectId;
  const [project, setProject] = useState(null);
  console.log(projectId);

  useEffect(() => {
    if (projectId) {
      const foundProject = projects.find((p) => p.id == projectId);
      console.log(foundProject);
      setProject(foundProject || null);
    }
  }, [projectId]);

  if (!project) {
    return (
      <div className="h-screen flex items-center justify-center gap-4">
        <Spinner /> Loading Project
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 mt-12 min-h-screen">
      <Link href="/projects" className={buttonVariants({ variant: "outline" })}>
        <IconArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
      </Link>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-white">{project.name}</CardTitle>
            <div className="flex flex-wrap gap-2 mt-2">
              <Badge variant="outline">{project.language}</Badge>
              <Badge variant="secondary">{project.difficulty}</Badge>
              <Badge>{project.category}</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-muted-foreground mb-4">{project.description}</p>
            <div className="flex gap-4 text-sm text-muted-foreground">
              <div className="flex items-center">
                <IconStar className="mr-1 h-4 w-4" />
                {project.stars} stars
              </div>
              <div className="flex items-center">
                <IconGitFork className="mr-1 h-4 w-4" />
                {project.forks} forks
              </div>
              <div className="flex items-center">
                <IconEye className="mr-1 h-4 w-4" />
                {project.watchers} watchers
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Link
              href={project.githubUrl}
              target="_blank"
              className={buttonVariants({ variant: "default", size: "lg", className: "mr-4" })}
            >
              <IconBrandGithub className="mr-2 h-5 w-5" /> View on GitHub
            </Link>
            <Button variant="outline" size="lg" className="text-white">
              Star Project
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Project Details</CardTitle>
          </CardHeader>
          <CardContent>
            <dl className="space-y-2">
              <div>
                <dt className="font-semibold">Created</dt>
                <dd>{project.createdAt}</dd>
              </div>
              <div>
                <dt className="font-semibold">Last Updated</dt>
                <dd>{project.updatedAt}</dd>
              </div>
              <div>
                <dt className="font-semibold">License</dt>
                <dd>{project.license}</dd>
              </div>
              <div>
                <dt className="font-semibold">Primary Language</dt>
                <dd>{project.language}</dd>
              </div>
            </dl>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="readme" className="mt-8 text-white">
        <TabsList>
          <TabsTrigger value="readme">README</TabsTrigger>
          <TabsTrigger value="issues">Issues</TabsTrigger>
          <TabsTrigger value="pullRequests">Pull Requests</TabsTrigger>
        </TabsList>
        <TabsContent value="readme">
          <Card>
            <CardContent className=" max-w-none">
              <h1>README</h1>
              <p>This is where the projects README content would be displayed.</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="issues">
          <Card>
            <CardContent>
              <h2 className="text-2xl font-bold mb-4">Open Issues</h2>
              <p>This is where a list of open issues would be displayed.</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="pullRequests">
          <Card>
            <CardContent>
              <h2 className="text-2xl font-bold mb-4">Pull Requests</h2>
              <p>This is where a list of pull requests would be displayed.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
