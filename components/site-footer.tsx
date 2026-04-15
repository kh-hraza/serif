import { cn } from "@/lib/utils";

export function SiteFooter({ className }: { className?: string }) {
  return (
    <footer
      className={cn(
        "w-full border-t border-zinc-200 py-6 text-center dark:border-zinc-800",
        className
      )}
    >
      <p className="text-sm text-zinc-500 dark:text-zinc-400">
        © {new Date().getFullYear()} Serif. All rights reserved.
      </p>
    </footer>
  );
}
