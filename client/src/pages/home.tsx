import { Link } from "wouter";
import { ArrowRight, TrendingUp, Users, Award, Zap, Grid3X3, Search, Monitor, Target, CheckCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Layout } from "@/components/layout";

const services = [
  {
    icon: Grid3X3,
    title: "Social Media Marketing",
    description: "Build your brand presence across all social platforms with engaging content and strategic campaigns.",
    href: "/services/social-media",
  },
  {
    icon: Search,
    title: "SEO Services",
    description: "Dominate search rankings and drive organic traffic with our proven SEO strategies.",
    href: "/services/seo",
  },
  {
    icon: Monitor,
    title: "Web Design",
    description: "Create stunning, conversion-focused websites that leave lasting impressions.",
    href: "/services/web-design",
  },
  {
    icon: Target,
    title: "PPC Campaigns",
    description: "Maximize ROI with targeted paid advertising across Google, Facebook, and more.",
    href: "/services/ppc",
  },
];

const stats = [
  { value: "500+", label: "Happy Clients" },
  { value: "1200+", label: "Projects Completed" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "15+", label: "Years Experience" },
];

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "CEO, TechStart India",
    content: "Savant Kulkatni transformed our digital presence completely. Our leads increased by 300% within just 6 months!",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Marketing Director, FashionHub",
    content: "The team's creativity and data-driven approach helped us achieve remarkable growth. Highly recommended!",
    rating: 5,
  },
  {
    name: "Amit Patel",
    role: "Founder, HealthFirst",
    content: "Professional, responsive, and results-oriented. They truly understand digital marketing.",
    rating: 5,
  },
];

export default function Home() {
  return (
    <Layout>
      <section className="relative min-h-[85vh] flex items-center overflow-hidden" data-testid="section-hero">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6" data-testid="text-hero-title">
              Transform Your{" "}
              <span className="text-gradient">Digital Presence</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto" data-testid="text-hero-subtitle">
              Partner with Savant Kulkatni Private Limited to elevate your brand 
              with innovative marketing strategies that deliver measurable results.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" className="gap-2" data-testid="button-hero-cta">
                  Get Started
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button variant="outline" size="lg" data-testid="button-hero-portfolio">
                  View Our Work
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card" data-testid="section-stats">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center" data-testid={`stat-${index}`}>
                <div className="text-4xl lg:text-5xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" data-testid="section-services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4" data-testid="text-services-title">
              Our Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive digital marketing solutions tailored to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Link key={index} href={service.href}>
                <Card className="h-full glass-card hover-elevate transition-all duration-300 cursor-pointer group" data-testid={`card-service-${index}`}>
                  <CardContent className="p-8">
                    <div className="w-14 h-14 rounded-md bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                      <service.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground text-sm">{service.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/pricing">
              <Button variant="outline" size="lg" className="gap-2" data-testid="button-view-pricing">
                View Plans & Pricing
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card" data-testid="section-why-us">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6" data-testid="text-why-title">
                Why Choose Savant Kulkatni?
              </h2>
              <p className="text-muted-foreground mb-8">
                We combine creativity with data-driven strategies to deliver 
                exceptional results for our clients. Our team of experts is 
                dedicated to helping your business thrive in the digital landscape.
              </p>

              <div className="space-y-4">
                {[
                  "Data-driven strategies with proven ROI",
                  "Dedicated account managers for personalized service",
                  "Transparent reporting and regular updates",
                  "Cutting-edge tools and technologies",
                  "Award-winning creative team",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <Link href="/about">
                <Button className="mt-8 gap-2" data-testid="button-learn-more">
                  Learn More About Us
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Card className="glass-card p-6">
                <TrendingUp className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-semibold mb-2">Growth Focused</h3>
                <p className="text-sm text-muted-foreground">Strategies designed to scale your business</p>
              </Card>
              <Card className="glass-card p-6 mt-8">
                <Users className="h-8 w-8 text-secondary mb-4" />
                <h3 className="font-semibold mb-2">Expert Team</h3>
                <p className="text-sm text-muted-foreground">Skilled professionals at your service</p>
              </Card>
              <Card className="glass-card p-6">
                <Award className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-semibold mb-2">Award Winning</h3>
                <p className="text-sm text-muted-foreground">Recognized excellence in the industry</p>
              </Card>
              <Card className="glass-card p-6 mt-8">
                <Zap className="h-8 w-8 text-secondary mb-4" />
                <h3 className="font-semibold mb-2">Fast Results</h3>
                <p className="text-sm text-muted-foreground">Quick turnaround on all projects</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20" data-testid="section-testimonials">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4" data-testid="text-testimonials-title">
              What Our Clients Say
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Trusted by hundreds of businesses across India
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="glass-card" data-testid={`card-testimonial-${index}`}>
                <CardContent className="p-8">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary" data-testid="section-cta">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-4" data-testid="text-cta-title">
            Ready to Grow Your Business?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve your digital marketing goals. 
            Get a free consultation today!
          </p>
          <Link href="/contact">
            <Button variant="secondary" size="lg" className="gap-2" data-testid="button-cta-contact">
              Contact Us Now
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
