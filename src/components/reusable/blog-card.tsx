import React from "react";
import { generateTagColorResponse } from "@/lib/hexcode";
import Link from "next/link";
import Image from "next/image";
import { splitToTitleCase } from "@/lib/utils";

interface BlogCardProps {
  title: string;
  description: string;
  coverImage: string;
  author: string;
  date: string;
  tags: string[];
  slug: string;
  isHorizontal?: boolean;
}

export const BlogCard: React.FC<BlogCardProps> = ({
  title,
  description,
  coverImage,
  author,
  date,
  tags,
  slug,
  isHorizontal,
}) => {
  return (
    <Link
      href={`/blogs/${slug}`}
      target="_blank"
      className={`w-full overflow-hidden ${
        isHorizontal
          ? "block sm:flex hover:scale-100 hover:shadow-none"
          : "block hover:scale-105  transition"
      } `}
    >
      <Image
        src={coverImage || "https://picsum.photos/300/200"}
        alt={title}
        width={1000}
        height={420}
        className={`${
          isHorizontal ? "w-full sm:w-1/2 h-full sm:h-[220px] object-cover" : "w-full h-68 object-fill"
        }`}
      ></Image>
      <div
        className={`${
          isHorizontal ? "py-5 sm:py-0 px-1 sm:px-5" : "py-5 px-1"
        }`}
      >
        <p
          className={`${
            isHorizontal ? "flex flex-wrap" : ""
          } capitalize text-sm font-medium text-[#4D77FF] flex items-center gap-1 mb-2`}
        >
          {author}{" "}
          <span className="text-3xl leading-0 font-bold block">&middot;</span>{" "}
          {date}
        </p>
        <div className="flex justify-between items-start mb-2.5 hover:text-[#4D77FF]">
          <h2
            className={`${
              isHorizontal ? "text-base" : "text-lg"
            }text-gray-800 font-bold`}
          >
            {title}
          </h2>
          <Image
            src="icons/arrow-up-right.svg"
            alt="arrow"
            width={24}
            height={28}
            className={`${isHorizontal ? "block sm:hidden" : "mt-1"}`}
          />
        </div>
        <p className="text-sm text-gray-600">{description}</p>

        <div className="flex flex-wrap gap-2 mt-4">
          {generateTagColorResponse(tags).map(({ tag, bgColor, textColor }) => (
            <span
              key={tag}
              className="capitalize text-xs px-2 py-1 rounded-full"
              style={{
                backgroundColor: bgColor,
                color: textColor,
              }}
            >
              {splitToTitleCase(tag)}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};
