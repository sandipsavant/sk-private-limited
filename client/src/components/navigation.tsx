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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2">
            <img src={logoImage} alt="Logo" className="h-12 w-auto" />
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center gap-2 flex-wrap">

            {/* MAIN NAV ITEMS */}
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <Button size="sm" className="white-glass-btn gap-2">
                  <item.icon className="h-4 w-4 text-black/70" />
                  {item.title}
                </Button>
              </Link>
            ))}

            {/* SERVICES */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <Button size="sm" className="white-glass-btn gap-2">
                <Grid3X3 className="h-4 w-4 text-black/70" />
                {t.nav.services}
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                />
              </Button>

              {/* DROPDOWN */}
              <div
                className={`absolute top-full left-0 mt-2 w-64 
                bg-white/40 backdrop-blur-lg border border-black/10 
                rounded-lg shadow-xl transition-all duration-200
                ${servicesOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
              >
                <div className="py-2">
                  {serviceItems.map((item) => (
                    <Link key={item.href} href={item.href}>
                      <div className="flex items-center gap-3 px-4 py-3 
                        hover:bg-white/60 transition rounded-md">
                        <item.icon className="h-5 w-5 text-black/70" />
                        <span className="text-sm text-black">{item.title}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT NAV ITEMS */}
            {rightNavItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <Button size="sm" className="white-glass-btn gap-2">
                  <item.icon className="h-4 w-4 text-black/70" />
                  {item.title}
                </Button>
              </Link>
            ))}
          </div>

          {/* TOGGLES + MOBILE MENU BUTTON */}
          <div className="flex items-center gap-2">
            <LanguageToggle />
            <ThemeToggle />

            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`lg:hidden absolute top-16 left-0 right-0 transition-all duration-300
          bg-white/30 backdrop-blur-xl border-t border-black/10
          ${mobileMenuOpen ? "opacity-100 visible max-h-screen" : "opacity-0 invisible max-h-0"}`}
      >
        <div className="px-4 py-4 space-y-3">

          {navItems.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setMobileMenuOpen(false)}>
              <div className="white-glass-btn flex items-center gap-3 px-4 py-3">
                <item.icon className="h-5 w-5 text-black/70" />
                {item.title}
              </div>
            </Link>
          ))}

          <div className="pt-2">
            <span className="px-4 text-xs uppercase text-black/70 tracking-wider">
              {t.nav.services}
            </span>
          </div>

          {serviceItems.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setMobileMenuOpen(false)}>
              <div className="white-glass-btn flex items-center gap-3 px-4 py-3">
                <item.icon className="h-5 w-5 text-black/70" />
                {item.title}
              </div>
            </Link>
          ))}

          <div className="pt-2">
            <span className="px-4 text-xs uppercase text-black/70 tracking-wider">
              {t.nav.portfolio}
            </span>
          </div>

          {rightNavItems.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setMobileMenuOpen(false)}>
              <div className="white-glass-btn flex items-center gap-3 px-4 py-3">
                <item.icon className="h-5 w-5 text-black/70" />
                {item.title}
              </div>
            </Link>
          ))}

        </div>
      </div>
    </nav>
  );
}
