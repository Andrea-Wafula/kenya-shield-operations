
import { Button } from "./ui/button";

export function Hero() {
  return (
    <section className="py-12 md:py-24 bg-gradient-to-b from-kenya-black via-gray-900 to-kenya-black text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('https://i.imgur.com/MfGW3Jt.png')] bg-repeat opacity-5"></div>
      </div>
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block mb-6">
            <div className="flex items-center justify-center space-x-2 bg-kenya-green/10 rounded-full px-4 py-1 border border-kenya-green/30">
              <span className="h-2 w-2 rounded-full bg-kenya-green"></span>
              <span className="text-kenya-green text-sm font-medium">National Security Initiative</span>
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Protecting <span className="text-kenya-green">Military Operations</span> in the Digital Age
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Addressing the critical challenges of social media interference in Kenya's national security operations
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-kenya-green hover:bg-kenya-green/90 text-white">
              Learn More
            </Button>
            <Button size="lg" variant="outline" className="border-kenya-white text-kenya-white hover:bg-white/10">
              View Resources
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
