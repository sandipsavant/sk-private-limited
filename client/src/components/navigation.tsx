import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown, Home, Users, Briefcase, FileText, Rocket, Phone, Grid3X3, Search, Monitor, Target, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import logoImage from "@assets/Picsart_25-12-09_11-29-44-757[1]_1765271330376.png";

const navItems = [
  { title: "Home", href: "/", icon: Home },
  { title: "About", href: "/about", icon: Users },
];

const serviceItems = [
  { title: "Social Media Marketing", href: "/services/social-media", icon: Grid3X3 },
  { title: "SEO Services", href: "/services/seo", icon: Search },
  { title: "Web Design", href: "/services/web-design", icon: Monitor },
  { title: "PPC Campaigns", href: "/services/ppc", icon: Target },
  { title: "Plans & Pricing", href: "/pricing", icon: DollarSign },
];

const rightNavItems = [
  { title: "Portfolio", href: "/portfolio", icon: Briefcase },
  { title: "Blog", href: "/blog", icon: FileText },
  { title: "Careers", href: "/careers", icon: Rocket },
  { title: "Contact", href: "/contact", icon: Phone },
];

export function Navigation() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const isActive = (href: string) => location === href;
  const isServiceActive = () => location.startsWith("/services") || location === "/pricing";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav" data-testid="nav-main">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          <Link href="/" className="flex items-center gap-2" data-testid="link-logo">
            <img src={logoImage} alt="Savant Kulkatni" className="h-12 w-auto" />
          </Link>

          <div className="hidden lg:flex items-center gap-1 flex-wrap">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <Button
                  variant={isActive(item.href) ? "secondary" : "ghost"}
                  size="sm"
                  className="gap-2"
                  data-testid={`link-nav-${item.title.toLowerCase()}`}
                >
                  <item.icon className="h-4 w-4 text-primary" />
                  {item.title}
                </Button>
              </Link>
            ))}

            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <Button
                variant={isServiceActive() ? "secondary" : "ghost"}
                size="sm"
                className="gap-2"
                data-testid="button-nav-services"
              >
                <Grid3X3 className="h-4 w-4 text-secondary" />
                Services
                <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
              </Button>

              <div
                className={`absolute top-full left-0 mt-1 w-64 glass-card rounded-md shadow-xl transition-all duration-200 ${
                  servicesOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
                }`}
              >
                <div className="py-2">
                  {serviceItems.map((item) => (
                    <Link key={item.href} href={item.href}>
                      <div
                        className={`flex items-center gap-3 px-4 py-3 hover-elevate transition-colors ${
                          isActive(item.href) ? "bg-accent" : ""
                        }`}
                        data-testid={`link-service-${item.title.toLowerCase().replace(/\s+/g, "-")}`}
                      >
                        <item.icon className="h-5 w-5 text-primary" />
                        <span className="text-sm font-medium">{item.title}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {rightNavItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <Button
                  variant={isActive(item.href) ? "secondary" : "ghost"}
                  size="sm"
                  className="gap-2"
                  data-testid={`link-nav-${item.title.toLowerCase()}`}
                >
                  <item.icon className="h-4 w-4 text-primary" />
                  {item.title}
                </Button>
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      <div
        className={`lg:hidden glass-card absolute top-16 left-0 right-0 transition-all duration-300 ${
          mobileMenuOpen ? "opacity-100 visible max-h-screen" : "opacity-0 invisible max-h-0"
        } overflow-hidden`}
      >
        <div className="px-4 py-4 space-y-2">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setMobileMenuOpen(false)}>
              <div
                className={`flex items-center gap-3 px-4 py-3 rounded-md hover-elevate ${
                  isActive(item.href) ? "bg-accent" : ""
                }`}
              >
                <item.icon className="h-5 w-5 text-primary" />
                <span className="font-medium">{item.title}</span>
              </div>
            </Link>
          ))}

          <div className="pt-2 pb-1">
            <span className="px-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Services
            </span>
          </div>
          {serviceItems.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setMobileMenuOpen(false)}>
              <div
                className={`flex items-center gap-3 px-4 py-3 rounded-md hover-elevate ${
                  isActive(item.href) ? "bg-accent" : ""
                }`}
              >
                <item.icon className="h-5 w-5 text-primary" />
                <span className="font-medium">{item.title}</span>
              </div>
            </Link>
          ))}

          <div className="pt-2 pb-1">
            <span className="px-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              More
            </span>
          </div>
          {rightNavItems.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setMobileMenuOpen(false)}>
              <div
                className={`flex items-center gap-3 px-4 py-3 rounded-md hover-elevate ${
                  isActive(item.href) ? "bg-accent" : ""
                }`}
              >
                <item.icon className="h-5 w-5 text-primary" />
                <span className="font-medium">{item.title}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
