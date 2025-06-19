
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-2xl font-bold">
                Wealth<span className="text-gold-400">Wise</span>
              </h3>
              <p className="text-gray-300 mt-2">
                Empowering Americans to achieve financial wisdom and freedom through expert guidance and proven strategies.
              </p>
            </div>
            
            <div className="space-y-2 text-sm text-gray-300">
              <p>📧 hello@wealthwise.com</p>
              <p>📞 (555) 123-WISE</p>
              <p>🏢 Austin, Texas</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                "Home",
                "Blog",
                "Tools",
                "Pricing",
                "Community",
                "About Us"
              ].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-300 hover:text-gold-400 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Resources</h4>
            <ul className="space-y-2">
              {[
                "Financial Calculator",
                "Budget Templates",
                "Investment Guide",
                "Debt Payoff Plans",
                "Retirement Planning",
                "Tax Strategies"
              ].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-300 hover:text-gold-400 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Stay Updated</h4>
            <p className="text-gray-300 mb-4 text-sm">
              Get weekly financial tips and exclusive content delivered to your inbox.
            </p>
            
            <div className="space-y-3">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="w-full p-3 rounded-lg bg-navy-800 border border-navy-600 text-white placeholder-gray-400 focus:outline-none focus:border-gold-400"
              />
              <Button className="w-full bg-gold-500 hover:bg-gold-600 text-white">
                Subscribe Free
              </Button>
            </div>
            
            <p className="text-xs text-gray-400 mt-2">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-navy-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © {currentYear} WealthWise. All rights reserved.
            </div>
            
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-gold-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-gold-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-gold-400 transition-colors">Cookie Policy</a>
              <a href="#" className="hover:text-gold-400 transition-colors">Contact</a>
            </div>
            
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.017 0H7.983C3.566 0 0 3.566 0 7.983v4.034C0 16.434 3.566 20 7.983 20h4.034C16.434 20 20 16.434 20 12.017V7.983C20 3.566 16.434 0 12.017 0zm3.144 12.017a3.144 3.144 0 01-3.144 3.144H7.983a3.144 3.144 0 01-3.144-3.144V7.983a3.144 3.144 0 013.144-3.144h4.034a3.144 3.144 0 013.144 3.144v4.034z" clipRule="evenodd" />
                  <path fillRule="evenodd" d="M10 5.838a4.162 4.162 0 100 8.324 4.162 4.162 0 000-8.324zm0 6.857a2.695 2.695 0 110-5.39 2.695 2.695 0 010 5.39z" clipRule="evenodd" />
                  <circle cx="14.161" cy="5.839" r="1" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors">
                <span className="sr-only">YouTube</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.432 3.5c.956 0 1.568.644 1.568 1.573v9.854c0 .929-.612 1.573-1.568 1.573H3.568C2.612 16.5 2 15.856 2 14.927V5.073C2 4.144 2.612 3.5 3.568 3.5h12.864zm-4.781 5.647l-3.89-2.315a.5.5 0 00-.761.432v4.63a.5.5 0 00.761.432l3.89-2.315a.5.5 0 000-.864z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
