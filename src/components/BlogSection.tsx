
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Calendar, User, ArrowRight } from 'lucide-react';

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: "7 Budgeting Tips That Actually Work for Real People",
      excerpt: "Stop struggling with budgets that don't fit your lifestyle. These proven strategies help you save money without feeling deprived.",
      author: "Sarah Johnson, CFP",
      date: "June 15, 2025",
      category: "Budgeting",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop",
      isPremium: false
    },
    {
      id: 2,
      title: "Investing $500: Where to Start When You're Broke",
      excerpt: "You don't need thousands to start investing. Learn how to begin building wealth with just $500 and a smartphone.",
      author: "Michael Chen, CFA",
      date: "June 12, 2025",
      category: "Investing",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=250&fit=crop",
      isPremium: false
    },
    {
      id: 3,
      title: "Debt Snowball vs. Avalanche: Which Method Saves More Money?",
      excerpt: "We crunched the numbers on both popular debt repayment strategies. The results might surprise you.",
      author: "Emily Rodriguez, CFP",
      date: "June 10, 2025",
      category: "Debt Management",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1554224154-26032fced405?w=400&h=250&fit=crop",
      isPremium: true
    },
    {
      id: 4,
      title: "How I Saved $10,000 in One Year (On a $45K Salary)",
      excerpt: "Real strategies from a real person who built an emergency fund from scratch. No trust fund required.",
      author: "David Kim",
      date: "June 8, 2025",
      category: "Saving",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=400&h=250&fit=crop",
      isPremium: false
    },
    {
      id: 5,
      title: "The 401(k) Mistakes That Cost You Thousands",
      excerpt: "Avoid these common retirement planning errors that could derail your financial future.",
      author: "Jennifer Lopez, CFP",
      date: "June 5, 2025",
      category: "Retirement",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=400&h=250&fit=crop",
      isPremium: true
    },
    {
      id: 6,
      title: "Side Hustles That Actually Pay: 2025 Edition",
      excerpt: "Forget MLMs and surveys. These legitimate side hustles can add $500-2000 to your monthly income.",
      author: "Alex Thompson",
      date: "June 3, 2025",
      category: "Income",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
      isPremium: true
    }
  ];

  const categories = ["All", "Budgeting", "Investing", "Debt Management", "Saving", "Retirement", "Income"];

  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-navy-900 mb-4">
            Financial Wisdom That Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            No fluff, no complex jargon. Just practical advice from certified financial experts 
            who understand real-world money challenges.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === "All" ? "default" : "outline"}
              className={category === "All" ? "bg-navy-900 hover:bg-navy-800" : "hover:bg-navy-50"}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                {post.isPremium && (
                  <div className="absolute top-3 right-3 bg-gold-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    Premium
                  </div>
                )}
                <div className="absolute bottom-3 left-3 bg-white px-2 py-1 rounded text-xs font-medium text-navy-900">
                  {post.category}
                </div>
              </div>
              
              <CardHeader className="pb-3">
                <h3 className="text-xl font-bold text-navy-900 leading-tight line-clamp-2">
                  {post.title}
                </h3>
              </CardHeader>
              
              <CardContent className="pt-0">
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <User size={14} />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar size={14} />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <span className="font-medium">{post.readTime}</span>
                </div>
              </CardContent>
              
              <CardFooter className="pt-0">
                <Button 
                  variant="outline" 
                  className="w-full group hover:bg-navy-900 hover:text-white"
                >
                  Read Article
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-gray-600 mb-6">
            Get access to our complete library of 100+ articles, videos, and guides
          </p>
          <Button size="lg" className="bg-gold-500 hover:bg-gold-600 text-white px-8">
            Start Free Trial - Full Access
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
