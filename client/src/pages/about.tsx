import { Link } from "wouter";
import { ArrowRight, Target, Eye, Heart, Users, Award, TrendingUp, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Layout } from "@/components/layout";

const values = [
  {
    icon: Target,
    title: "Results-Driven",
    description: "We focus on delivering measurable outcomes that impact your bottom line.",
  },
  {
    icon: Heart,
    title: "Client-Centric",
    description: "Your success is our priority. We build lasting partnerships based on trust.",
  },
  {
    icon: Eye,
    title: "Innovative",
    description: "We stay ahead of trends and embrace new technologies to give you an edge.",
  },
  {
    icon: Users,
    title: "Collaborative",
    description: "We work as an extension of your team, ensuring seamless communication.",
  },
];

const team = [
  { name: "Sanjay Kulkarni", role: "Founder & CEO", description: "15+ years in digital marketing" },
  { name: "Meera Sharma", role: "Creative Director", description: "Award-winning designer" },
  { name: "Vikram Singh", role: "SEO Director", description: "Google certified expert" },
  { name: "Anita Patel", role: "Social Media Lead", description: "Content strategy specialist" },
];

export default function About() {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              About <span className="text-gradient">SK</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              We are a passionate team of digital marketing experts dedicated to
              helping businesses thrive in the digital age. Since 2009, we've been
              transforming brands and driving growth for hundreds of clients.
            </p>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-muted-foreground mb-6">
                To empower businesses of all sizes with innovative digital marketing
                solutions that drive sustainable growth. We believe in creating
                meaningful connections between brands and their audiences through
                creative strategies backed by data.
              </p>
              <p className="text-muted-foreground">
                Our approach combines cutting-edge technology with human creativity
                to deliver campaigns that resonate with your target audience and
                achieve measurable results.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <Card className="glass-card p-6 text-center">
                <Globe className="h-10 w-10 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Countries Served</div>
              </Card>
              <Card className="glass-card p-6 text-center">
                <Users className="h-10 w-10 text-secondary mx-auto mb-4" />
                <div className="text-3xl font-bold mb-2">75+</div>
                <div className="text-sm text-muted-foreground">Team Members</div>
              </Card>
              <Card className="glass-card p-6 text-center">
                <Award className="h-10 w-10 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold mb-2">25+</div>
                <div className="text-sm text-muted-foreground">Industry Awards</div>
              </Card>
              <Card className="glass-card p-6 text-center">
                <TrendingUp className="h-10 w-10 text-secondary mx-auto mb-4" />
                <div className="text-3xl font-bold mb-2">500%</div>
                <div className="text-sm text-muted-foreground">Avg Client Growth</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="glass-card">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Leadership Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Meet the experts driving our success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="glass-card text-center">
                <CardContent className="p-8">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary mx-auto mb-6 flex items-center justify-center">
                    <span className="text-3xl font-bold text-white">
                      {member.name.split(" ").map(n => n[0]).join("")}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <div className="text-primary text-sm mb-2">{member.role}</div>
                  <p className="text-muted-foreground text-sm">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Join hundreds of businesses that trust Savant Kulkatni for their digital marketing needs.
          </p>
          <Link href="/contact">
            <Button variant="secondary" size="lg" className="gap-2">
              Get in Touch
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
