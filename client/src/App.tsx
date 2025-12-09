import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";
import Home from "@/pages/home";
import About from "@/pages/about";
import SocialMediaMarketing from "@/pages/services/social-media";
import SEOServices from "@/pages/services/seo";
import WebDesign from "@/pages/services/web-design";
import PPCCampaigns from "@/pages/services/ppc";
import Pricing from "@/pages/pricing";
import Portfolio from "@/pages/portfolio";
import Blog from "@/pages/blog";
import Careers from "@/pages/careers";
import Contact from "@/pages/contact";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/services/social-media" component={SocialMediaMarketing} />
      <Route path="/services/seo" component={SEOServices} />
      <Route path="/services/web-design" component={WebDesign} />
      <Route path="/services/ppc" component={PPCCampaigns} />
      <Route path="/pricing" component={Pricing} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/blog" component={Blog} />
      <Route path="/careers" component={Careers} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="savant-ui-theme">
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
