"use client";
import Image from "next/image";
import { Button } from "../reusable/button";
import { useRouter } from "next/navigation";

const SupportCTA = () => {
  const router = useRouter();
  return (
  <div className="bg-gray-50 rounded-2xl container mx-auto px-6 py-10 flex flex-col items-center text-center max-w-screen-xl xl:w-[60%] lg:w-[70%] md:w-[80%] sm:w-screen-xl">
    {/* Avatars */}
    <div className="flex justify-center mb-4">
      <div className="flex -space-x-4">
        <Image
          src="/images/avatar1.png"
          alt="Avatar 1"
          width={40}
          height={40}
          className="rounded-full border-2 border-white"
        />
        <Image
          src="/images/avatar2.png"
          alt="Avatar 2"
          width={40}
          height={40}
          className="rounded-full border-2 border-white"
        />
        <Image
          src="/images/avatar3.png"
          alt="Avatar 3"
          width={40}
          height={40}
          className="rounded-full border-2 border-white"
        />
      </div>
    </div>
    {/* Heading */}
    <h3 className="font-semibold text-lg mb-1">Still have questions?</h3>
    {/* Subheading */}
    <p className="text-gray-500 mb-4">
      Can&apos;t find the answer you&apos;re looking for? Please chat to our friendly team.
    </p>
    {/* Button */}
    <Button variant="default" size="md" onClick={() => router.push("/contact-us")}>Get in touch</Button>
    
  </div>
)};

export default SupportCTA;