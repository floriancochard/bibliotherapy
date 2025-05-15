import { Brain, RefreshCw, CheckCircle } from "lucide-react";

export default function Features() {
  return (
    <section id="features" className="py-16">
      <div className="px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Why it matters</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <div className="h-12 w-12 rounded-full bg-teal-100 flex items-center justify-center mb-4">
              <Brain className="h-6 w-6 text-teal-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Stories that meet you in the moment</h3>
            <p className="text-gray-600">
              Like a skilled bibliotherapist, we suggest books that match your emotional needs—whether that means facing
              hard truths or simply getting lost in fiction.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="h-12 w-12 rounded-full bg-teal-100 flex items-center justify-center mb-4">
              <RefreshCw className="h-6 w-6 text-teal-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Dynamic and evolving</h3>
            <p className="text-gray-600">
              Life changes. So should your reading. Check in regularly to discover new books that mirror where you are
              now.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="h-12 w-12 rounded-full bg-teal-100 flex items-center justify-center mb-4">
              <CheckCircle className="h-6 w-6 text-teal-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Grounded in literature, not algorithms</h3>
            <p className="text-gray-600">
              Inspired by the wisdom of practicing bibliotherapists, our approach favours emotional nuance over generic
              recommendations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
