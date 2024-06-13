import React, { useId, forwardRef } from "react";

function Input(
  { label, type = "text", placeholder = "", className = "", ...props },
  ref,
) {
  const id = useId();

  return (
    <div className="w-full">
      {label && (
        <label htmlFor={id} className="mb-1 inline-block pl-1">
          {label}
        </label>
      )}

      <input
        type={type}
        id={id}
        ref={ref}
        placeholder={placeholder}
        {...props}
        className={`w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-black outline-none duration-200 focus:bg-gray-50 ${className}`}
      />
    </div>
  );
}

export default forwardRef(Input);
