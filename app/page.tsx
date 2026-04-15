import { Navbar } from "@/components/navbar";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, PenLine, Share2, Users } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 dark:bg-black">
      <main className="flex-1">
        {/* Hero Section — full viewport */}
        <section className="relative isolate min-h-[100dvh] w-full overflow-hidden">
          <Image
            src="/background.jpg"
            alt=""
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div
            className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/30 to-black/55"
            aria-hidden
          />
          <div className="relative z-10 flex min-h-[100dvh] flex-col">
            <Navbar variant="onHero" />
            <div className="flex flex-1 flex-col items-center justify-center px-4 pb-16 pt-6 text-center">
              <div className="max-w-[800px] space-y-8">
                <h1 className="text-5xl font-bold tracking-tighter leading-tight text-white drop-shadow-md md:text-7xl">
                  AI blogging that still sounds like{" "}
                  <span className="text-sky-200">you.</span>
                </h1>
                <p className="mx-auto max-w-[600px] text-xl text-white/90 drop-shadow md:text-2xl">
                  Serif pairs sensible AI help with refined typography—draft, outline,
                  and publish posts readers actually want to finish.
                </p>
                <div className="flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row">
                  <Link href="/auth/sign-up">
                    <Button
                      size="lg"
                      className="h-12 border-white/25 bg-white px-8 text-base text-zinc-900 hover:bg-white/90"
                    >
                      Start writing for free{" "}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/auth/login">
                    <Button
                      size="lg"
                      variant="outline"
                      className="h-12 border-white/40 bg-transparent px-8 text-base text-white hover:bg-white/10 hover:text-white"
                    >
                      Sign in
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section
          id="features"
          className="w-full py-24 bg-white dark:bg-zinc-950/50"
        >
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

      <SiteFooter />
    </div>
  );
}
