import { Link } from "wouter";
import { ArrowRight, CheckCircle, Target, DollarSign, BarChart3, Users, Zap, TrendingUp, Search, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Layout } from "@/components/layout";
import { SiGoogle, SiFacebook, SiInstagram, SiLinkedin } from "react-icons/si";

const platforms = [
  { name: "Google Ads", icon: SiGoogle, description: "Search, Display, Shopping & YouTube" },
  { name: "Facebook Ads", icon: SiFacebook, description: "Feed, Stories & Messenger" },
  { name: "Instagram Ads", icon: SiInstagram, description: "Feed, Stories & Reels" },
  { name: "LinkedIn Ads", icon: SiLinkedin, description: "B2B & Professional targeting" },
];

const features = [
  {
    icon: Target,
    title: "Precise Targeting",
    description: "Reach the right audience with advanced demographic and behavioral targeting.",
  },
  {
    icon: DollarSign,
    title: "Budget Optimization",
    description: "Maximize your ad spend with smart bidding strategies and budget allocation.",
  },
  {
    icon: BarChart3,
    title: "Performance Tracking",
    description: "Real-time dashboards and detailed reports on campaign performance.",
  },
  {
    icon: Zap,
    title: "Quick Results",
    description: "Start generating leads and sales within days of launch.",
  },
  {
    icon: Users,
    title: "Remarketing",
    description: "Re-engage visitors who didn't convert with targeted remarketing campaigns.",
  },
  {
    icon: TrendingUp,
    title: "Continuous Optimization",
    description: "A/B testing and ongoing optimization for better performance.",
  },
];

const benefits = [
  "Instant visibility on search engines",
  "Highly targeted audience reach",
  "Complete control over budget",
  "Measurable and trackable results",
  "Flexible and scalable campaigns",
  "High ROI when done right",
];

export default function PPCCampaigns() {
  return (
    <Layout>
      <section className="relative py-20 overflow-hidden" data-testid="section-ppc-hero">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-secondary/10 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Target className="h-4 w-4" />
              PPC Campaigns
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6" data-testid="text-ppc-title">
              Drive Instant Results with <span className="text-gradient">Paid Advertising</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Get your business in front of the right audience at the right time. 
              Our data-driven PPC campaigns deliver high-quality leads and measurable ROI.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" className="gap-2" data-testid="button-ppc-cta">
                  Start Campaign
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/pricing">
                <Button variant="outline" size="lg" data-testid="button-ppc-pricing">
                  View Pricing
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card" data-testid="section-ppc-platforms">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4" data-testid="text-ppc-platforms">
              Platforms We Master
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We run high-performing campaigns across all major advertising platforms
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {platforms.map((platform, index) => (
              <Card key={index} className="glass-card hover-elevate transition-all duration-300" data-testid={`card-ppc-platform-${index}`}>
                <CardContent className="p-8 text-center">
                  <platform.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">{platform.name}</h3>
                  <p className="text-muted-foreground text-sm">{platform.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" data-testid="section-ppc-features">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4" data-testid="text-ppc-services">
              Our PPC Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive paid advertising solutions for maximum ROI
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="glass-card" data-testid={`card-ppc-feature-${index}`}>
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

      <section className="py-20 bg-card" data-testid="section-ppc-benefits">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6" data-testid="text-ppc-benefits">
                Why Choose PPC Advertising?
              </h2>
              <p className="text-muted-foreground mb-8">
                Unlike organic marketing, PPC delivers immediate results. You can start 
                generating leads and sales from day one. Combined with our expertise, 
                your campaigns will be optimized for maximum return on investment.
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
            <Card className="glass-card" data-testid="card-ppc-stats">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-6">Campaign Performance</h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-muted-foreground">Average CTR</span>
                      <span className="font-semibold">4.5%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full" style={{ width: "45%" }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-muted-foreground">Conversion Rate</span>
                      <span className="font-semibold">8.2%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-secondary rounded-full" style={{ width: "82%" }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-muted-foreground">ROI Improvement</span>
                      <span className="font-semibold">320%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full" style={{ width: "100%" }} />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary" data-testid="section-ppc-cta">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">
            Ready to Scale Your Advertising?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Let us help you create high-performing PPC campaigns that deliver real results.
          </p>
          <Link href="/contact">
            <Button variant="secondary" size="lg" className="gap-2" data-testid="button-ppc-contact">
              Get Free Consultation
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
