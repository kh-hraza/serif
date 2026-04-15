import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinkClassDefault =
  "text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors";

const navLinkClassOnHero =
  "text-sm font-medium text-white/85 hover:text-white transition-colors";

export function Navbar({
  className,
  variant = "default",
}: {
  className?: string;
  variant?: "default" | "onHero";
}) {
  const navLinkClass =
    variant === "onHero" ? navLinkClassOnHero : navLinkClassDefault;
  const brandClass =
    variant === "onHero"
      ? "font-bold text-2xl tracking-tight flex items-center gap-2 text-white drop-shadow-sm"
      : "font-bold text-2xl tracking-tight flex items-center gap-2 text-zinc-900 dark:text-zinc-50";
  const iconClass =
    variant === "onHero"
      ? "h-8 w-8 shrink-0 object-contain brightness-0 invert"
      : "h-8 w-8 shrink-0 object-contain dark:invert";

  return (
    <nav
      className={cn(
        "relative flex items-center justify-between gap-4 p-4 max-w-7xl mx-auto w-full",
        className
      )}
    >
      <div className="flex min-w-0 flex-1 items-center gap-2">
        <Link href="/" className={brandClass}>
          <Image
            src="/icon.png"
            alt=""
            width={32}
            height={32}
            className={iconClass}
            priority
          />
          Serif.
        </Link>
      </div>

      <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 md:flex items-center gap-8">
        <Link href="#features" className={navLinkClass}>
          Feature
        </Link>
        <Link href="#pricing" className={navLinkClass}>
          Pricing
        </Link>
        <Link href="#blog" className={navLinkClass}>
          Blog
        </Link>
      </div>

      <div className="flex flex-1 items-center justify-end gap-4">
        <Link href="/auth/login">
          <Button
            variant="ghost"
            className={
              variant === "onHero"
                ? "text-white/90 hover:bg-white/10 hover:text-white"
                : undefined
            }
          >
            Log in
          </Button>
        </Link>
        <Link href="/auth/sign-up">
          <Button
            className={
              variant === "onHero"
                ? "bg-white text-zinc-900 hover:bg-white/90 border-white/20"
                : undefined
            }
          >
            Sign up
          </Button>
        </Link>
      </div>
    </nav>
  );
}
