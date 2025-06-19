
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Calculator, DollarSign, TrendingUp, CheckCircle } from 'lucide-react';

const ToolsSection = () => {
  const tools = [
    {
      id: 1,
      title: "Smart Budget Planner",
      description: "Create a budget that actually works for your lifestyle. Track spending, set goals, and watch your savings grow.",
      icon: Calculator,
      features: ["Custom categories", "Goal tracking", "Spending alerts", "Monthly reports"],
      tier: "Free",
      color: "bg-blue-500",
      isPopular: false
    },
    {
      id: 2,
      title: "Debt Payoff Calculator",
      description: "See exactly when you'll be debt-free. Compare snowball vs avalanche methods and create your action plan.",
      icon: DollarSign,
      features: ["Multiple strategies", "Payment timelines", "Interest savings", "Progress tracking"],
      tier: "Pro ($29)",
      color: "bg-red-500",
      isPopular: true
    },
    {
      id: 3,
      title: "Investment Simulator",
      description: "Model your investment growth and see the power of compound interest. Plan for retirement with confidence.",
      icon: TrendingUp,
      features: ["Multiple scenarios", "Risk analysis", "Retirement planning", "Export reports"],
      tier: "Elite ($49)",
      color: "bg-green-500",
      isPopular: false
    }
  ];

  return (
    <section id="tools" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-navy-900 mb-4">
            Powerful Tools for Financial Success
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stop guessing about your finances. Our interactive tools give you clear answers 
            and actionable plans to reach your money goals faster.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {tools.map((tool) => {
            const IconComponent = tool.icon;
            return (
              <Card key={tool.id} className={`relative overflow-hidden hover:shadow-lg transition-all duration-300 ${tool.isPopular ? 'border-2 border-gold-500' : ''}`}>
                {tool.isPopular && (
                  <div className="absolute top-0 right-0 bg-gold-500 text-white px-3 py-1 text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`${tool.color} p-3 rounded-lg`}>
                      <IconComponent className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-navy-900">{tool.title}</h3>
                      <span className="text-sm font-medium text-gray-500">{tool.tier}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {tool.description}
                  </p>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="space-y-3 mb-6">
                    {tool.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="text-green-500 flex-shrink-0" size={16} />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    className={`w-full ${tool.tier === 'Free' ? 'bg-navy-900 hover:bg-navy-800' : 'bg-gold-500 hover:bg-gold-600'} text-white`}
                  >
                    {tool.tier === 'Free' ? 'Try Now' : 'Start Free Trial'}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Interactive Demo Section */}
        <div className="bg-gradient-to-r from-navy-900 to-navy-800 rounded-2xl p-8 lg:p-12 text-white">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">
                See Your Tools in Action
              </h3>
              <p className="text-xl text-gray-300 mb-6">
                Take our free Financial Health Quiz to see which tools will help you most. 
                Get personalized recommendations based on your unique situation.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  "10-question assessment",
                  "Instant personalized results", 
                  "Custom action plan",
                  "Tool recommendations"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="text-gold-400 flex-shrink-0" size={18} />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <Button size="lg" className="bg-gold-500 hover:bg-gold-600 text-white px-8">
                Take Free Quiz
              </Button>
            </div>
            
            <div className="bg-white rounded-xl p-6 text-gray-900">
              <h4 className="text-lg font-bold mb-4 text-center">Quick Budget Check</h4>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Monthly Income</label>
                  <input 
                    type="number" 
                    placeholder="5000"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Monthly Expenses</label>
                  <input 
                    type="number" 
                    placeholder="3500"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-500 focus:border-transparent"
                  />
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">$1,500</div>
                    <div className="text-sm text-green-700">Available for savings</div>
                  </div>
                </div>
                <Button className="w-full bg-navy-900 hover:bg-navy-800">
                  Get Full Budget Plan
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
