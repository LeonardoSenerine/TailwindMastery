"use client";

import { CloudUpload, Trash2 } from "lucide-react";
import { useFileInput } from "./Root";
import { formatBytes } from "@/app/utils/format-bytes";

export function FileList() {
  const { files } = useFileInput();
  return (
    <div className="mt-4 space-y-3">
      {files.map((file) => {
        return (
          <div
            key={file.name}
            className="group flex items-start gap-4 rounded-lg border p-4 border-zinc-200"
          >
            <div className="rounded-full border-4 border-violet-100 bg-violet-200 p-2 text-violet-600 ">
              <CloudUpload className="h-4 w-4" />
            </div>
            <div className="flex flex-1 flex-col items-start gap-1">
              <div className="flex flex-col">
                <span className="text-sm font-medium text-zinc-700">
                  {file.name}
                </span>
                <span className="text-sm text-zinc-500">
                  {formatBytes(file.size)}
                </span>
              </div>
              <div className="flex w-full items-center gap-3">
                <span className="h-2 flex-1 rounded-full bg-zinc-100">
                  <div className="h-2 rounded-full bg-violet-600 w-4/5 "></div>
                </span>
                <span className="text-sm font-medium text-zinc-700">80%</span>
              </div>
            </div>

            <button
              type="button"
              className="ml-auto rounded-md p-2 hover:bg-zinc-50"
            >
              <Trash2 className="h-5 w=5 text-zinc-500" />
            </button>
          </div>
        );
      })}
    </div>
  );
}
