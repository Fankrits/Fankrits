import * as React from "react";

import { cn } from "#/lib/utils.ts";

const cardVariants = {
  default: "bg-card ring-1 ring-foreground/10",
  outline: "bg-transparent border border-foreground/15",
};

function Card({
  className,
  size = "default",
  variant = "default",
  ...props
}: React.ComponentProps<"div"> & {
  size?: "default" | "sm";
  variant?: keyof typeof cardVariants;
}) {
  return (
    <div
      data-slot="card"
      data-size={size}
      className={cn(
        "group/card flex flex-col gap-4 overflow-hidden rounded-xl py-4 text-sm text-card-foreground has-data-[slot=card-footer]:pb-0 has-[>img:first-child]:pt-0 data-[size=sm]:gap-3 data-[size=sm]:py-3 data-[size=sm]:has-data-[slot=card-footer]:pb-0 *:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl",
        cardVariants[variant],
        className,
      )}
      {...props}
    />
  );
}

export { Card };
