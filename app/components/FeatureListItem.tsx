import * as React from "react";

export default function FeatureListItem({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-4 my-[10px]">
      <div className="w-6 h-6 bg-indigo-50 rounded-full flex items-center justify-center shrink-0">
        <svg
          viewBox="0 0 24 24"
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 12l4 4 8-8" className="stroke-indigo-500" />
        </svg>
      </div>
      <p className="text-lg text-neutral-600">{children}</p>
    </div>
  );
}
