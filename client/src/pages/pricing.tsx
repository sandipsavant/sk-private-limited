import { Link } from "wouter";
import { ArrowRight, Check, Star, Zap, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Layout } from "@/components/layout";

const plans = [
  {
    name: "Starter",
    icon: Zap,
    price: "29,999",
    period: "/month",
    description: "Perfect for small businesses starting their digital journey",
    features: [
      "Social Media Management (2 platforms)",
      "8 Posts per month",
      "Basic SEO Audit",
      "Monthly Performance Report",
      "Email Support",
      "1 Campaign per month",
    ],
    popular: false,
  },
  {
    name: "Professional",
    icon: Star,
    price: "59,999",
    period: "/month",
    description: "Ideal for growing businesses seeking comprehensive marketing",
    features: [
      "Social Media Management (4 platforms)",
      "20 Posts per month",
      "Full SEO Package",
      "PPC Campaign Management",
      "Weekly Performance Reports",
      "Dedicated Account Manager",
      "Priority Email & Phone Support",
      "3 Campaigns per month",
      "Content Creation",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    icon: Crown,
    price: "99,999",
    period: "/month",
    description: "For large organizations requiring full-scale marketing solutions",
    features: [
      "All Professional Features",
      "Unlimited Platforms",
      "40+ Posts per month",
      "Advanced Analytics Dashboard",
      "Custom Strategy Development",
      "Influencer Marketing",
      "Video Content Creation",
      "24/7 Priority Support",
      "Unlimited Campaigns",
      "Quarterly Strategy Reviews",
    ],
    popular: false,
  },
];

const faqs = [
  {
    question: "What's included in social media management?",
    answer: "Our social media management includes content creation, posting, community management, responding to comments and messages, and monthly analytics reports.",
  },
  {
    question: "Can I upgrade or downgrade my plan?",
    answer: "Yes, you can change your plan at any time. Changes will be reflected in your next billing cycle.",
  },
  {
    question: "Do you offer custom packages?",
    answer: "Absolutely! We understand every business is unique. Contact us to discuss a customized solution tailored to your needs.",
  },
  {
    question: "What is the contract duration?",
    answer: "We offer flexible month-to-month contracts with no long-term commitment required. For annual plans, we offer a 20% discount.",
  },
  {
    question: "How do I get started?",
    answer: "Simply choose a plan and contact us. We'll schedule a discovery call to understand your goals and get started right away.",
  },
];

export default function Pricing() {
  return (
    <Layout>
      <section className="relative py-20 overflow-hidden" data-testid="section-pricing-hero">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6" data-testid="text-pricing-title">
              Simple, Transparent <span className="text-gradient">Pricing</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Choose the perfect plan for your business. No hidden fees, no surprises. 
              All plans include our commitment to delivering results.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20" data-testid="section-pricing-plans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`glass-card relative ${plan.popular ? "ring-2 ring-primary" : ""}`}
                data-testid={`card-pricing-${plan.name.toLowerCase()}`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2" variant="default">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <plan.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground mt-2">{plan.description}</p>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="text-center mb-8">
                    <span className="text-4xl font-bold">₹{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact">
                    <Button
                      className="w-full gap-2"
                      variant={plan.popular ? "default" : "outline"}
                      data-testid={`button-pricing-${plan.name.toLowerCase()}`}
                    >
                      Get Started
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-card" data-testid="section-pricing-faq">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4" data-testid="text-faq-title">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground">
              Have questions? We have answers.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="glass-card" data-testid={`card-faq-${index}`}>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground text-sm">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary" data-testid="section-pricing-cta">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            We create tailored marketing packages for businesses with unique requirements. 
            Let's discuss your specific needs.
          </p>
          <Link href="/contact">
            <Button variant="secondary" size="lg" className="gap-2" data-testid="button-pricing-custom">
              Contact Us
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
