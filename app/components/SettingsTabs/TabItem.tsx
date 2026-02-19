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
        className="px-1 data-[state=active]:text-violet-700  relative pb-4 cursor-pointer text-sm font-medium text-zinc-500 hover:text-violet-700 "
      >
        <span>{title}</span>
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
