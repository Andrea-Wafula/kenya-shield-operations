
import { Shield, Globe, UserCheck, Lock } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: <Shield className="h-10 w-10 text-green-600" />,
    title: "Operational Security",
    description: "Frameworks for protecting sensitive military operations from social media exposure."
  },
  {
    icon: <Globe className="h-10 w-10 text-red-600" />,
    title: "Digital Intelligence",
    description: "Understanding social media trends and their potential impact on national security."
  },
  {
    icon: <UserCheck className="h-10 w-10 text-green-600" />,
    title: "Personnel Training",
    description: "Education for military personnel on responsible social media usage and awareness."
  },
  {
    icon: <Lock className="h-10 w-10 text-red-600" />,
    title: "Policy Development",
    description: "Guidelines for creating effective policies that balance security and information freedom."
  }
];

export function Features() {
  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Focus Areas</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We address key challenges in maintaining operational security while respecting the role of media and information in a democratic society.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-6 transition-all hover:shadow-md hover:border-green-500">
              <div className="mb-4 inline-block p-3 bg-gray-100 rounded-full">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <Link to="/technical-framework">
            <button className="bg-gray-900 text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-colors inline-flex items-center gap-2">
              Explore Technical Framework
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
