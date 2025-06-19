
import { Button } from "@/components/ui/button";
import { CheckCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Master Your Money,
                <span className="text-gold-400 block">Build Your Wealth</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed">
                Join thousands of Americans who've transformed their financial future with WealthWise. 
                Get expert guidance, powerful tools, and a supportive community—all in one place.
              </p>
            </div>

            {/* Benefits */}
            <div className="space-y-3">
              {[
                "Learn budgeting that actually works",
                "Pay off debt faster with proven strategies", 
                "Start investing with confidence",
                "Plan for retirement without stress"
              ].map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="text-gold-400 flex-shrink-0" size={20} />
                  <span className="text-lg">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
              <Button 
                size="lg" 
                className="bg-gold-500 hover:bg-gold-600 text-white px-8 py-4 text-lg font-semibold"
              >
                Start 7-Day Free Trial
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-navy-900 px-8 py-4 text-lg font-semibold"
              >
                Take Free Quiz
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-8 border-t border-navy-700">
              <p className="text-sm text-gray-400 mb-4">Trusted by over 50,000+ Americans</p>
              <div className="flex items-center space-x-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gold-400">4.8/5</div>
                  <div className="text-sm text-gray-400">User Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gold-400">$2.1M</div>
                  <div className="text-sm text-gray-400">Debt Paid Off</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gold-400">15K+</div>
                  <div className="text-sm text-gray-400">Lives Changed</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Image/Visual */}
          <div className="relative">
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-navy-900 mb-2">Your Financial Health</h3>
                  <p className="text-gray-600">See where you stand today</p>
                </div>
                
                {/* Mock Financial Dashboard */}
                <div className="space-y-4">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <div className="flex justify-between items-center">
                      <span className="text-green-800 font-semibold">Emergency Fund</span>
                      <span className="text-green-600 font-bold">85%</span>
                    </div>
                    <div className="w-full bg-green-200 rounded-full h-2 mt-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{width: '85%'}}></div>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <div className="flex justify-between items-center">
                      <span className="text-blue-800 font-semibold">Retirement Savings</span>
                      <span className="text-blue-600 font-bold">62%</span>
                    </div>
                    <div className="w-full bg-blue-200 rounded-full h-2 mt-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{width: '62%'}}></div>
                    </div>
                  </div>
                  
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <div className="flex justify-between items-center">
                      <span className="text-yellow-800 font-semibold">Debt Payoff</span>
                      <span className="text-yellow-600 font-bold">43%</span>
                    </div>
                    <div className="w-full bg-yellow-200 rounded-full h-2 mt-2">
                      <div className="bg-yellow-500 h-2 rounded-full" style={{width: '43%'}}></div>
                    </div>
                  </div>
                </div>
                
                <Button className="w-full bg-navy-900 hover:bg-navy-800 text-white">
                  Get Your Free Assessment
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
