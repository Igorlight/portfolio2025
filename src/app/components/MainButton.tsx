import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import { cn } from "@/lib/utils";

export default function MainButton({
  text,
  className,
  address,
  target,
}: {
  text: string;
  className?: string;
  address?: string;
  target?: string;
}) {
  return (
    <Link
      href={address || "/"}
      target={target || '_self'}
      className={cn(
        "block w-full border-y border-white/15 h-[56px] overflow-hidden group relative",
        className
      )}
    >
      <div className="flex items-center gap-2 p-4 justify-between absolute inset-0 group-hover:-translate-y-full transition-all duration-300">
        <p>{text}</p>
        <ArrowUpRight className="w-6 h-6" />
      </div>
      <div className="flex items-center gap-2 p-4 justify-between bg-white absolute inset-0 translate-y-full group-hover:translate-y-0 transition-all duration-300">
        <p className="text-black">{text}</p>
        <ArrowUpRight className="w-6 h-6 text-black" />
      </div>
    </Link>
  );
}
