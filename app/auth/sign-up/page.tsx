import { SignUpForm } from "@/components/sign-up-form";
import { Navbar } from "@/components/navbar";
import { SiteFooter } from "@/components/site-footer";

export default function Page() {
  return (
    <div className="flex min-h-svh w-full flex-col bg-zinc-50 dark:bg-black">
      <Navbar />
      <main className="flex flex-1 flex-col items-center justify-center px-6 py-10 md:px-10">
        <div className="w-full max-w-sm">
          <SignUpForm />
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
