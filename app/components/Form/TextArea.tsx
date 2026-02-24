import { ComponentProps } from "react";

export type TextAreaProps = ComponentProps<"textarea">;

export function TextArea(props: TextAreaProps) {
  return (
    <textarea
      className="w-full min-h-30 p-3 border outline-none  dark:border-zinc-700 dark:bg-zinc-800 dark:placeholder-zinc-400 dark:text-zinc-100 dark:focus-within:border-violet-500 dark:focusring-violet-500/20  focus:border-violet-300 focus:ring-4 focus:ring-violet-100   border-zinc-300 rounded-lg  px-3 py-2 shadow-sm focus:outline-none"
      {...props}
    />
  );
}
