import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare, Sparkles, BookOpen } from "lucide-react";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 bg-gray-50">
      <div className="px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">How It Works</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
            <div className="h-12 w-12 rounded-full bg-teal-100 flex items-center justify-center mb-4">
              <MessageSquare className="h-6 w-6 text-teal-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">1. Tell us how you feel</h3>
            <p className="text-gray-600">
              Answer a short, reflective questionnaire designed to surface your current emotional landscape.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
            <div className="h-12 w-12 rounded-full bg-teal-100 flex items-center justify-center mb-4">
              <Sparkles className="h-6 w-6 text-teal-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">2. We translate emotion into intent</h3>
            <p className="text-gray-600">
              Using AI trained on therapeutic and literary frameworks, we interpret your responses into a mood
              “prescription.”
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
            <div className="h-12 w-12 rounded-full bg-teal-100 flex items-center justify-center mb-4">
              <BookOpen className="h-6 w-6 text-teal-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">3. Get your curated booklist</h3>
            <p className="text-gray-600">
              Receive book recommendations tailored to your emotional needs—each chosen to help you reflect, escape, or
              transform.
            </p>
          </div>
        </div>
        <div className="flex justify-center mt-12">
          <Button variant="outline" className="flex items-center gap-2">
            Try a sample check-in <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
