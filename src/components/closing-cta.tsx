import { Button } from "@/components/ui/button";

export default function ClosingCTA() {
  return (
    <section className="py-16 bg-teal-600 text-white">
      <div className="px-4 md:px-6">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-8">
          <div className="space-y-4">
            <p className="text-xl">
              You don&nbsp;t need to have the answers. Sometimes, the right story will show you the way. Let us help you
              find it.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Button className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-6 text-lg rounded-md">
              <span className="mr-2">👉</span> Start Free
            </Button>
            <Button
              variant="default"
              className="border-white text-white hover:bg-teal-700 px-8 py-6 text-lg rounded-md"
            >
              Book a therapist demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
