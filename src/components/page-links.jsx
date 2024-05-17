import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

export default function PageLinks({ isCurrent, className }) {
  const links = [
    {
      label: "Overview",
      path: "/overview",
    },
    {
      label: "Prediction",
      path: "/prediction",
    },
    {
      label: "Gallery",
      path: "/gallery",
    },
  ];

  return links.map(({ label, path }) => (
    <Link
      key={label}
      to={path}
      className={cn(
        `${
          isCurrent(path)
            ? "rounded border bg-foreground px-2 py-1 font-medium text-white dark:text-black"
            : "text-foreground/60"
        } w-[6rem] text-center`,
        className,
      )}
    >
      {label}
    </Link>
  ));
}
