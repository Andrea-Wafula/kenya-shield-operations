
import { Button } from "./ui/button";

export function CallToAction() {
  return (
    <section className="py-20 bg-gray-800 text-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Efforts to Protect National Security</h2>
          <p className="text-xl mb-8">
            Access our educational resources, training materials, and expert guidance on managing the intersection of social media and military operations.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              Download Resources
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Request Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
