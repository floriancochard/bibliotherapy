import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="py-20 md:py-28 w-full">
      <div className="px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="space-y-4 max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
              {" "}
              The right book. At the right time. For how you feel.
            </h1>
            <p className="text-xl text-gray-600 md:text-2xl max-w-2xl mx-auto">
              We believe stories can guide healing, growth, and insight. Our app curates personalized book
              recommendations based on your emotional state—just like a bibliotherapist would.
            </p>
          </div>
          <Button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-6 text-lg rounded-md">
            Start free – no credit card required
          </Button>
          <div className="pt-8">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Book recommendation app interface"
              className="rounded-lg shadow-lg max-w-full h-auto"
              width={600}
              height={400}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
