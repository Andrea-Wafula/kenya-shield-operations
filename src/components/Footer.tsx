
export function Footer() {
  return (
    <footer className="bg-kenya-black text-kenya-white py-6 border-t border-kenya-red">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-kenya-green">Kenya Shield Operations</h3>
            <p className="text-sm">
              A resource for understanding the impacts of social media on national security and military operations.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-kenya-green">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:text-kenya-green transition-colors">Home</a></li>
              <li><a href="/about" className="hover:text-kenya-green transition-colors">About Us</a></li>
              <li><a href="/resources" className="hover:text-kenya-green transition-colors">Resources</a></li>
              <li><a href="/contact" className="hover:text-kenya-green transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-kenya-green">Disclaimer</h3>
            <p className="text-sm">
              This website is for educational purposes only. The content does not represent official government policy.
            </p>
          </div>
        </div>
        <div className="mt-8 pt-4 border-t border-gray-700 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Kenya Shield Operations. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
