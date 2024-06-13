import React from "react";

function Tag({ type }) {
  return (
    <div className="inline-block rounded-md bg-light-primary px-2 py-1 text-white text-sm leading-5">
      {type}
    </div>
  );
}

export default Tag;
