import { forwardRef, useId } from "react";

function Select({ options = [], label, className = "", ...props }, ref) {
  const id = useId();

  return (
    <div className={`w-full`}>
      {label && (
        <label htmlFor={id} className="">
          {label}
        </label>
      )}

      <select
        ref={ref}
        id={id}
        {...props}
        className={`w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-black outline-none duration-200 focus:bg-gray-50 ${className}`}
      >
        {options?.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default forwardRef(Select);
