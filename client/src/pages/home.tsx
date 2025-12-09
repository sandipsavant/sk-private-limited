import { useState, useEffect } from "react";
import { Link } from "wouter";
import { ArrowRight, TrendingUp, Users, Award, Zap, Grid3X3, Search, Monitor, Target, CheckCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Layout } from "@/components/layout";
import { useLanguage } from "@/components/language-provider";

const heroBackgrounds = [
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80",
  "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=1920&q=80",
  "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&q=80",
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80",
  "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1920&q=80",
];

const stats = [
  { value: "500+", key: "clients" },
  { value: "1200+", key: "projects" },
  { value: "98%", key: "satisfaction" },
  { value: "15+", key: "experience" },
];


export default function Home() {
  const { t } = useLanguage();
  const [currentBg, setCurrentBg] = useState(0);
  const [nextBg, setNextBg] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentBg(nextBg);
        setNextBg((nextBg + 1) % heroBackgrounds.length);
        setIsTransitioning(false);
      }, 1000);
    }, 5000);

    return () => clearInterval(interval);
  }, [nextBg]);

  const services = [
    {
      icon: Grid3X3,
      title: t.services.socialMedia.title,
      description: t.services.socialMedia.description,
      href: "/services/social-media",
    },
    {
      icon: Search,
      title: t.services.seo.title,
      description: t.services.seo.description,
      href: "/services/seo",
    },
    {
      icon: Monitor,
      title: t.services.webDesign.title,
      description: t.services.webDesign.description,
      href: "/services/web-design",
    },
    {
      icon: Target,
      title: t.services.ppc.title,
      description: t.services.ppc.description,
      href: "/services/ppc",
    },
  ];

  const whyUsPoints = [
    t.whyUs.point1,
    t.whyUs.point2,
    t.whyUs.point3,
    t.whyUs.point4,
    t.whyUs.point5,
  ];

  const statsLabels: Record<string, string> = {
    clients: t.stats.clients,
    projects: t.stats.projects,
    satisfaction: t.stats.satisfaction,
    experience: t.stats.experience,
  };

  return (
    <Layout>
      <section className="relative min-h-[85vh] flex items-center overflow-hidden" data-testid="section-hero">
        <div 
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${isTransitioning ? "opacity-0" : "opacity-100"}`}
          style={{ backgroundImage: `url(${heroBackgrounds[currentBg]})` }}
        />
        <div 
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${isTransitioning ? "opacity-100" : "opacity-0"}`}
          style={{ backgroundImage: `url(${heroBackgrounds[nextBg]})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/30 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/30 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white" data-testid="text-hero-title">
              {t.hero.title}{" "}
              <span className="text-gradient">{t.hero.titleHighlight}</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto" data-testid="text-hero-subtitle">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" className="gap-2" data-testid="button-hero-cta">
                  {t.hero.getStarted}
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white backdrop-blur-sm" data-testid="button-hero-portfolio">
                  {t.hero.viewWork}
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          {heroBackgrounds.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsTransitioning(true);
                setTimeout(() => {
                  setCurrentBg(index);
                  setNextBg((index + 1) % heroBackgrounds.length);
                  setIsTransitioning(false);
                }, 500);
              }}
              className={`w-3 h-3 rounded-full transition-all ${
                currentBg === index ? "bg-white scale-125" : "bg-white/50"
              }`}
              data-testid={`button-hero-dot-${index}`}
            />
          ))}
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
                <div className="text-muted-foreground">{statsLabels[stat.key]}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" data-testid="section-services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4" data-testid="text-services-title">
              {t.services.title}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t.services.subtitle}
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
                {t.services.viewPricing}
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
                {t.whyUs.title}
              </h2>
              <p className="text-muted-foreground mb-8">
                {t.whyUs.subtitle}
              </p>

              <div className="space-y-4">
                {whyUsPoints.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <Link href="/about">
                <Button className="mt-8 gap-2" data-testid="button-learn-more">
                  {t.whyUs.learnMore}
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Card className="glass-card p-6">
                <TrendingUp className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-semibold mb-2">{t.whyUs.growthFocused}</h3>
                <p className="text-sm text-muted-foreground">{t.whyUs.growthDesc}</p>
              </Card>
              <Card className="glass-card p-6 mt-8">
                <Users className="h-8 w-8 text-secondary mb-4" />
                <h3 className="font-semibold mb-2">{t.whyUs.expertTeam}</h3>
                <p className="text-sm text-muted-foreground">{t.whyUs.expertDesc}</p>
              </Card>
              <Card className="glass-card p-6">
                <Award className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-semibold mb-2">{t.whyUs.awardWinning}</h3>
                <p className="text-sm text-muted-foreground">{t.whyUs.awardDesc}</p>
              </Card>
              <Card className="glass-card p-6 mt-8">
                <Zap className="h-8 w-8 text-secondary mb-4" />
                <h3 className="font-semibold mb-2">{t.whyUs.fastResults}</h3>
                <p className="text-sm text-muted-foreground">{t.whyUs.fastDesc}</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20" data-testid="section-testimonials">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4" data-testid="text-testimonials-title">
              {t.testimonials.title}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t.testimonials.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {t.testimonials.items.map((testimonial, index) => (
              <Card key={index} className="glass-card" data-testid={`card-testimonial-${index}`}>
                <CardContent className="p-8">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
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
            {t.cta.title}
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            {t.cta.subtitle}
          </p>
          <Link href="/contact">
            <Button variant="secondary" size="lg" className="gap-2" data-testid="button-cta-contact">
              {t.cta.button}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
