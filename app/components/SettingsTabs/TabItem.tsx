"use client";

import * as Tabs from "@radix-ui/react-tabs";
import { motion } from "framer-motion";

export interface TabItemProps {
  value: string;
  title: string;
  isSelected?: boolean;
}

export function TabItem({ value, title, isSelected = false }: TabItemProps) {
  return (
    <>
      <Tabs.Trigger
        value={value}
        className="px-1 group  data-[state=active]:text-violet-700 outline-none relative pb-4 cursor-pointer text-sm font-medium text-zinc-500 hover:text-violet-700 "
      >
        <span className="group-focus-visible:ring-2 group-focus-visible:ring-violet-300 group-focus-visible:rounded group-focus-visible:ring-offset-4 group-focus-visible:outline-none">{title}</span>
        {isSelected && (
          <motion.div
            layoutId="activeTab"
            className="absolute -bottom-px left-0 right-0 h-0.5 bg-violet-700"
          ></motion.div>
        )}
      </Tabs.Trigger>
    </>
  );
}
