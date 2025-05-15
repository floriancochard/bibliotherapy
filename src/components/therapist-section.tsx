import { Button } from "@/components/ui/button";
import { UserCircle, Share, FileText, BriefcaseMedical } from "lucide-react";
import Image from "next/image";

export default function TherapistSection() {
  return (
    <section id="therapists" className="py-16 bg-gray-50">
      <div className="px-12 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 px-4 sm:space-x-12 items-center">
          <div>
            <div className="inline-block mb-4">
              <span className="text-2xl">
                <BriefcaseMedical />
              </span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">For therapists</h2>
            <p className="text-xl text-gray-600 mb-6">Your digital book assistant</p>
            <p className="text-gray-600 mb-8">
              For mental health professionals, we offer tools to match your clients with fiction and nonfiction that
              support their journeys.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3">
                <UserCircle className="h-5 w-5 text-teal-600" />
                <span>Create pseudonymous client profiles.</span>
              </li>
              <li className="flex items-center gap-3">
                <Share className="h-5 w-5 text-teal-600" />
                <span>Assign curated reading plans.</span>
              </li>
              <li className="flex items-center gap-3">
                <FileText className="h-5 w-5 text-teal-600" />
                <span>Support reflective journaling.</span>
              </li>
            </ul>
            <p className="text-gray-600 italic mb-6">
              Coming soon: therapist notes, shared journaling, care team collaboration.
            </p>
            <Button className="bg-teal-600 hover:bg-teal-700">Join our early therapist program</Button>
          </div>
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-teal-100 rounded-full opacity-50"></div>
            <Image
              src="/placeholder.svg?height=400&width=500"
              alt="Therapist dashboard interface"
              className="rounded-lg shadow-lg relative z-10"
              width={500}
              height={400}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
