import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 max-w-7xl mx-auto w-full">
      <div className="flex items-center gap-2">
        <Link href="/" className="font-bold text-2xl tracking-tight">
          Serif.
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <Link href="/auth/login">
          <Button variant="ghost">Log in</Button>
        </Link>
        <Link href="/auth/sign-up">
          <Button>Sign up</Button>
        </Link>
      </div>
    </nav>
  );
}
