import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur px-4 md:px-6">
      <div className="flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-xl font-semibold">BiblioTherapy</span>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#how-it-works" className="text-sm font-medium text-gray-600 hover:text-gray-900">
            How It Works
          </Link>
          <Link href="#features" className="text-sm font-medium text-gray-600 hover:text-gray-900">
            Why It Works
          </Link>
          <Link href="#therapists" className="text-sm font-medium text-gray-600 hover:text-gray-900">
            For Therapists
          </Link>
          <Link href="#pricing" className="text-sm font-medium text-gray-600 hover:text-gray-900">
            Pricing
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm" className="hidden md:flex">
            Log in
          </Button>
          <Button size="sm" className="bg-teal-600 hover:bg-teal-700">
            Start free
          </Button>
        </div>
      </div>
    </header>
  );
}
