"use client";
import React, { useState } from "react";
import { Button } from "@/components/reusable/button";
import { MapPin, ChevronDown } from "lucide-react";
import Link from "next/link";

type Job = {
  title: string;
  location: string;
  type: string;
  summary: string;
  description: string;
  link: string;
};

export function JobList({ jobs }: { jobs: Job[] }) {
  const [expanded, setExpanded] = useState<number | null>(null);

  const handleCardClick = (idx: number) => {
    setExpanded(expanded === idx ? null : idx);
  };

  return (
    <div className="flex flex-col gap-8 max-w-4xl mx-auto">
      {jobs.map((job: Job, idx: number) => (
        <div
          key={job.title}
          className={`bg-white rounded-2xl shadow p-8 text-left border border-[#f1f1f1] cursor-pointer transition-all duration-200 ${expanded === idx ? "ring-2 ring-[#4d77ff]" : ""}`}
          onClick={(e) => {
            if ((e.target as HTMLElement).closest("button, a, .chevron-toggle")) return;
            handleCardClick(idx);
          }}
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
            <div className="flex items-center gap-3 flex-wrap">
              <span className="text-xl font-extrabold text-gray-900">{job.title}</span>
              <span className="inline-block bg-gray-100 text-gray-700 text-xs font-semibold px-3 py-1 rounded-full ml-1">{job.type}</span>
            </div>
            <div className="mt-3 md:mt-0 flex items-center gap-2 md:ml-4">
              <Link href={job.link} target="_blank" rel="noopener noreferrer" tabIndex={-1} onClick={e => e.stopPropagation()}>
                <Button variant="default" size="md" className="rounded-lg font-bold px-6">Apply</Button>
              </Link>
              <button
                className="chevron-toggle ml-2 p-2 rounded-full hover:bg-gray-100 transition-colors"
                aria-label={expanded === idx ? "Collapse details" : "Expand details"}
                onClick={e => {
                  e.stopPropagation();
                  handleCardClick(idx);
                }}
              >
                <ChevronDown size={22} className={`transition-transform ${expanded === idx ? "rotate-180" : "rotate-0"}`} />
              </button>
            </div>
          </div>
          <div className="flex items-center gap-2 text-gray-500 text-sm mt-1">
            <MapPin size={16} className="text-gray-400" />
            <span>{job.location}</span>
          </div>
          <div className="text-gray-600 text-base mt-1">{job.summary}</div>
          {expanded === idx && (
            <>
              <hr className="my-5 border-gray-200" />
              <div className="text-gray-700 text-base">{job.description}</div>
            </>
          )}
        </div>
      ))}
    </div>
  );
} 