"use client";

import React, { FC } from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { signIn } from "next-auth/react";
import { useToast } from "@/hooks/use-toast";
import { IconBrandGithub, IconBrandGoogle } from "@tabler/icons-react";

type UserAuthFormProps = React.HTMLAttributes<HTMLDivElement>;
const UserAuthForm: FC<UserAuthFormProps> = ({ className, ...props }) => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const loginWithGoogle = async () => {
    setIsLoading(true);
    try {
      await signIn("google", { callbackUrl: "/", redirect: false });
    } catch (error) {
      console.log("Error: ", error);
      toast({
        title: "Error",
        description: "There was an error logging in with Google",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const loginWithGithub = async () => {
    setIsLoading(true);
    try {
      await signIn("github"); // Change this to "github" for GitHub sign-in
    } catch (error) {
      console.log("Error: ", error);

      toast({
        title: "Error",
        description: "There was an error logging in with GitHub",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={cn("flex justify-center flex-col gap-8", className)} {...props}>
      <Button
        type="button"
        size="lg"
        className="w-full"
        onClick={loginWithGoogle}
        disabled={isLoading}
      >
        {isLoading ? null : <IconBrandGoogle className="w-4 h-4 mr-2" />}
        Google
      </Button>

      <Button
        type="button"
        size="lg"
        className="w-full"
        onClick={loginWithGithub}
        disabled={isLoading}
      >
        {isLoading ? null : <IconBrandGithub className="w-4 h-4 mr-2" />}
        Github
      </Button>
    </div>
  );
};

export default UserAuthForm;
