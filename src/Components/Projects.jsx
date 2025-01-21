import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import {
  IconAi,
  IconCalculator,
  IconCloud,
  IconTerminal,
  IconWallet
} from "@tabler/icons-react";

export function Projects() {
  return (
    <BentoGrid className=""> {/* Replaced margin with padding here */}
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}

const Skeleton = () => (
  <div
    className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 p-4" // Added padding here
  ></div>
);

const items = [
  {
    title: "Terminal portfolio",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <Skeleton />,
    icon: <IconTerminal className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "WhoKnows",
    description: "The ultimate weather app - because who checks the sky anymore?",
    header: <Skeleton />,
    icon: <IconCloud  className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "PocketPlanner",
    description: "Track expenses, set budgets, and view spending reports.",
    header: <Skeleton />,
    icon: <IconWallet className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Rehan AI Bot",
    description: "Dive into the transformative power of technology.",
    header: <Skeleton />,
    icon: <IconAi className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Calculator App",
    description: "Smart calculator app - because your expenses need more smarts",
    header: <Skeleton />,
    icon: <IconCalculator className="h-4 w-4 text-neutral-500" />,
  },
];
