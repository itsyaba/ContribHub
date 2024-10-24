"use client";

import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { difficultyLevels, programmingLanguagesList } from "@/lib/data";
import React, { useState } from "react";

const ProjectPage = () => {
  const [selectedDifficulty, setSelectedDifficulty] = useState(" ");
  const [selectedLanguage, setSelectedLanguage] = useState(" ");
  return (
    <div className="h-[90vh] mt-16">
      <div>
        <h1>Projects</h1>
        <div>
          <div className="">
            <DropdownMenu>
              <DropdownMenuTrigger>Filter by</DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Difficulty</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup
                  value={selectedDifficulty}
                  onValueChange={setSelectedDifficulty}
                >
                  {difficultyLevels.map((level) => (
                    <DropdownMenuRadioItem key={level} value={level}>
                      {/* <Checkbox id={level} /> */}
                      <span>{level}</span>
                    </DropdownMenuRadioItem>
                  ))}
                </DropdownMenuRadioGroup>
                <DropdownMenuSeparator />
                <DropdownMenuLabel>Languages</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup
                  value={selectedLanguage}
                  onValueChange={setSelectedLanguage}
                >
                  {programmingLanguagesList.map((language) => (
                    <DropdownMenuRadioItem key={language} value={language}>
                      {/* <Checkbox id={language} /> */}
                      <span>{language}</span>
                    </DropdownMenuRadioItem>
                  ))}
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className=""></div>
        </div>
      </div>
    </div>
  );
};
export default ProjectPage;
