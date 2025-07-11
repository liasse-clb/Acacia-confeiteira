"use client";

import { useState } from "react";
import { Button } from "@heroui/button";

import TestimonialCard from "./TestimonialCard";

interface Testimonial {
  name: string;
  comment: string;
}

interface TestimonialListProps {
  testimonials: Testimonial[];
}

export default function TestimonialList({
  testimonials,
}: TestimonialListProps) {
  const [showAll, setShowAll] = useState(false);

  const displayedTestimonials = showAll
    ? testimonials
    : testimonials.slice(0, 3);

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="flex flex-wrap justify-center gap-6">
        {displayedTestimonials.map((t, idx) => (
          <TestimonialCard key={idx} comment={t.comment} name={t.name} />
        ))}
      </div>

      {testimonials.length > 3 && (
        <Button
          className="mt-4 text-[#C79f30] underline font-medium hover:text-[#FFAC04] transition"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Ver menos" : "Ver mais"}
        </Button>
      )}
    </div>
  );
}
