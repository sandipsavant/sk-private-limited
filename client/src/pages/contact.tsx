import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Layout } from "@/components/layout";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  { icon: Mail, title: "Email", value: "contact@savantkulkatni.com", href: "mailto:contact@savantkulkatni.com" },
  { icon: Phone, title: "Phone", value: "+91 98765 43210", href: "tel:+919876543210" },
  { icon: MapPin, title: "Address", value: "123 Business Hub, Andheri East, Mumbai 400069" },
  { icon: Clock, title: "Hours", value: "Mon - Fri: 9:00 AM - 6:00 PM" },
];

const services = [
  "Social Media Marketing",
  "SEO Services",
  "Web Design",
  "PPC Campaigns",
  "Content Marketing",
  "Other",
];

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      message: "",
    });

    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Layout>
      <section className="relative py-20 overflow-hidden" data-testid="section-contact-hero">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6" data-testid="text-contact-title">
              Get in <span className="text-gradient">Touch</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Ready to transform your digital presence? We'd love to hear from you. 
              Send us a message and we'll respond within 24 hours.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20" data-testid="section-contact-form">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <Card className="glass-card">
                <CardContent className="p-8">
                  {isSubmitted ? (
                    <div className="text-center py-12" data-testid="contact-success">
                      <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="h-10 w-10 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                      <p className="text-muted-foreground">
                        Your message has been sent successfully. We'll get back to you soon.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={(e) => handleChange("name", e.target.value)}
                            required
                            className="glass-input"
                            data-testid="input-name"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="john@example.com"
                            value={formData.email}
                            onChange={(e) => handleChange("email", e.target.value)}
                            required
                            className="glass-input"
                            data-testid="input-email"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            type="tel"
                            placeholder="+91 98765 43210"
                            value={formData.phone}
                            onChange={(e) => handleChange("phone", e.target.value)}
                            className="glass-input"
                            data-testid="input-phone"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="company">Company Name</Label>
                          <Input
                            id="company"
                            placeholder="Your Company"
                            value={formData.company}
                            onChange={(e) => handleChange("company", e.target.value)}
                            className="glass-input"
                            data-testid="input-company"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="service">Service Interested In</Label>
                        <Select value={formData.service} onValueChange={(value) => handleChange("service", value)}>
                          <SelectTrigger className="glass-input" data-testid="select-service">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            {services.map((service) => (
                              <SelectItem key={service} value={service}>
                                {service}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          placeholder="Tell us about your project and goals..."
                          value={formData.message}
                          onChange={(e) => handleChange("message", e.target.value)}
                          required
                          rows={5}
                          className="glass-input resize-none"
                          data-testid="input-message"
                        />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full gap-2"
                        disabled={isSubmitting}
                        data-testid="button-submit"
                      >
                        {isSubmitting ? (
                          "Sending..."
                        ) : (
                          <>
                            Send Message
                            <Send className="h-4 w-4" />
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="glass-card" data-testid="card-contact-info">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                  <div className="space-y-6">
                    {contactInfo.map((info, index) => (
                      <div key={index} className="flex gap-4">
                        <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <info.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <div className="font-medium">{info.title}</div>
                          {info.href ? (
                            <a href={info.href} className="text-muted-foreground text-sm hover:text-primary transition-colors">
                              {info.value}
                            </a>
                          ) : (
                            <div className="text-muted-foreground text-sm">{info.value}</div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card" data-testid="card-response-time">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-4">Quick Response</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    We typically respond to all inquiries within 24 hours during business days.
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-sm text-muted-foreground">Usually responds in 2-4 hours</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card overflow-hidden" data-testid="card-map">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-primary mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">Mumbai, India</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card" data-testid="section-contact-offices">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4" data-testid="text-offices-title">
              Our Offices
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Visit us at any of our office locations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { city: "Mumbai (HQ)", address: "123 Business Hub, Andheri East", phone: "+91 98765 43210" },
              { city: "Delhi", address: "456 Corporate Tower, Connaught Place", phone: "+91 98765 43211" },
              { city: "Bangalore", address: "789 Tech Park, Whitefield", phone: "+91 98765 43212" },
            ].map((office, index) => (
              <Card key={index} className="glass-card" data-testid={`card-office-${index}`}>
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <MapPin className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{office.city}</h3>
                  <p className="text-muted-foreground text-sm mb-2">{office.address}</p>
                  <p className="text-muted-foreground text-sm">{office.phone}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
