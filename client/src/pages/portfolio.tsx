import { useState } from "react";
import { Link } from "wouter";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Layout } from "@/components/layout";

const categories = ["All", "Social Media", "SEO", "Web Design", "PPC"];

// ✔ REAL IMAGES ADDED
const projects = [
  {
    title: "TechStart India",
    category: "Social Media",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200",
    description:
      "Comprehensive social media strategy that increased engagement by 400% and generated 2000+ qualified leads.",
    results: ["400% Engagement Increase", "2000+ Leads", "150K Followers"],
  },
  {
    title: "FashionHub E-commerce",
    category: "Web Design",
    image:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=1200",
    description: "Complete website redesign with improved UX that boosted conversions by 85%.",
    results: ["85% More Conversions", "60% Faster Load", "Mobile-First"],
  },
  {
    title: "HealthFirst Clinic",
    category: "SEO",
    image:
      "https://images.unsplash.com/photo-1587502536263-9298f1c464a7?w=1200",
    description: "Local SEO campaign that helped the clinic rank #1 for 50+ keywords in their city.",
    results: ["#1 Rankings", "300% Traffic", "50+ Keywords"],
  },
  {
    title: "PropertyGuru",
    category: "PPC",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200",
    description: "Google Ads campaign that reduced cost-per-lead by 60% while increasing quality leads.",
    results: ["60% Lower CPL", "5x ROAS", "200+ Leads/Month"],
  },
  {
    title: "EduLearn Platform",
    category: "Web Design",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200",
    description: "Modern e-learning platform with intuitive UI and seamless payment integration.",
    results: ["10K Students", "98% Satisfaction", "Award Winner"],
  },
  {
    title: "FoodDelight Restaurant",
    category: "Social Media",
    image:
      "https://images.unsplash.com/photo-1555992336-aa7d4ddc88e6?w=1200",
    description: "Instagram marketing campaign that drove 500% increase in table reservations.",
    results: ["500% Reservations", "50K Followers", "Viral Campaign"],
  },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <Layout>
      <style>
        {`
          /* Animated background color changing */
          .color-shift {
            animation: shiftBg 8s infinite alternate;
          }
          @keyframes shiftBg {
            0% { background-color: rgba(255, 147, 63, 0.15); }
            25% { background-color: rgba(63, 147, 255, 0.15); }
            50% { background-color: rgba(63, 255, 159, 0.15); }
            75% { background-color: rgba(255, 63, 189, 0.15); }
            100% { background-color: rgba(255, 177, 63, 0.15); }
          }

          /* 3D Rotate Circle Effect */
          .rotate-3d {
            transition: transform 0.4s ease, box-shadow 0.4s ease;
            transform-style: preserve-3d;
          }
          .rotate-3d:hover {
            transform: rotateX(12deg) rotateY(-12deg) scale(1.05);
            box-shadow: 0 30px 60px rgba(0,0,0,0.25);
          }

          /* Smooth image zoom */
          .card-image {
            transition: transform 0.5s ease;
          }
          .rotate-3d:hover .card-image {
            transform: scale(1.12);
          }
        `}
      </style>

      {/* HEADER */}
      <section className="relative py-20 overflow-hidden">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">
            Our <span className="text-gradient">Portfolio</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            High-end creative projects with stunning visuals & impactful results.
          </p>
        </div>
      </section>

      {/* FILTER BUTTONS */}
      <section className="py-10">
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>
      </section>

      {/* 3D CARDS WITH REAL IMAGES */}
      <section className="py-12 pb-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-12 px-6">
          {filteredProjects.map((project, index) => (
            <Card
              key={index}
              className="rotate-3d rounded-2xl overflow-hidden shadow-xl border border-white/20 backdrop-blur-xl color-shift"
            >
              <div className="h-52 w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="card-image w-full h-full object-cover"
                />
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                  {project.title}
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
                </h3>

                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.results.map((result, i) => (
                    <Badge key={i} variant="outline" className="text-xs">
                      {result}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-center text-primary-foreground">
        <h2 className="text-3xl font-bold mb-4">Want Similar Results?</h2>
        <p className="opacity-80 mb-8 max-w-xl mx-auto">
          Let’s build something extraordinary for your brand.
        </p>

        <Link href="/contact">
          <Button variant="secondary" size="lg" className="gap-2">
            Start Your Project <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </section>
    </Layout>
  );
}
