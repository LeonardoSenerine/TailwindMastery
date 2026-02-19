import { ComponentProps } from "react";

export type TextAreaProps = ComponentProps<'textarea'>

export function TextArea(props: TextAreaProps) {
  return (
    <textarea
      className="w-full min-h-30 p-3 border border-zinc-300 rounded-lg focus:ring-2 px-3 py-2 shadow-sm focus:ring-violet-500 focus:outline-none"
      {...props}
    />
  );
}