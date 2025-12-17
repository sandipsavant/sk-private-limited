"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Layout } from "@/components/layout";
import { useToast } from "@/hooks/use-toast";
import { motion, AnimatePresence } from "framer-motion";

const contactInfo = [
  { icon: Mail, title: "Email", value: "contact@savantkulkatni.com", href: "mailto:contact@savantkulkarni.com" },
  { icon: Phone, title: "Phone", value: "+91 7350191697", href: "tel:+917350191697" },
  { icon: Phone, title: "Alternate", value: "+91 9322466726", href: "tel:+919322466726" },
  { icon: MapPin, title: "Address", value: "Pune , Dighi " },
  { icon: Clock, title: "Hours", value: "Mon - Fri: 9:00 AM - 6:00 PM" },
];

const services = [
  "Social Media Marketing",
  "SEO Services",
  "Web Design & Development",
  "PPC Campaigns",
  "Content Marketing",
  "Logo & Branding Design",
  "Video Creation",
  "Graphic Design",
  "Bulk SMS",
  "Bulk WhatsApp",
  "Other",
];

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);

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

    const form = new FormData();
    form.append("access_key", "05b19797-eb05-4550-9187-283e597dd539");
    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("phone", formData.phone);
    form.append("company", formData.company);
    form.append("service", formData.service);
    form.append("message", formData.message);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: form,
    });

    const result = await res.json();
    setIsSubmitting(false);

    if (result.success) {
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
    } else {
      toast({
        title: "Oops!",
        description: "Something went wrong. Try again!",
        variant: "destructive",
      });
    }
  };

  return (
    <Layout>

      {/* HERO */}
      <section className="py-24 bg-gradient-to-b from-primary/10 to-background">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl font-bold mb-4"
          >
            Get in <span className="text-primary">Touch</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Ready to grow your business? Send us a message. We respond quickly.
          </motion.p>
        </div>
      </section>

      {/* CONTACT FORM SECTION */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-3 gap-10">

          {/* FORM */}
          <div className="lg:col-span-2">
            <Card className="backdrop-blur-xl bg-white/40 dark:bg-black/30 border border-white/20 shadow-xl">
              <CardContent className="p-8">
                {isSubmitted ? (
                  <div className="text-center py-14">
                    <CheckCircle className="h-14 w-14 text-primary mx-auto mb-4" />
                    <h3 className="text-3xl font-bold">Thank You!</h3>
                    <p className="text-muted-foreground">Your message has been sent.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">

                    {/* NAME + EMAIL */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label>Full Name *</Label>
                        <Input required value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                      </div>

                      <div>
                        <Label>Email *</Label>
                        <Input type="email" required value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                      </div>
                    </div>

                    {/* PHONE + COMPANY */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label>Phone</Label>
                        <Input value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>

                      <div>
                        <Label>Company</Label>
                        <Input value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        />
                      </div>
                    </div>

                    {/* SERVICE DROPDOWN */}
                    <div>
                      <Label>Service Interested In</Label>

                      <div className="relative">
                        <button
                          type="button"
                          onClick={() => setServiceOpen(!serviceOpen)}
                          className="w-full border bg-background/40 dark:bg-background/60 px-4 py-3 rounded-lg text-left"
                        >
                          {formData.service || "Select a service"}
                        </button>

                        <AnimatePresence>
                          {serviceOpen && (
                            <motion.div
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              className="absolute z-50 w-full mt-2 p-2 rounded-xl bg-white dark:bg-neutral-900 border shadow-xl"
                            >
                              {services.map((s) => (
                                <div
                                  key={s}
                                  onClick={() => {
                                    setFormData({ ...formData, service: s });
                                    setServiceOpen(false);
                                  }}
                                  className="px-3 py-2 rounded-lg cursor-pointer hover:bg-primary/10 dark:hover:bg-primary/20"
                                >
                                  {s}
                                </div>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>

                    {/* MESSAGE */}
                    <div>
                      <Label>Message *</Label>
                      <Textarea rows={5} required value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </div>

                    <Button type="submit" className="w-full py-6 text-lg" disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." : <>Send Message <Send className="ml-2 h-4 w-4" /></>}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>

          {/* CONTACT DETAILS */}
          <div className="space-y-6">
            <Card className="backdrop-blur-xl bg-white/40 dark:bg-black/30 border border-white/20 shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-6">Contact Details</h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center">
                        <info.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium">{info.title}</div>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-sm text-muted-foreground hover:text-primary"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-sm text-muted-foreground">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

        </div>
      </section>
    </Layout>
  );
}
