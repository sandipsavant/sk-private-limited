import { useState } from "react";
import { Link } from "wouter";
import { ArrowRight, Clock, User, ChevronRight, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Layout } from "@/components/layout";

const categories = ["All", "Social Media", "SEO", "Web Design", "PPC", "Tips"];

const featuredPost = {
  title: "10 Social Media Trends That Will Dominate 2024",
  excerpt: "Stay ahead of the competition with these emerging social media trends that will shape digital marketing in the coming year. From AI-powered content to short-form video dominance.",
  author: "Sanjay Kulkarni",
  date: "Dec 5, 2024",
  readTime: "8 min read",
  category: "Social Media",
  image: "from-primary to-secondary",
};

const posts = [
  {
    title: "How to Create a Winning SEO Strategy in 2024",
    excerpt: "Learn the essential components of a modern SEO strategy that drives organic traffic and rankings.",
    author: "Vikram Singh",
    date: "Dec 3, 2024",
    readTime: "6 min read",
    category: "SEO",
    image: "from-blue-500 to-indigo-600",
  },
  {
    title: "The Complete Guide to Facebook Advertising",
    excerpt: "Master Facebook ads with our comprehensive guide covering targeting, creatives, and optimization.",
    author: "Anita Patel",
    date: "Nov 28, 2024",
    readTime: "10 min read",
    category: "PPC",
    image: "from-orange-500 to-red-600",
  },
  {
    title: "Web Design Best Practices for Conversions",
    excerpt: "Discover the design principles that turn visitors into customers and boost your conversion rate.",
    author: "Meera Sharma",
    date: "Nov 25, 2024",
    readTime: "7 min read",
    category: "Web Design",
    image: "from-purple-500 to-pink-600",
  },
  {
    title: "Building Brand Awareness on Instagram",
    excerpt: "Effective strategies to grow your brand presence and engage audiences on Instagram.",
    author: "Anita Patel",
    date: "Nov 20, 2024",
    readTime: "5 min read",
    category: "Social Media",
    image: "from-pink-500 to-rose-600",
  },
  {
    title: "Local SEO: A Complete Guide for Small Businesses",
    excerpt: "How to dominate local search results and attract more customers from your area.",
    author: "Vikram Singh",
    date: "Nov 15, 2024",
    readTime: "8 min read",
    category: "SEO",
    image: "from-green-500 to-teal-600",
  },
  {
    title: "5 Quick Tips to Improve Your Website Speed",
    excerpt: "Simple optimizations that can dramatically improve your website loading times.",
    author: "Meera Sharma",
    date: "Nov 10, 2024",
    readTime: "4 min read",
    category: "Tips",
    image: "from-cyan-500 to-blue-600",
  },
];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = posts.filter(post => {
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <Layout>
      <section className="relative py-20 overflow-hidden" data-testid="section-blog-hero">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6" data-testid="text-blog-title">
              Our <span className="text-gradient">Blog</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Insights, tips, and strategies to help you succeed in digital marketing. 
              Stay updated with the latest trends and best practices.
            </p>
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search articles..."
                className="pl-10 glass-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                data-testid="input-blog-search"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12" data-testid="section-blog-featured">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="glass-card overflow-visible" data-testid="card-featured-post">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className={`bg-gradient-to-br ${featuredPost.image} aspect-video lg:aspect-auto lg:min-h-[300px] rounded-t-md lg:rounded-l-md lg:rounded-tr-none flex items-center justify-center`}>
                <span className="text-6xl font-bold text-white/20">Featured</span>
              </div>
              <CardContent className="p-8 flex flex-col justify-center">
                <Badge variant="outline" className="w-fit mb-4">{featuredPost.category}</Badge>
                <h2 className="text-2xl font-bold mb-4">{featuredPost.title}</h2>
                <p className="text-muted-foreground mb-6">{featuredPost.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    {featuredPost.author}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    {featuredPost.readTime}
                  </div>
                  <span>{featuredPost.date}</span>
                </div>
                <Button className="w-fit gap-2" data-testid="button-read-featured">
                  Read Article
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      <section className="py-8" data-testid="section-blog-filter">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(category)}
                data-testid={`button-category-${category.toLowerCase().replace(" ", "-")}`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 pb-20" data-testid="section-blog-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No articles found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <Card key={index} className="glass-card hover-elevate transition-all duration-300 overflow-visible" data-testid={`card-post-${index}`}>
                  <div className={`aspect-video bg-gradient-to-br ${post.image} rounded-t-md flex items-center justify-center`}>
                    <span className="text-4xl font-bold text-white/20">{post.title.charAt(0)}</span>
                  </div>
                  <CardContent className="p-6">
                    <Badge variant="outline" className="mb-3">{post.category}</Badge>
                    <h3 className="text-lg font-semibold mb-2 line-clamp-2">{post.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <User className="h-3 w-3" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="gap-2" data-testid="button-load-more">
              Load More Articles
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary" data-testid="section-blog-newsletter">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Get the latest marketing tips and industry insights delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              data-testid="input-newsletter-email"
            />
            <Button variant="secondary" className="gap-2" data-testid="button-newsletter-subscribe">
              Subscribe
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
