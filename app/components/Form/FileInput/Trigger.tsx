"use client";
import { UploadCloud } from "lucide-react";
import { useFileInput } from "./Root";

export function Trigger() {
  const { id } = useFileInput();
  return (
    <label
      htmlFor={id}
      className="flex-1 group cursor-pointer flex-col flex items-center gap-3 hover:text-violet-500 rounded-lg border shadow-sm border-zinc-300 px-6 py-4 text-center text-zinc-500 hover:border-violet-200 hover:bg-violet-25"
    >
      <div className="rounded-full border-6 border-zinc-50 group-hover:border-violet-50 group-hover:bg-violet-100 bg-zinc-100 p-2">
        <UploadCloud className="w-5  h-5 group-hover:text-violet-700 text-zinc-600" />
      </div>
      <div className="flex flex-col items-center gap-1">
        <span className="text-sm">
          <span className="font-semibold text-violet-700">
            Click to upload{" "}
          </span>
          or drag and drop
        </span>
        <span className="text-xs">SVG, PNG, JPG or GIF (max. 800x400px)</span>
      </div>
    </label>
  );
}
