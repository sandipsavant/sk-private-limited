import { useState } from "react";
import { Link, useLocation } from "wouter";
import {
  Menu,
  X,
  ChevronDown,
  Home,
  Users,
  Briefcase,
  FileText,
  Rocket,
  Phone,
  Grid3X3,
  Search,
  Monitor,
  Target,
  DollarSign,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageToggle } from "@/components/language-toggle";
import { useLanguage } from "@/components/language-provider";

import logoImage from "@assets/Picsart_25-12-09_11-29-44-757[1]_1765271330376.png";

export function Navigation() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const { t } = useLanguage();

  const navItems = [
    { title: t.nav.home, href: "/", icon: Home },
    { title: t.nav.about, href: "/about", icon: Users },
  ];

  const serviceItems = [
    { title: t.nav.socialMedia, href: "/services/social-media", icon: Grid3X3 },
    { title: t.nav.seo, href: "/services/seo", icon: Search },
    { title: t.nav.webDesign, href: "/services/web-design", icon: Monitor },
    { title: t.nav.ppc, href: "/services/ppc", icon: Target },
    { title: t.nav.pricing, href: "/pricing", icon: DollarSign },
  ];

  const rightNavItems = [
    { title: t.nav.portfolio, href: "/portfolio", icon: Briefcase },
    { title: t.nav.blog, href: "/blog", icon: FileText },
    { title: t.nav.careers, href: "/careers", icon: Rocket },
    { title: t.nav.contact, href: "/contact", icon: Phone },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">

          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2">
            <img src={logoImage} alt="Logo" className="h-12 w-auto" />
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center gap-2">

            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <Button
                  size="sm"
                  className={`white-glass-btn gap-2 transition-all duration-200
                    hover:scale-105 active:scale-95
                    ${location === item.href ? "ring-2 ring-primary/40" : ""}`}
                >
                  <item.icon className="h-4 w-4" />
                  {item.title}
                </Button>
              </Link>
            ))}

            {/* SERVICES DROPDOWN */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <Button
                size="sm"
                className="white-glass-btn gap-2 transition-all duration-200 hover:scale-105"
                onClick={() => setServicesOpen(!servicesOpen)}
              >
                <Grid3X3 className="h-4 w-4" />
                {t.nav.services}
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                />
              </Button>

              <div
                className={`absolute top-full left-0 mt-2 w-64
                  origin-top transform transition-all duration-200 ease-out
                  bg-white/40 backdrop-blur-xl border border-black/10
                  rounded-xl shadow-2xl
                  ${
                    servicesOpen
                      ? "opacity-100 scale-100 translate-y-0"
                      : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                  }`}
              >
                {serviceItems.map((item) => (
                  <Link key={item.href} href={item.href}>
                    <div className="flex items-center gap-3 px-4 py-3
                      transition-all duration-200 rounded-lg
                      hover:bg-white/60 active:scale-95">
                      <item.icon className="h-5 w-5" />
                      {item.title}
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {rightNavItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <Button
                  size="sm"
                  className="white-glass-btn gap-2 transition-all duration-200 hover:scale-105 active:scale-95"
                >
                  <item.icon className="h-4 w-4" />
                  {item.title}
                </Button>
              </Link>
            ))}
          </div>

          {/* TOGGLES & MOBILE BUTTON */}
          <div className="flex items-center gap-2">
            <LanguageToggle />
            <ThemeToggle />

            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden active:scale-90"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`lg:hidden absolute top-16 left-0 right-0
          transform transition-all duration-300 ease-out
          bg-white/30 backdrop-blur-xl border-t border-black/10
          ${
            mobileMenuOpen
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 -translate-y-4 scale-95 pointer-events-none"
          }`}
      >
        <div className="p-4 space-y-2">

          {[...navItems, ...serviceItems, ...rightNavItems].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
            >
              <div className="white-glass-btn flex items-center gap-3 px-4 py-3
                transition-all duration-200
                hover:bg-white/60 active:scale-95">
                <item.icon className="h-5 w-5" />
                {item.title}
              </div>
            </Link>
          ))}

        </div>
      </div>
    </nav>
  );
}

