import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, PenLine, Share2, Users } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 dark:bg-black font-sans">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-24 md:py-32 lg:py-40 flex flex-col items-center justify-center text-center px-4">
          <div className="max-w-[800px] space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-zinc-900 dark:text-zinc-50 leading-tight">
              Publish your ideas with <span className="text-zinc-500">Serif.</span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 max-w-[600px] mx-auto">
              A minimalist, distraction-free blogging platform designed for writers who care about typography and reading experience.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link href="/auth/sign-up">
                <Button size="lg" className="h-12 px-8 text-base">
                  Start writing for free <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/auth/login">
                <Button size="lg" variant="outline" className="h-12 px-8 text-base">
                  Sign in
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-24 bg-white dark:bg-zinc-950/50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-12">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="h-12 w-12 rounded-full bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center">
                  <PenLine className="h-6 w-6 text-zinc-900 dark:text-zinc-50" />
                </div>
                <h3 className="text-xl font-semibold">Distraction-free</h3>
                <p className="text-zinc-600 dark:text-zinc-400">
                  Write in a clean, uncluttered interface that puts your content front and center.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="h-12 w-12 rounded-full bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center">
                  <Share2 className="h-6 w-6 text-zinc-900 dark:text-zinc-50" />
                </div>
                <h3 className="text-xl font-semibold">Easy Sharing</h3>
                <p className="text-zinc-600 dark:text-zinc-400">
                  Publish your posts with a single click and share them seamlessly across networks.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="h-12 w-12 rounded-full bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center">
                  <Users className="h-6 w-6 text-zinc-900 dark:text-zinc-50" />
                </div>
                <h3 className="text-xl font-semibold">Grow your audience</h3>
                <p className="text-zinc-600 dark:text-zinc-400">
                  Build a subscriber base and connect with readers who love your work.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-6 text-center border-t border-zinc-200 dark:border-zinc-800">
        <p className="text-zinc-500 dark:text-zinc-400 text-sm">
          © {new Date().getFullYear()} Serif. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
