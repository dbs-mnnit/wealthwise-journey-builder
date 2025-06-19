
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Check, Star } from 'lucide-react';

const PricingSection = () => {
  const plans = [
    {
      name: "Basic",
      price: 9,
      description: "Perfect for getting started with financial basics",
      features: [
        "Full blog access (100+ articles)",
        "Basic budget planner",
        "Financial health quiz",
        "Monthly newsletter",
        "Community forum access",
        "Email support"
      ],
      isPopular: false,
      ctaText: "Start Basic Plan"
    },
    {
      name: "Pro",
      price: 29,
      description: "Everything you need to master your finances",
      features: [
        "Everything in Basic",
        "Video tutorials library (20+ videos)",
        "Downloadable e-books & guides",
        "Advanced budget planner with exports",
        "Debt payoff calculator",
        "Monthly live Q&A webinars",
        "Priority email support"
      ],
      isPopular: true,
      ctaText: "Start Pro Plan"
    },
    {
      name: "Elite",
      price: 49,
      description: "Complete financial mastery with personalized guidance",
      features: [
        "Everything in Pro",
        "Investment simulator & portfolio tools",
        "Personalized goal-setting guide",
        "Exclusive monthly webinars",
        "1-on-1 expert consultations",
        "Early access to new content",
        "Priority support (24hr response)"
      ],
      isPopular: false,
      ctaText: "Start Elite Plan"
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-navy-900 mb-4">
            Choose Your Path to Financial Freedom
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Start with a 7-day free trial. No credit card required. Cancel anytime.
          </p>
          
          {/* Money-back guarantee */}
          <div className="inline-flex items-center space-x-2 bg-green-50 border border-green-200 rounded-full px-4 py-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-green-700 font-medium">30-day money-back guarantee</span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan) => (
            <Card 
              key={plan.name} 
              className={`relative overflow-hidden transition-all duration-300 hover:shadow-xl ${
                plan.isPopular ? 'border-2 border-gold-500 scale-105' : 'hover:scale-105'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-gold-500 text-white px-6 py-2 rounded-b-lg">
                  <div className="flex items-center space-x-1">
                    <Star size={16} className="fill-current" />
                    <span className="font-semibold">Most Popular</span>
                  </div>
                </div>
              )}
              
              <CardHeader className={`text-center ${plan.isPopular ? 'pt-12' : 'pt-8'}`}>
                <h3 className="text-2xl font-bold text-navy-900 mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-5xl font-bold text-navy-900">${plan.price}</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <p className="text-gray-600">{plan.description}</p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <Check className="text-green-500 flex-shrink-0 mt-0.5" size={18} />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  size="lg"
                  className={`w-full ${
                    plan.isPopular 
                      ? 'bg-gold-500 hover:bg-gold-600 text-white' 
                      : 'bg-navy-900 hover:bg-navy-800 text-white'
                  }`}
                >
                  {plan.ctaText}
                </Button>
                
                <p className="text-center text-sm text-gray-500">
                  7-day free trial included
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-2xl p-8 lg:p-12">
          <h3 className="text-2xl font-bold text-navy-900 text-center mb-8">
            Frequently Asked Questions
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-navy-900 mb-2">
                  What's included in the free trial?
                </h4>
                <p className="text-gray-600">
                  Full access to all features in your chosen plan for 7 days. No credit card required to start.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-navy-900 mb-2">
                  Can I change plans anytime?
                </h4>
                <p className="text-gray-600">
                  Yes! Upgrade or downgrade your plan at any time. Changes take effect immediately.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-navy-900 mb-2">
                  What if I'm not satisfied?
                </h4>
                <p className="text-gray-600">
                  We offer a 30-day money-back guarantee. If you're not happy, we'll refund you completely.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-navy-900 mb-2">
                  Do you offer student discounts?
                </h4>
                <p className="text-gray-600">
                  Yes! Students get 50% off any plan with valid student ID verification.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-navy-900 mb-2">
                  Is my financial data secure?
                </h4>
                <p className="text-gray-600">
                  Absolutely. We use bank-level encryption and never store sensitive financial account information.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-navy-900 mb-2">
                  How do I cancel my subscription?
                </h4>
                <p className="text-gray-600">
                  Cancel anytime from your account settings. No cancellation fees or hidden charges.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Proof */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">Join thousands who've transformed their finances</p>
          <div className="flex justify-center items-center space-x-8 text-sm text-gray-500">
            <div className="flex items-center space-x-2">
              <div className="flex -space-x-1">
                {[1,2,3,4,5].map((i) => (
                  <div key={i} className="w-8 h-8 bg-gray-300 rounded-full border-2 border-white"></div>
                ))}
              </div>
              <span>15,000+ members</span>
            </div>
            <div>★★★★★ 4.8/5 rating</div>
            <div>$2.1M+ debt paid off</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
