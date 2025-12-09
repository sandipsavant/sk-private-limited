import { Link } from "wouter";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import logoImage from "@assets/Picsart_25-12-09_11-29-44-757[1]_1765271330376.png";

const services = [
  { title: "Social Media Marketing", href: "/services/social-media" },
  { title: "SEO Services", href: "/services/seo" },
  { title: "Web Design", href: "/services/web-design" },
  { title: "PPC Campaigns", href: "/services/ppc" },
];

const company = [
  { title: "About Us", href: "/about" },
  { title: "Portfolio", href: "/portfolio" },
  { title: "Careers", href: "/careers" },
  { title: "Blog", href: "/blog" },
];

const resources = [
  { title: "Plans & Pricing", href: "/pricing" },
  { title: "Contact", href: "/contact" },
  { title: "Privacy Policy", href: "/privacy" },
  { title: "Terms of Service", href: "/terms" },
];

export function Footer() {
  return (
    <footer className="bg-card border-t border-border" data-testid="footer-main">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <img src={logoImage} alt="Savant Kulkatni" className="h-16 w-auto" />
            </Link>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Transform your digital presence with our expert marketing solutions. 
              We help businesses grow through innovative strategies and data-driven results.
            </p>
            <div className="flex gap-2">
              <Button variant="outline" size="icon" data-testid="link-social-facebook">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" data-testid="link-social-twitter">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" data-testid="link-social-linkedin">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" data-testid="link-social-instagram">
                <Instagram className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4" data-testid="text-footer-services">Services</h3>
            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-muted-foreground hover:text-foreground transition-colors">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4" data-testid="text-footer-company">Company</h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-muted-foreground hover:text-foreground transition-colors">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4" data-testid="text-footer-resources">Resources</h3>
            <ul className="space-y-3">
              {resources.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-muted-foreground hover:text-foreground transition-colors">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>contact@savantkulkatni.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Mumbai, India</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground" data-testid="text-copyright">
              © 2024 Savant Kulkatni Private Limited. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
