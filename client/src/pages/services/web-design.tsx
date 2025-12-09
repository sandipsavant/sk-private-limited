import { Link } from "wouter";
import { ArrowRight, CheckCircle, Monitor, Smartphone, Palette, Code, Zap, Shield, Layout, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Layout as PageLayout } from "@/components/layout";

const features = [
  {
    icon: Palette,
    title: "Custom Design",
    description: "Unique, branded designs tailored to your business identity and goals.",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description: "Perfect experience across all devices - desktop, tablet, and mobile.",
  },
  {
    icon: Zap,
    title: "Fast Performance",
    description: "Optimized for speed to ensure quick loading times and better UX.",
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description: "Built with security best practices and reliable hosting solutions.",
  },
  {
    icon: Code,
    title: "Clean Code",
    description: "Well-structured, maintainable code for easy future updates.",
  },
  {
    icon: Layout,
    title: "SEO-Friendly",
    description: "Built with SEO best practices to help you rank better.",
  },
];

const process = [
  { step: "01", title: "Discovery", desc: "Understand your goals, audience, and requirements" },
  { step: "02", title: "Planning", desc: "Create wireframes and site architecture" },
  { step: "03", title: "Design", desc: "Develop visual designs and get your approval" },
  { step: "04", title: "Development", desc: "Build the website with clean, efficient code" },
  { step: "05", title: "Testing", desc: "Thorough testing across devices and browsers" },
  { step: "06", title: "Launch", desc: "Deploy your website and provide training" },
];

const benefits = [
  "Professional first impression for your business",
  "Improved user experience and engagement",
  "Higher conversion rates and leads",
  "Mobile-first approach for modern users",
  "Easy content management system",
  "Ongoing support and maintenance",
];

export default function WebDesign() {
  return (
    <PageLayout>
      <section className="relative py-20 overflow-hidden" data-testid="section-web-hero">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
        <div className="absolute top-40 right-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Monitor className="h-4 w-4" />
                Web Design
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6" data-testid="text-web-title">
                Stunning Websites That <span className="text-gradient">Convert</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                We create beautiful, user-friendly websites that not only look amazing 
                but also drive results. From landing pages to full e-commerce solutions.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact">
                  <Button size="lg" className="gap-2" data-testid="button-web-cta">
                    Start Your Project
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/portfolio">
                  <Button variant="outline" size="lg" data-testid="button-web-portfolio">
                    View Portfolio
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <Card className="glass-card p-4">
                <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-md aspect-video flex items-center justify-center">
                  <div className="text-center">
                    <Layers className="h-16 w-16 text-primary mx-auto mb-4" />
                    <p className="text-muted-foreground">Your Website Preview</p>
                  </div>
                </div>
              </Card>
              <Card className="glass-card p-3 absolute -bottom-4 -left-4 w-32">
                <div className="text-center">
                  <Monitor className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="text-xs text-muted-foreground">Desktop</p>
                </div>
              </Card>
              <Card className="glass-card p-3 absolute -bottom-4 -right-4 w-32">
                <div className="text-center">
                  <Smartphone className="h-8 w-8 text-secondary mx-auto mb-2" />
                  <p className="text-xs text-muted-foreground">Mobile</p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card" data-testid="section-web-features">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4" data-testid="text-web-features">
              What We Offer
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything you need for a successful website
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="glass-card" data-testid={`card-web-feature-${index}`}>
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

      <section className="py-20" data-testid="section-web-process">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4" data-testid="text-web-process">
              Our Design Process
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A structured approach to deliver exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((item, index) => (
              <Card key={index} className="glass-card relative" data-testid={`card-web-process-${index}`}>
                <CardContent className="p-8">
                  <div className="text-5xl font-bold text-primary/20 absolute top-4 right-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-card" data-testid="section-web-benefits">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6" data-testid="text-web-benefits">
                Why Choose Our Web Design?
              </h2>
              <p className="text-muted-foreground mb-8">
                Your website is often the first impression potential customers have of your 
                business. We create websites that not only look professional but also 
                work hard to convert visitors into customers.
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
            <div className="grid grid-cols-2 gap-4">
              <Card className="glass-card p-6 text-center">
                <div className="text-3xl font-bold text-gradient mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Websites Built</div>
              </Card>
              <Card className="glass-card p-6 text-center">
                <div className="text-3xl font-bold text-gradient mb-2">99%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </Card>
              <Card className="glass-card p-6 text-center">
                <div className="text-3xl font-bold text-gradient mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Industries Served</div>
              </Card>
              <Card className="glass-card p-6 text-center">
                <div className="text-3xl font-bold text-gradient mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Support Available</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary" data-testid="section-web-cta">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">
            Ready for a New Website?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Let's create a website that represents your brand and drives results.
          </p>
          <Link href="/contact">
            <Button variant="secondary" size="lg" className="gap-2" data-testid="button-web-contact">
              Get Free Quote
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
