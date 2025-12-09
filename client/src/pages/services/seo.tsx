import { Link } from "wouter";
import { ArrowRight, CheckCircle, Search, TrendingUp, Globe, FileText, Link2, BarChart3, Settings, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Layout } from "@/components/layout";

const features = [
  {
    icon: Search,
    title: "Keyword Research",
    description: "Identify high-value keywords that your target audience is searching for.",
  },
  {
    icon: Settings,
    title: "Technical SEO",
    description: "Optimize your website's technical foundation for better crawling and indexing.",
  },
  {
    icon: FileText,
    title: "Content Optimization",
    description: "Create and optimize content that ranks well and engages your audience.",
  },
  {
    icon: Link2,
    title: "Link Building",
    description: "Build high-quality backlinks to boost your domain authority.",
  },
  {
    icon: Globe,
    title: "Local SEO",
    description: "Dominate local search results and attract nearby customers.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description: "Track rankings, traffic, and conversions with detailed reports.",
  },
];

const results = [
  { metric: "Average Ranking Improvement", value: "40+" },
  { metric: "Traffic Increase", value: "150%" },
  { metric: "Conversion Rate Boost", value: "85%" },
  { metric: "ROI Delivered", value: "400%" },
];

const benefits = [
  "Long-term sustainable traffic growth",
  "Higher quality leads from organic search",
  "Improved brand credibility and trust",
  "Better user experience on your website",
  "Cost-effective compared to paid ads",
  "24/7 visibility in search results",
];

export default function SEOServices() {
  return (
    <Layout>
      <section className="relative py-20 overflow-hidden" data-testid="section-seo-hero">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Search className="h-4 w-4" />
              SEO Services
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6" data-testid="text-seo-title">
              Rank Higher, <span className="text-gradient">Grow Faster</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Dominate search engine rankings with our proven SEO strategies. 
              We help businesses get found by the right customers at the right time.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" className="gap-2" data-testid="button-seo-cta">
                  Get SEO Audit
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/pricing">
                <Button variant="outline" size="lg" data-testid="button-seo-pricing">
                  View Pricing
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card" data-testid="section-seo-results">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {results.map((result, index) => (
              <div key={index} className="text-center" data-testid={`seo-result-${index}`}>
                <div className="text-4xl lg:text-5xl font-bold text-gradient mb-2">
                  {result.value}
                </div>
                <div className="text-muted-foreground text-sm">{result.metric}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" data-testid="section-seo-features">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4" data-testid="text-seo-services">
              Our SEO Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive SEO solutions to boost your online visibility
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="glass-card" data-testid={`card-seo-feature-${index}`}>
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-md bg-primary/10 flex items-center justify-center mb-6">
                    <feature.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-card" data-testid="section-seo-benefits">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Card className="glass-card" data-testid="card-seo-approach">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-6">Our SEO Approach</h3>
                <div className="space-y-6">
                  {[
                    { icon: Search, title: "Discovery", desc: "Understand your business, goals, and competition" },
                    { icon: FileText, title: "Audit", desc: "Comprehensive technical and content audit" },
                    { icon: Settings, title: "Strategy", desc: "Develop a customized SEO roadmap" },
                    { icon: Zap, title: "Implementation", desc: "Execute on-page and off-page optimizations" },
                    { icon: TrendingUp, title: "Growth", desc: "Monitor, analyze, and continuously improve" },
                  ].map((item, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <div>
              <h2 className="text-3xl font-bold mb-6" data-testid="text-seo-benefits">
                Why Invest in SEO?
              </h2>
              <p className="text-muted-foreground mb-8">
                SEO is one of the most effective digital marketing strategies for long-term 
                growth. Unlike paid advertising, the results of SEO compound over time, 
                delivering sustainable traffic and leads.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary" data-testid="section-seo-cta">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">
            Ready to Rank #1 on Google?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Get a free SEO audit and discover opportunities to improve your search rankings.
          </p>
          <Link href="/contact">
            <Button variant="secondary" size="lg" className="gap-2" data-testid="button-seo-contact">
              Get Free SEO Audit
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
