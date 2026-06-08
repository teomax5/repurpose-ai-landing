import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t mt-20">
      <div className="max-w-6xl mx-auto px-6 py-8">

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-gray-600">
            © 2026 Repurpose AI
          </p>

          <div className="flex gap-6">

            <Link
              href="/privacy"
              className="text-gray-600 hover:text-black"
            >
              Privacy Policy
            </Link>

            <Link
              href="/contact"
              className="text-gray-600 hover:text-black"
            >
              Contact
            </Link>

          </div>

        </div>

        <p className="text-center text-sm text-gray-500 mt-6">
          avinashofficial87@gmail.com
        </p>

      </div>
    </footer>
  );
}