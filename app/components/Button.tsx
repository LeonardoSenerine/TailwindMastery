import { ComponentProps } from "react";
import { tv, type VariantProps } from "tailwind-variants";

export type ButtonsProps = ComponentProps<"button"> &
  VariantProps<typeof button>;

const button = tv({
  base: [
    "rounded-lg px-4 py-2 text-sm font-semibold shadow-sm cursor-pointer outline-none ",
    "focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-violet-500 ",
    "active:opacity-80",
  ],
  variants: {
    variant: {
      primary:
        "bg-violet-600 text-white hover:bg-violet-700 dark:bg-violet-500 dark:hover:bg-violet-600",
      outline:
        "border border-zinc-300 text-zinc-700 dark:border-zinc-700 dark:hover:bg-white/5 dark:text-zinc-400 hover:bg-zinc-50 ",
      ghost:
        "rounded-md dark:text-zinc-400 dark:hover:bg-zinc-800 px-2 hover:bg-zinc-50 shadow-none text-zinc-500",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});
export function Button({ variant, className, ...props }: ButtonsProps) {
  return <button {...props} className={button({ variant, className })} />;
}
