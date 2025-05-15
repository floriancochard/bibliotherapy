import { BookOpen } from "lucide-react";

export default function WhatIsBibliography() {
  return (
    <section className="py-16 bg-teal-50">
      <div className="px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-8">
          <div className="h-12 w-12 rounded-full bg-teal-100 flex items-center justify-center mb-4">
            <BookOpen className="h-6 w-6 text-teal-600" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">What is BiblioTherapy?</h2>
        </div>
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <p className="text-lg text-gray-700 leading-relaxed">
            For centuries, people have turned to books not just for entertainment, but for meaning, healing, and hope.
            Bibliotherapy is the practice of using books as medicine—for grief, anxiety, burnout, life transitions, or
            simply to reconnect with yourself.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Whether you need comfort, clarity, or pure escapism, we help you find the story that meets you where you
            are.
          </p>
        </div>
      </div>
    </section>
  );
}
