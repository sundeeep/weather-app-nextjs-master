/** @format */

import { cn } from "@/utils/cn";
import React from "react";

export default function Container(props: React.HTMLProps<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={cn(
        "w-full bg-white bg-clip-padding backdrop-filter backdrop-blur-xs bg-opacity-50 border rounded-xl flex py-4 shadow-sm",
        props.className
      )}
    />
  );
}
