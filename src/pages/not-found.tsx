import { Link } from "wouter";
import { AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center p-4 text-center">
      <AlertCircle className="w-16 h-16 text-gray-300 mb-6" />
      <h1 className="font-display text-4xl md:text-6xl font-bold mb-4">404</h1>
      <h2 className="text-2xl font-medium text-gray-800 mb-4">Page Not Found</h2>
      <p className="text-gray-600 max-w-md mb-8">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link href="/">
        <Button>Return Home</Button>
      </Link>
    </div>
  );
}
