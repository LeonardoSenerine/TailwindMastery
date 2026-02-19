import { ChevronDown } from "lucide-react";
import { ElementType } from "react";

export interface NavItemProps {
  title: string;
  icon: ElementType;
}
export function NavItem({ title, icon: Icon }: NavItemProps) {
  return (
    <a
      className="flex group items-center gap-3 rounded px-3 py-2 hover:bg-violet-50"
      href=""
    >
      <Icon className="h-5  w-5 text-zinc-500" />
      <span className="font-medium group-hover:text-violet-500 text-zinc-700">
        {title}
      </span>
      <ChevronDown className="ml-auto h-5 group-hover:text-violet-500 w-5 text-zinc-400" />
    </a>
  );
}
