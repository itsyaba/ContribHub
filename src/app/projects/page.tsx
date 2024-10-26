"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Search, Filter } from "lucide-react";
import {
  programmingLanguagesList,
  difficultyLevels,
  projectCategories,
  sortBy,
  projects,
} from "@/lib/data";
import Link from "next/link";
import { IconBrandGithub } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ProjectsPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
  const [selectedDifficulties, setSelectedDifficulties] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOption, setSortOption] = useState(sortBy[0]);
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [showFilters, setShowFilters] = useState(true);

  useEffect(() => {
    const difficultyParam = searchParams.get("difficulty");
    const languagesParam = searchParams.get("languages");
    const searchTermParams = searchParams.get("search");

    if (difficultyParam) {
      setSelectedDifficulties([difficultyParam]);
    }

    if (languagesParam) {
      setSelectedLanguages(languagesParam.split(","));
    }

    if (searchTerm) {
      setSearchTerm(searchTerm);
    }
  }, [searchParams, searchTerm]);

  useEffect(() => {
    const result = projects.filter(
      (project) =>
        project.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (selectedCategory === "All" || project.category === selectedCategory) &&
        (selectedLanguages.length === 0 || selectedLanguages.includes(project.language)) &&
        (selectedDifficulties.length === 0 || selectedDifficulties.includes(project.difficulty))
    );

    switch (sortOption) {
      case "Most Recent":
        // Assuming projects are already sorted by most recent
        break;
      case "Difficulty (easier first)":
        result.sort(
          (a, b) => difficultyLevels.indexOf(a.difficulty) - difficultyLevels.indexOf(b.difficulty)
        );
        break;
      case "Difficulty (harder first)":
        result.sort(
          (a, b) => difficultyLevels.indexOf(b.difficulty) - difficultyLevels.indexOf(a.difficulty)
        );
        break;
    }

    setFilteredProjects(result);

    // Update URL parameters
    const params = new URLSearchParams();
    if (selectedDifficulties.length > 0) {
      params.set("difficulty", selectedDifficulties.join(","));
    }
    if (selectedLanguages.length > 0) {
      params.set("languages", selectedLanguages.join(","));
    }
    router.push(`/projects?${params.toString()}`, { scroll: false });
  }, [searchTerm, selectedCategory, selectedLanguages, selectedDifficulties, sortOption, router]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Open Source Projects</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
              Building technology for everyone, together. Discover our projects and join our
              community.
            </p>
            <div className="relative max-w-2xl mx-auto">
              <Input
                type="text"
                placeholder="Search projects..."
                className="w-full px-6 py-6 text-lg border-2 border-gray-200 rounded-full focus:outline-none focus:border-blue-500 pl-14 pr-6"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col-reverse md:flex-row-reverse gap-4 mb-8 items-center justify-between w-full ">
        <h1 className="text-xl text-gray-400">{filteredProjects.length} results</h1>
        <div className="flex items-center gap-4 ">
          <Button onClick={() => setShowFilters(!showFilters)} variant="default">
            <Filter className="mr-2 h-4 w-4" /> Filters
          </Button>
          <Select value={sortOption} onValueChange={setSortOption}>
            <SelectTrigger className="w-full md:w-[200px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              {sortBy.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        <AnimatePresence>
          {showFilters && (
            <motion.div
              initial={{ opacity: 0.5, width: 0 }}
              animate={{ opacity: 1, width: "25%" }}
              exit={{ opacity: 0, width: 0 }}
              transition={{ duration: 0.2 }}
              className="w-full md:w-1/4 space-y-6"
            >
              <div className="space-y-1">
                <h3 className="font-semibold mb-2">Difficulty</h3>
                {difficultyLevels.map((level) => (
                  <div key={level} className="flex items-center space-x-2">
                    <Checkbox
                      className="h-5 w-5 border border-gray-100"
                      id={`diff-${level}`}
                      checked={selectedDifficulties.includes(level)}
                      onCheckedChange={(checked) => {
                        setSelectedDifficulties(
                          checked
                            ? [...selectedDifficulties, level]
                            : selectedDifficulties.filter((d) => d !== level)
                        );
                      }}
                    />
                    <label htmlFor={`diff-${level}`}>{level}</label>
                  </div>
                ))}
              </div>
              <div>
                <h3 className="font-semibold mb-2">Category</h3>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="All">All Categories</SelectItem>
                    {projectCategories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-1">
                <h3 className="font-semibold mb-2">Programming Languages</h3>
                {programmingLanguagesList.map((lang) => (
                  <div key={lang} className="flex items-center space-x-2">
                    <Checkbox
                      className="h-5 w-5 border border-gray-100"
                      id={`lang-${lang}`}
                      checked={selectedLanguages.includes(lang)}
                      onCheckedChange={(checked) => {
                        setSelectedLanguages(
                          checked
                            ? [...selectedLanguages, lang]
                            : selectedLanguages.filter((l) => l !== lang)
                        );
                      }}
                    />
                    <label htmlFor={`lang-${lang}`}>{lang}</label>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          layout
          className={`grid gap-6 transition-all duration-300 ${
            showFilters ? "md:w-3/4" : "w-full"
          } grid-cols-1 md:grid-cols-2 lg:grid-cols-3 h-fit`}
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="group bg-slate-900/50 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 shadow-slate-400/50 h-fit">
                  <CardHeader className="flex items-center justify-between flex-row gap-2">
                    <CardTitle className="flex items-center gap-2 text-white text-lg">
                      {project.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="flex items-center justify-between gap-3 w-full mb-4">
                      <Badge variant="outline">{project.language}</Badge>
                      <Badge
                        className="font-light tracking-wide text-xs bg-white/10 text-white/50"
                        variant="secondary"
                      >
                        {project.difficulty}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground">{project.description}</p>
                  </CardContent>
                  <CardFooter className="flex items-center justify-start gap-3 w-full">
                    <Link
                      href={`/projects/${project.name}`}
                      className={buttonVariants({ variant: "default", className: "flex-grow" })}
                    >
                      View Project
                    </Link>
                    <Link
                      href={project.name}
                      target="_blank"
                      className={buttonVariants({
                        className:
                          "text-white/90 bg-white/30 p-2 rounded-full cursor-pointer hover:bg-white/50 transition-colors duration-200",
                      })}
                    >
                      <IconBrandGithub className="size-8" />
                    </Link>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
          {filteredProjects.length === 0 && (
            <div className="text-center text-muted-foreground mt-8 mx-auto w-[60vw]">
              <h1>No projects found matching your criteria.</h1>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
