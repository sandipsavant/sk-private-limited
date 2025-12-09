import { Link } from "wouter";
import { ArrowRight, CheckCircle, Facebook, Instagram, Linkedin, Twitter, BarChart3, Users, MessageCircle, Calendar, Target, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Layout } from "@/components/layout";

const features = [
  {
    icon: Calendar,
    title: "Content Planning",
    description: "Strategic content calendars tailored to your brand voice and audience preferences.",
  },
  {
    icon: MessageCircle,
    title: "Community Management",
    description: "Engage with your audience, respond to queries, and build meaningful relationships.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description: "Detailed performance reports with actionable insights for continuous improvement.",
  },
  {
    icon: Target,
    title: "Paid Social Ads",
    description: "Targeted advertising campaigns to reach your ideal customers effectively.",
  },
  {
    icon: Users,
    title: "Influencer Marketing",
    description: "Connect with relevant influencers to amplify your brand message.",
  },
  {
    icon: TrendingUp,
    title: "Growth Strategy",
    description: "Data-driven strategies to grow your following and engagement organically.",
  },
];

const platforms = [
  { name: "Facebook", icon: Facebook, color: "text-blue-600" },
  { name: "Instagram", icon: Instagram, color: "text-pink-600" },
  { name: "LinkedIn", icon: Linkedin, color: "text-blue-700" },
  { name: "Twitter", icon: Twitter, color: "text-sky-500" },
];

const benefits = [
  "Increase brand awareness and visibility",
  "Drive targeted traffic to your website",
  "Generate qualified leads and conversions",
  "Build customer loyalty and trust",
  "Stay ahead of competitors",
  "Cost-effective marketing solution",
];

export default function SocialMediaMarketing() {
  return (
    <Layout>
      <section className="relative py-20 overflow-hidden" data-testid="section-smm-hero">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <MessageCircle className="h-4 w-4" />
                Social Media Marketing
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6" data-testid="text-smm-title">
                Grow Your Brand on <span className="text-gradient">Social Media</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Build a powerful social media presence that connects with your audience, 
                drives engagement, and converts followers into loyal customers.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact">
                  <Button size="lg" className="gap-2" data-testid="button-smm-cta">
                    Get Started
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/pricing">
                  <Button variant="outline" size="lg" data-testid="button-smm-pricing">
                    View Pricing
                  </Button>
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {platforms.map((platform, index) => (
                <Card key={index} className="glass-card hover-elevate transition-all duration-300">
                  <CardContent className="p-6 flex items-center gap-4">
                    <platform.icon className={`h-10 w-10 ${platform.color}`} />
                    <span className="font-semibold">{platform.name}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card" data-testid="section-smm-features">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4" data-testid="text-smm-services">
              Our Social Media Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive social media management to help your brand stand out
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="glass-card" data-testid={`card-smm-feature-${index}`}>
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

      <section className="py-20" data-testid="section-smm-benefits">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6" data-testid="text-smm-benefits">
                Why Social Media Marketing?
              </h2>
              <p className="text-muted-foreground mb-8">
                Social media has become an essential part of every successful marketing strategy. 
                With billions of active users, it offers unparalleled opportunities to reach and 
                engage with your target audience.
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
            <Card className="glass-card" data-testid="card-smm-process">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-6">Our Process</h3>
                <div className="space-y-6">
                  {[
                    { step: "1", title: "Audit & Analysis", desc: "We analyze your current social presence" },
                    { step: "2", title: "Strategy Development", desc: "Create a customized marketing plan" },
                    { step: "3", title: "Content Creation", desc: "Develop engaging content for your brand" },
                    { step: "4", title: "Execution & Management", desc: "Implement and manage campaigns" },
                    { step: "5", title: "Monitor & Optimize", desc: "Track results and optimize performance" },
                  ].map((item, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold flex-shrink-0">
                        {item.step}
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
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary" data-testid="section-smm-cta">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">
            Ready to Dominate Social Media?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Let us help you build a powerful social media presence that drives real results.
          </p>
          <Link href="/contact">
            <Button variant="secondary" size="lg" className="gap-2" data-testid="button-smm-contact">
              Start Your Campaign
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
