import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import React from "react";

const ProjectPage = () => {
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
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    {/* Newbie , Junior ,  */}
                  </DropdownMenuItem>
                </DropdownMenuGroup>
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
