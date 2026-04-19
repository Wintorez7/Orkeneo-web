'use client';

import { Button } from "@/components/reusable/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function NotFound() {
  const router = useRouter();
  return (
    <main className="pl-10 lg:my-24 md:pl-15 lg:pl-20 py-16 md:py-8 flex md:flex-row flex-col justify-center md:justify-between items-center gap-14">
      <div className="flex flex-col justify-start text-left">
        <h1 className="mb-2 text-[#4d77ff] font-semibold text-lg">404 error</h1>
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-2">Page not found…</h2>
        <p className="text-gray-500 mb-8 max-w-md mx-auto">
          Looks like you shouldn&apos;t be here.<br />
          But now that you are here, you better check this out:
        </p>
        <div className="flex flex-col md:flex-row justify-start items-start gap-5">
          <Button
            variant="outline"
            size="lg"
            className="font-semibold"
            onClick={() => router.back()}
            leftIcon={<ArrowLeft className="w-5 h-5" />}
          >
            Go back
          </Button>
          <Link href="/">
            <Button
              variant="default"
              size="lg"
              className="font-semibold"
              onClick={() => router.push("/")}
            >
              Take me to Orkeneo
            </Button>
          </Link>
        </div>
      </div>
      <div>
        <div className="hidden lg:block relative w-full overflow-hidden">
          <Image
            src="/images/dashboard-screenshot.png"
            alt="Page Not found"
            width={800}
            height={800}
            className="object-cover w-full h-full min-w-175"
          />
        </div>
      </div>
    </main>
  );
} 