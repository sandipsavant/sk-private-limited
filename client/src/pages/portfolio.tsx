import { useState } from "react";
import { Link } from "wouter";
import { ArrowRight, ExternalLink, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Layout } from "@/components/layout";

const categories = ["All", "Social Media", "SEO", "Web Design", "PPC"];

const projects = [
  {
    title: "TechStart India",
    category: "Social Media",
    description: "Comprehensive social media strategy that increased engagement by 400% and generated 2000+ qualified leads.",
    results: ["400% Engagement Increase", "2000+ Leads", "150K Followers"],
    image: "from-blue-500 to-purple-600",
  },
  {
    title: "FashionHub E-commerce",
    category: "Web Design",
    description: "Complete website redesign with improved UX that boosted conversions by 85%.",
    results: ["85% More Conversions", "60% Faster Load", "Mobile-First"],
    image: "from-pink-500 to-rose-600",
  },
  {
    title: "HealthFirst Clinic",
    category: "SEO",
    description: "Local SEO campaign that helped the clinic rank #1 for 50+ keywords in their city.",
    results: ["#1 Rankings", "300% Traffic", "50+ Keywords"],
    image: "from-green-500 to-teal-600",
  },
  {
    title: "PropertyGuru",
    category: "PPC",
    description: "Google Ads campaign that reduced cost-per-lead by 60% while increasing quality leads.",
    results: ["60% Lower CPL", "5x ROAS", "200+ Leads/Month"],
    image: "from-orange-500 to-amber-600",
  },
  {
    title: "EduLearn Platform",
    category: "Web Design",
    description: "Modern e-learning platform with intuitive UI and seamless payment integration.",
    results: ["10K Students", "98% Satisfaction", "Award Winner"],
    image: "from-indigo-500 to-blue-600",
  },
  {
    title: "FoodDelight Restaurant",
    category: "Social Media",
    description: "Instagram marketing campaign that drove 500% increase in table reservations.",
    results: ["500% Reservations", "50K Followers", "Viral Campaign"],
    image: "from-red-500 to-orange-600",
  },
  {
    title: "LegalAdvice Pro",
    category: "SEO",
    description: "Nationwide SEO strategy targeting legal services keywords with outstanding results.",
    results: ["200% Organic Traffic", "Top 3 Rankings", "High Authority"],
    image: "from-slate-500 to-gray-600",
  },
  {
    title: "AutoDeal Motors",
    category: "PPC",
    description: "Multi-platform PPC campaign targeting car buyers with location-based targeting.",
    results: ["4x ROAS", "₹50L Revenue", "Premium Leads"],
    image: "from-cyan-500 to-blue-600",
  },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <Layout>
      <section className="relative py-20 overflow-hidden" data-testid="section-portfolio-hero">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6" data-testid="text-portfolio-title">
              Our <span className="text-gradient">Portfolio</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Explore our success stories. See how we've helped businesses like yours 
              achieve remarkable results through strategic digital marketing.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12" data-testid="section-portfolio-filter">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(category)}
                data-testid={`button-filter-${category.toLowerCase().replace(" ", "-")}`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 pb-20" data-testid="section-portfolio-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card
                key={index}
                className="glass-card group hover-elevate transition-all duration-300 overflow-visible"
                data-testid={`card-project-${index}`}
              >
                <div className={`aspect-video bg-gradient-to-br ${project.image} rounded-t-md flex items-center justify-center relative`}>
                  <div className="text-white/80 font-bold text-2xl">{project.title.charAt(0)}</div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-white/20 text-white border-none">
                      {project.category}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                    {project.title}
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.results.map((result, resultIndex) => (
                      <Badge key={resultIndex} variant="outline" className="text-xs">
                        {result}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-card" data-testid="section-portfolio-stats">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-gradient mb-2">500+</div>
              <div className="text-muted-foreground">Projects Delivered</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gradient mb-2">200+</div>
              <div className="text-muted-foreground">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gradient mb-2">25+</div>
              <div className="text-muted-foreground">Awards Won</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-gradient mb-2">15+</div>
              <div className="text-muted-foreground">Industries Served</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary" data-testid="section-portfolio-cta">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">
            Want Similar Results?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help your business achieve remarkable growth.
          </p>
          <Link href="/contact">
            <Button variant="secondary" size="lg" className="gap-2" data-testid="button-portfolio-contact">
              Start Your Project
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
