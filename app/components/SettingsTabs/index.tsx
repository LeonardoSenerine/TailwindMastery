"use client";

import * as Tabs from "@radix-ui/react-tabs";
import { TabItem } from "./TabItem";
import { useState } from "react";
import * as ScrollArea from "@radix-ui/react-scroll-area";

export function SettingsTabs() {
  const [currentTab, setCurrentTab] = useState("tab1");

  return (
    <Tabs.Root value={currentTab} onValueChange={setCurrentTab}>
      <ScrollArea.Root className="w-full" type="scroll">
        <ScrollArea.Viewport className="-w-full overflow-x-scroll">
          <Tabs.List className="mt-6 flex w-full items-center gap-4 border-b dark:border-zinc-700 border-zinc-200">
            <TabItem
              title="My details"
              value="tab1"
              isSelected={currentTab === "tab1"}
            />
            <TabItem
              title="Profile"
              value="tab2"
              isSelected={currentTab === "tab2"}
            />
            <TabItem
              title="Password"
              value="tab3"
              isSelected={currentTab === "tab3"}
            />
            <TabItem
              title="Team"
              value="tab4"
              isSelected={currentTab === "tab4"}
            />
            <TabItem
              title="Plan"
              value="tab5"
              isSelected={currentTab === "tab5"}
            />
            <TabItem
              title="Billing"
              value="tab6"
              isSelected={currentTab === "tab6"}
            />
            <TabItem
              title="Email"
              value="tab7"
              isSelected={currentTab === "tab7"}
            />
            <TabItem
              title="Notifications"
              value="tab8"
              isSelected={currentTab === "tab8"}
            />
            <TabItem
              title="Integrations"
              value="tab9"
              isSelected={currentTab === "tab9"}
            />
            <TabItem
              title="API"
              value="tab10"
              isSelected={currentTab === "tab10"}
            />
          </Tabs.List>
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar
          className="flex h-0.5 translate-y-1.5 touch-none select-none flex-col bg-zinc-100"
          orientation="horizontal"
        >
          <ScrollArea.Thumb className="relative flex-1 rounded-lg bg-zinc-300 " />
        </ScrollArea.Scrollbar>
      </ScrollArea.Root>
    </Tabs.Root>
  );
}
