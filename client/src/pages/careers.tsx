import { Link } from "wouter";
import { ArrowRight, MapPin, Clock, Briefcase, Users, Heart, Zap, Award, Coffee, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Layout } from "@/components/layout";

const benefits = [
  { icon: Heart, title: "Health Insurance", description: "Comprehensive medical coverage for you and your family" },
  { icon: Coffee, title: "Flexible Hours", description: "Work-life balance with flexible working hours" },
  { icon: Gift, title: "Annual Bonus", description: "Performance-based bonuses and incentives" },
  { icon: Zap, title: "Learning Budget", description: "Annual budget for courses and conferences" },
  { icon: Users, title: "Team Events", description: "Regular team outings and celebrations" },
  { icon: Award, title: "Career Growth", description: "Clear career paths and promotion opportunities" },
];

const jobs = [
  {
    title: "Senior Social Media Manager",
    department: "Marketing",
    location: "Mumbai",
    type: "Full-time",
    experience: "5+ years",
    description: "Lead social media strategies for our top clients and mentor junior team members.",
  },
  {
    title: "SEO Specialist",
    department: "SEO",
    location: "Remote",
    type: "Full-time",
    experience: "3+ years",
    description: "Execute SEO strategies and drive organic growth for diverse client portfolios.",
  },
  {
    title: "UI/UX Designer",
    department: "Design",
    location: "Mumbai",
    type: "Full-time",
    experience: "4+ years",
    description: "Create stunning, user-centric designs for web and mobile applications.",
  },
  {
    title: "PPC Campaign Manager",
    department: "Advertising",
    location: "Hybrid",
    type: "Full-time",
    experience: "3+ years",
    description: "Manage and optimize paid advertising campaigns across multiple platforms.",
  },
  {
    title: "Content Writer",
    department: "Content",
    location: "Remote",
    type: "Full-time",
    experience: "2+ years",
    description: "Create engaging content for blogs, social media, and marketing campaigns.",
  },
  {
    title: "Digital Marketing Intern",
    department: "Marketing",
    location: "Mumbai",
    type: "Internship",
    experience: "Fresher",
    description: "Learn digital marketing from industry experts and work on real projects.",
  },
];

const values = [
  "Innovation and creativity in everything we do",
  "Collaboration and open communication",
  "Continuous learning and growth",
  "Results-driven approach",
  "Work-life balance",
  "Diversity and inclusion",
];

export default function Careers() {
  return (
    <Layout>
      <section className="relative py-20 overflow-hidden" data-testid="section-careers-hero">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6" data-testid="text-careers-title">
              Join Our <span className="text-gradient">Team</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Be part of a dynamic team that's shaping the future of digital marketing. 
              We're always looking for talented individuals who share our passion.
            </p>
            <Button size="lg" className="gap-2" data-testid="button-view-openings">
              View Open Positions
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card" data-testid="section-careers-culture">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6" data-testid="text-culture-title">
                Our Culture
              </h2>
              <p className="text-muted-foreground mb-6">
                At Savant Kulkatni, we believe that great work comes from great people. 
                We foster an environment where creativity thrives, ideas are valued, 
                and everyone has the opportunity to grow.
              </p>
              <p className="text-muted-foreground mb-8">
                Our team is a diverse group of talented individuals who bring unique 
                perspectives and skills to the table. Together, we create impactful 
                marketing campaigns that drive real results for our clients.
              </p>
              <div className="space-y-3">
                {values.map((value, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span>{value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="glass-card p-6 text-center">
                <div className="text-3xl font-bold text-gradient mb-2">75+</div>
                <div className="text-sm text-muted-foreground">Team Members</div>
              </Card>
              <Card className="glass-card p-6 text-center">
                <div className="text-3xl font-bold text-gradient mb-2">4.8</div>
                <div className="text-sm text-muted-foreground">Glassdoor Rating</div>
              </Card>
              <Card className="glass-card p-6 text-center">
                <div className="text-3xl font-bold text-gradient mb-2">92%</div>
                <div className="text-sm text-muted-foreground">Employee Satisfaction</div>
              </Card>
              <Card className="glass-card p-6 text-center">
                <div className="text-3xl font-bold text-gradient mb-2">3</div>
                <div className="text-sm text-muted-foreground">Office Locations</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20" data-testid="section-careers-benefits">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4" data-testid="text-benefits-title">
              Why Work With Us
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We take care of our team with comprehensive benefits and perks
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="glass-card" data-testid={`card-benefit-${index}`}>
                <CardContent className="p-8">
                  <div className="w-14 h-14 rounded-md bg-primary/10 flex items-center justify-center mb-6">
                    <benefit.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-card" data-testid="section-careers-jobs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4" data-testid="text-openings-title">
              Open Positions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Find your perfect role and join our growing team
            </p>
          </div>

          <div className="space-y-4">
            {jobs.map((job, index) => (
              <Card key={index} className="glass-card" data-testid={`card-job-${index}`}>
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <h3 className="text-xl font-semibold">{job.title}</h3>
                        <Badge variant="outline">{job.department}</Badge>
                      </div>
                      <p className="text-muted-foreground text-sm mb-4 lg:mb-0">
                        {job.description}
                      </p>
                    </div>
                    <div className="flex flex-wrap items-center gap-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        {job.location}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        {job.type}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Briefcase className="h-4 w-4" />
                        {job.experience}
                      </div>
                      <Link href="/contact">
                        <Button className="gap-2" data-testid={`button-apply-${index}`}>
                          Apply Now
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary" data-testid="section-careers-cta">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">
            Don't See Your Role?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            We're always interested in meeting talented people. Send us your resume 
            and we'll reach out when we have a suitable opening.
          </p>
          <Link href="/contact">
            <Button variant="secondary" size="lg" className="gap-2" data-testid="button-general-apply">
              Send Your Resume
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
