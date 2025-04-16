
export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 border-t border-blue-600">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-500">Shield Operations</h3>
            <p className="text-sm">
              A global resource for understanding the impacts of social media on national security and military operations.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-500">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:text-blue-500 transition-colors">Home</a></li>
              <li><a href="/about" className="hover:text-blue-500 transition-colors">About Us</a></li>
              <li><a href="/resources" className="hover:text-blue-500 transition-colors">Resources</a></li>
              <li><a href="/contact" className="hover:text-blue-500 transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-500">Disclaimer</h3>
            <p className="text-sm">
              This website is for educational purposes only. The content does not represent official government policy.
            </p>
          </div>
        </div>
        <div className="mt-8 pt-4 border-t border-gray-700 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Shield Operations. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
