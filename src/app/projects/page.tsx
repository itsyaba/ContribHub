"use client";

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
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
import { Code2, Search, Star, Filter } from "lucide-react";
import { programmingLanguagesList, difficultyLevels, projectCategories, sortBy } from "@/lib/data";

const projects = [
  {
    id: 1,
    name: "Project Alpha",
    description: "A cutting-edge web framework for building scalable applications.",
    language: "JavaScript",
    stars: 1200,
    category: "Web Development",
    difficulty: "Intermediate",
  },
  {
    id: 2,
    name: "Data Cruncher",
    description: "High-performance data processing library for big data applications.",
    language: "Python",
    stars: 890,
    category: "Data Science",
    difficulty: "Advanced",
  },
  {
    id: 3,
    name: "Mobile Kit",
    description: "Comprehensive toolkit for cross-platform mobile app development.",
    language: "React Native",
    stars: 2300,
    category: "Mobile Development",
    difficulty: "Junior",
  },
  {
    id: 4,
    name: "AI Assistant",
    description: "Advanced AI model for natural language processing and generation.",
    language: "Python",
    stars: 3100,
    category: "Artificial Intelligence",
    difficulty: "Guru",
  },
  {
    id: 5,
    name: "Secure Auth",
    description: "Robust authentication and authorization system for web applications.",
    language: "Typescript",
    stars: 760,
    category: "Web Development",
    difficulty: "Intermediate",
  },
  {
    id: 6,
    name: "Cloud Manager",
    description: "Simplified cloud infrastructure management and deployment tool.",
    language: "Go",
    stars: 1500,
    category: "DevOps",
    difficulty: "Advanced",
  },
  // Add more projects as needed
];

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
  const [selectedDifficulties, setSelectedDifficulties] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOption, setSortOption] = useState(sortBy[0]);
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [showFilters, setShowFilters] = useState(false);

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
  }, [searchTerm, selectedCategory, selectedLanguages, selectedDifficulties, sortOption]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className=" py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold  mb-6">Open Source Projects</h1>
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
        {showFilters && (
          <div className="w-full md:w-1/4 space-y-6">
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
          </div>
        )}

        <div
          className={`grid gap-6 ${
            showFilters ? "md:w-3/4" : "w-full"
          } grid-cols-1 md:grid-cols-2 lg:grid-cols-3`}
        >
          {filteredProjects.map((project) => (
            <Card key={project.id} className="flex flex-col">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code2 className="h-5 w-5" />
                  {project.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{project.description}</p>
              </CardContent>
              <CardFooter className="flex flex-wrap justify-between items-center gap-2">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="secondary">{project.language}</Badge>
                  <Badge variant="outline">{project.category}</Badge>
                  <Badge>{project.difficulty}</Badge>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 text-yellow-400" />
                  <span className="text-sm text-muted-foreground">{project.stars}</span>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      {filteredProjects.length === 0 && (
        <p className="text-center text-muted-foreground mt-8">
          No projects found matching your criteria.
        </p>
      )}
    </div>
  );
}
