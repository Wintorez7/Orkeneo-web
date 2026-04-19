"use client";
import React from "react";
import { BlogStories } from "../reusable/blog-stories";
import { Button } from "../reusable/button";
import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";

interface StorySectionProps {
  title: string;
  islayout?: boolean;
}

export const StorySection: React.FC<StorySectionProps> = ({
  title,
  islayout,
}) => {
  const router = useRouter();

  return (
    <div className="max-w-screen-xl mx-auto text-center py-20">
      <div className="pb-8 sm:pb-10 px-4 font-inter">
        <BlogStories text={title} islayout={islayout} />
      </div>

      <Button
        variant="outline"
        size="md"
        className="text-[#4D77FF] bg-[#F9F5FF]"
        onClick={() => router.push("/blogs")}
      >
        <Icon icon="line-md:arrow-down" className="mr-1.5 my-auto" /> Load more
      </Button>
    </div>
  );
};
