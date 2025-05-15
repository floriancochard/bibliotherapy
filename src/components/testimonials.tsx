import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="py-16">
      <div className="px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Testimonials</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="bg-white border-none shadow-md">
            <CardContent className="pt-6">
              <div className="flex flex-col gap-4">
                <Quote className="h-8 w-8 text-teal-200" />
                <p className="text-lg">
                  This app gave me a book that put words to what I couldn’t describe. It changed how I saw myself.
                </p>
                <div>
                  <p className="font-semibold">Julia</p>
                  <p className="text-sm text-gray-500">Berlin</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white border-none shadow-md">
            <CardContent className="pt-6">
              <div className="flex flex-col gap-4">
                <Quote className="h-8 w-8 text-teal-200" />
                <p className="text-lg">
                  It does what I try to do in sessions—bring the right story into a client’s life. A powerful ally in my
                  practice
                </p>
                <div>
                  <p className="font-semibold">Carlos</p>
                  <p className="text-sm text-gray-500">Psychotherapist (UK)</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
