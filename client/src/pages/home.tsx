// Home page with multicolor sections (pink, grey, brown, light tones, non-dark)
// Auto-changing hero images + new additional section included

import { useState, useEffect } from "react";
import { Link } from "wouter";
import { ArrowRight, TrendingUp, Users, Award, Zap, Grid3X3, Search, Monitor, Target, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Layout } from "@/components/layout";
import { useLanguage } from "@/components/language-provider";

// Auto-changing hero images (HD Social Media themed)
const heroBackgrounds = [
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1920&q=90",
  "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1920&q=90",
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&q=90",
  "https://images.unsplash.com/photo-1557838923-2985c318be48?w=1920&q=90",
  "https://images.unsplash.com/photo-1508830524289-0adcbe822b40?w=1920&q=90"
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
    }, 4500);
    return () => clearInterval(interval);
  }, [nextBg]);

  const services = [
    { icon: Grid3X3, title: t.services.socialMedia.title, description: t.services.socialMedia.description, href: "/services/social-media" },
    { icon: Search, title: t.services.seo.title, description: t.services.seo.description, href: "/services/seo" },
    { icon: Monitor, title: t.services.webDesign.title, description: t.services.webDesign.description, href: "/services/web-design" },
    { icon: Target, title: t.services.ppc.title, description: t.services.ppc.description, href: "/services/ppc" }
  ];

  const whyUsPoints = [t.whyUs.point1, t.whyUs.point2, t.whyUs.point3, t.whyUs.point4, t.whyUs.point5];

  return (
    <Layout>

      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden text-white">
        <div className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${isTransitioning ? "opacity-0" : "opacity-100"}`} style={{ backgroundImage: `url(${heroBackgrounds[currentBg]})` }} />
        <div className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${isTransitioning ? "opacity-100" : "opacity-0"}`} style={{ backgroundImage: `url(${heroBackgrounds[nextBg]})` }} />
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

        <div className="relative max-w-4xl mx-auto text-center px-6 py-20">
          <h1 className="text-5xl font-extrabold mb-6 drop-shadow-xl">Premium Social Media Marketing</h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">Grow your brand with strategic content and real engagement.</p>
          <Link href="/services/social-media">
            <Button size="lg" className="gap-2 bg-white text-black hover:bg-gray-200">Explore Services <ArrowRight /></Button>
          </Link>
        </div>
      </section>

      {/* SECTION 1 — LIGHT GREY */}
      <section className="py-20 bg-[#f2f2f2]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">{t.services.title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-16">{t.services.subtitle}</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, i) => (
              <Link key={i} href={service.href}>
                <Card className="cursor-pointer hover:shadow-xl transition-all duration-300 bg-white border border-gray-200">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 bg-gray-200 rounded-md flex items-center justify-center mb-6">
                      <service.icon className="h-7 w-7 text-black" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                    <p className="text-gray-600 text-sm mt-2">{service.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2 — SOFT PINK */}
      <section className="py-20 bg-[#ffe6ec]">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-gray-900">{t.whyUs.title}</h2>
            <p className="text-gray-700 mb-6">{t.whyUs.subtitle}</p>

            {whyUsPoints.map((text, i) => (
              <div key={i} className="flex items-center gap-3 mb-3">
                <CheckCircle className="h-5 w-5 text-black" />
                <span className="text-gray-900">{text}</span>
              </div>
            ))}

            <Link href="/about">
              <Button className="mt-6 bg-black text-white hover:bg-gray-800">{t.whyUs.learnMore}</Button>
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <Card className="p-6 bg-white border border-gray-300">
              <TrendingUp className="h-8 w-8 text-black mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">{t.whyUs.growthFocused}</h3>
              <p className="text-sm text-gray-600">{t.whyUs.growthDesc}</p>
            </Card>

            <Card className="p-6 bg-white border border-gray-300 mt-6">
              <Users className="h-8 w-8 text-black mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">{t.whyUs.expertTeam}</h3>
              <p className="text-sm text-gray-600">{t.whyUs.expertDesc}</p>
            </Card>

            <Card className="p-6 bg-white border border-gray-300">
              <Award className="h-8 w-8 text-black mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">{t.whyUs.awardWinning}</h3>
              <p className="text-sm text-gray-600">{t.whyUs.awardDesc}</p>
            </Card>

            <Card className="p-6 bg-white border border-gray-300 mt-6">
              <Zap className="h-8 w-8 text-black mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">{t.whyUs.fastResults}</h3>
              <p className="text-sm text-gray-600">{t.whyUs.fastDesc}</p>
            </Card>
          </div>
        </div>
      </section>

      {/* NEW SECTION — CREAM/BROWN SOFT THEME */}
      <section className="py-24 bg-[#f7ede2]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Marketing Philosophy</h2>
          <p className="text-gray-700 max-w-3xl mx-auto mb-12">
            We combine creativity, strategic thinking, and data-driven insights to craft campaigns
            that truly connect with your audience.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 bg-white border border-gray-300">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Content Excellence</h3>
              <p className="text-gray-700 text-sm">High-quality visuals and engaging copy crafted to resonate.</p>
            </Card>

            <Card className="p-8 bg-white border border-gray-300">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Audience Insights</h3>
              <p className="text-gray-700 text-sm">Understanding customer behavior to boost engagement.</p>
            </Card>

            <Card className="p-8 bg-white border border-gray-300">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Growth Strategy</h3>
              <p className="text-gray-700 text-sm">Smart planning that drives measurable business results.</p>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
}
