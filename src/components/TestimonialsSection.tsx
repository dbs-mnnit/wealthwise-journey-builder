
import { Card, CardContent } from "@/components/ui/card";
import { Star } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "Denver, CO",
      age: 28,
      occupation: "Marketing Manager",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b1-5?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "WealthWise completely changed how I think about money. I paid off $18,000 in credit card debt in 14 months using their debt snowball calculator. The community support was incredible!",
      achievement: "Paid off $18K debt",
      timeframe: "14 months"
    },
    {
      id: 2,
      name: "Michael Chen",
      location: "Austin, TX",
      age: 35,
      occupation: "Software Engineer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "As someone who was terrified of investing, the investment simulator gave me the confidence to start. I'm now contributing 15% to my 401k and have a growing Roth IRA.",
      achievement: "Started investing confidently",
      timeframe: "6 months"
    },
    {
      id: 3,
      name: "Jessica Martinez",
      location: "Phoenix, AZ",
      age: 31,
      occupation: "Teacher",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "The budget planner is a game-changer. I went from living paycheck to paycheck to saving $500 every month. Finally have my 6-month emergency fund!",
      achievement: "Built emergency fund",
      timeframe: "8 months"
    },
    {
      id: 4,
      name: "David Thompson",
      location: "Seattle, WA",
      age: 42,
      occupation: "Sales Director",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "WealthWise helped me optimize my retirement planning. I increased my savings rate by 8% and I'm now on track to retire comfortably by 60.",
      achievement: "Optimized retirement plan",
      timeframe: "1 year"
    },
    {
      id: 5,
      name: "Amanda Wilson",
      location: "Miami, FL",
      age: 26,
      occupation: "Nurse",
      image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Started as a complete beginner with the free content. The Elite plan's personalized guidance helped me create a 5-year financial roadmap. Worth every penny!",
      achievement: "Created financial roadmap",
      timeframe: "4 months"
    },
    {
      id: 6,
      name: "Robert Garcia",
      location: "Chicago, IL",
      age: 38,
      occupation: "Manufacturing Supervisor",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "The side hustle articles and community gave me ideas to start freelance consulting. Made an extra $15,000 last year while paying down my mortgage faster.",
      achievement: "Extra $15K income",
      timeframe: "12 months"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-navy-900 mb-4">
            Real People, Real Results
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of Americans who've transformed their financial lives with WealthWise
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16 text-center">
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <div className="text-3xl font-bold text-green-600 mb-2">$2.1M+</div>
            <div className="text-gray-700">Total Debt Eliminated</div>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <div className="text-3xl font-bold text-blue-600 mb-2">15,000+</div>
            <div className="text-gray-700">Lives Changed</div>
          </div>
          <div className="bg-gold-50 border border-gold-200 rounded-lg p-6">
            <div className="text-3xl font-bold text-gold-600 mb-2">4.8/5</div>
            <div className="text-gray-700">Average Rating</div>
          </div>
          <div className="bg-navy-50 border border-navy-200 rounded-lg p-6">
            <div className="text-3xl font-bold text-navy-600 mb-2">88%</div>
            <div className="text-gray-700">Success Rate</div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-gold-500 fill-current" size={16} />
                  ))}
                </div>
                
                {/* Testimonial Text */}
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                
                {/* Achievement Badge */}
                <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-4">
                  <div className="text-sm font-semibold text-green-800">
                    ✅ {testimonial.achievement}
                  </div>
                  <div className="text-xs text-green-600">
                    in {testimonial.timeframe}
                  </div>
                </div>
                
                {/* User Info */}
                <div className="flex items-center space-x-3">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-navy-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.occupation}</div>
                    <div className="text-xs text-gray-500">{testimonial.location}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
