
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="bg-kenya-black text-kenya-white py-4 border-b border-kenya-red">
      <div className="container flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-kenya-green rounded-full flex items-center justify-center border-2 border-kenya-white">
            <span className="font-bold">KS</span>
          </div>
          <h1 className="text-2xl font-bold">Kenya Shield Operations</h1>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li><Link to="/" className="hover:text-kenya-green transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-kenya-green transition-colors">About</Link></li>
            <li><Link to="/resources" className="hover:text-kenya-green transition-colors">Resources</Link></li>
            <li><Link to="/technical-framework" className="hover:text-kenya-green transition-colors">Technical</Link></li>
            <li><Link to="/contact" className="hover:text-kenya-green transition-colors">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
