import Link from "next/link";
import { Facebook, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">BiblioTherapy</h3>
            <p className="text-sm text-gray-500">Discover books that match your mood and help you process emotions.</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-3">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-gray-500 hover:text-gray-900">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-500 hover:text-gray-900">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-500 hover:text-gray-900">
                  For Therapists
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-3">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-gray-500 hover:text-gray-900">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-500 hover:text-gray-900">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-500 hover:text-gray-900">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-3">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-gray-500 hover:text-gray-900">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-500 hover:text-gray-900">
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center mt-12 pt-8 border-t">
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} BiblioTherapy. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="#" className="text-gray-400 hover:text-gray-500">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="text-gray-400 hover:text-gray-500">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="text-gray-400 hover:text-gray-500">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
