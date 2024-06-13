import React from "react";
import { Tag } from "../";

function HeroPostCard() {
  return (
    <div className="absolute -bottom-9 left-9 flex w-4/6 min-w-72 flex-col gap-6 rounded-xl bg-white px-10 py-10 shadow-custom-1">
      <div>
        <Tag type="Technology" />
        <h2 className="text-light-secondary-800 text-4xl font-semibold">
          Post Heading
        </h2>
      </div>

      <div className="flex gap-5">
        <div className="flex gap-3">
          <img
            src=""
            alt="author"
            width="2.25rem"
            height="2.25rem"
            className="h-9 w-9 rounded-full"
          />

          <h2 className="text-base text-light-secondary-500">Author</h2>
        </div>

        <p className="text-base text-light-secondary-500">Date</p>
      </div>
    </div>
  );
}

export default HeroPostCard;
