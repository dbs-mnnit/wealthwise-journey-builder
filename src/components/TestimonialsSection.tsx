
import { Card, CardContent } from "@/components/ui/card";
import { Star } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Martinez",
      role: "Teacher, Austin TX",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face",
      content: "WealthWise helped me pay off $15,000 in credit card debt in just 18 months. The debt calculator was a game-changer - I could finally see the light at the end of the tunnel!",
      achievement: "Paid off $15K debt",
      rating: 5
    },
    {
      id: 2,
      name: "Marcus Johnson",
      role: "Software Developer, Seattle WA",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
      content: "I went from having $200 in savings to building a 6-month emergency fund. The budget planner made it so simple to track where my money was going.",
      achievement: "Built 6-month emergency fund",
      rating: 5
    },
    {
      id: 3,
      name: "Jennifer Chen",
      role: "Nurse, Phoenix AZ",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
      content: "Finally started investing at 28 thanks to WealthWise! The investment simulator helped me understand compound interest. I wish I'd found this sooner.",
      achievement: "Started investing confidently",
      rating: 5
    },
    {
      id: 4,
      name: "David Rodriguez",
      role: "Small Business Owner, Miami FL",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
      content: "The retirement planning tools showed me I was way behind. Now I'm on track to retire comfortably at 65 instead of working until 70. Worth every penny!",
      achievement: "On track for retirement at 65",
      rating: 5
    },
    {
      id: 5,
      name: "Amanda Taylor",
      role: "Marketing Manager, Denver CO",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop&crop=face",
      content: "Increased my savings rate from 5% to 25% in one year. The community forum kept me motivated, and the monthly webinars answered all my questions.",
      achievement: "25% savings rate achieved",
      rating: 5
    },
    {
      id: 6,
      name: "Robert Kim",
      role: "Engineer, San Francisco CA",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face",
      content: "Bought my first house at 30 using strategies I learned here. The savings goals feature helped me stay disciplined with my down payment fund.",
      achievement: "Bought first home at 30",
      rating: 5
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
            See how WealthWise members have transformed their financial lives with our proven strategies and tools.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="h-full hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 h-full flex flex-col">
                {/* Rating */}
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-gold-400 text-gold-400" />
                  ))}
                </div>
                
                {/* Content */}
                <blockquote className="text-gray-700 mb-6 flex-grow">
                  "{testimonial.content}"
                </blockquote>
                
                {/* Achievement Badge */}
                <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-4">
                  <div className="text-center">
                    <div className="text-sm font-semibold text-green-800">Success Story</div>
                    <div className="text-xs text-green-600">{testimonial.achievement}</div>
                  </div>
                </div>
                
                {/* Author */}
                <div className="flex items-center space-x-3">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-navy-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-navy-900 to-navy-800 rounded-2xl p-8 lg:p-12 text-white">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">The Results Speak for Themselves</h3>
            <p className="text-xl text-gray-300">Based on surveys of 5,000+ WealthWise members</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-gold-400 mb-2">87%</div>
              <div className="text-gray-300">Improved their credit score</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gold-400 mb-2">$2.1M</div>
              <div className="text-gray-300">Total debt eliminated</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gold-400 mb-2">92%</div>
              <div className="text-gray-300">Built emergency funds</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gold-400 mb-2">78%</div>
              <div className="text-gray-300">Started investing regularly</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
