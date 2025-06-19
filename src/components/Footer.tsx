
import { Button } from "@/components/ui/button";
import { Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: "About Us", href: "#about" },
      { name: "Our Mission", href: "#mission" },
      { name: "Success Stories", href: "#testimonials" },
      { name: "Careers", href: "#careers" },
      { name: "Press", href: "#press" }
    ],
    resources: [
      { name: "Blog", href: "#blog" },
      { name: "Tools", href: "#tools" },
      { name: "Free Quiz", href: "#quiz" },
      { name: "Calculators", href: "#calculators" },
      { name: "E-books", href: "#ebooks" }
    ],
    support: [
      { name: "Help Center", href: "#help" },
      { name: "Contact Us", href: "#contact" },
      { name: "Community Forum", href: "#community" },
      { name: "Live Chat", href: "#chat" },
      { name: "Webinars", href: "#webinars" }
    ],
    legal: [
      { name: "Privacy Policy", href: "#privacy" },
      { name: "Terms of Service", href: "#terms" },
      { name: "Cookie Policy", href: "#cookies" },
      { name: "Refund Policy", href: "#refunds" },
      { name: "Security", href: "#security" }
    ]
  };

  return (
    <footer className="bg-navy-900 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-navy-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-2">Stay Financially Informed</h3>
              <p className="text-gray-300">
                Get weekly financial tips, market insights, and exclusive content delivered to your inbox.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-white text-gray-900 rounded-lg focus:ring-2 focus:ring-gold-500 focus:outline-none"
              />
              <Button className="bg-gold-500 hover:bg-gold-600 text-white px-6 py-3">
                <Mail size={18} className="mr-2" />
                Subscribe Free
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-1">
            <div className="mb-6">
              <h2 className="text-2xl font-bold">
                Wealth<span className="text-gold-400">Wise</span>
              </h2>
              <p className="text-gray-300 mt-3">
                Empowering Americans to achieve financial freedom through education, tools, and community.
              </p>
            </div>
            
            {/* Trust Badges */}
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-sm text-gray-300">256-bit SSL Security</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-sm text-gray-300">50,000+ Trusted Members</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-sm text-gray-300">30-Day Money Back</span>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-300 hover:text-gold-400 transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-300 hover:text-gold-400 transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-300 hover:text-gold-400 transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-300 hover:text-gold-400 transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-navy-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © {currentYear} WealthWise. All rights reserved. | Financial education for everyone.
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>🇺🇸 Proudly serving Americans</span>
              <span>⭐ 4.8/5 rating</span>
              <span>🔒 Secure & Private</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
