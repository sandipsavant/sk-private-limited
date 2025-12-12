import { Link } from "wouter";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Layout } from "@/components/layout";

// PREMIUM GOLD PULSE — ALWAYS BLACK CARDS (DARK + LIGHT MODE)

const plans = [
  {
    name: "Free",
    price: "0",
    period: "/Month",
    features: ["24x7 Call Support"],
  },
  {
    name: "Basic",
    price: "4,999",
    period: "/Month",
    features: ["PPC Campaign", "Content Creation", "2 Video Creations", "6 Image Designs"],
  },
  {
    name: "Plus",
    price: "9,999",
    period: "/Month",
    features: ["PPC Campaign", "Content Creation", "4 Video Creations", "10 Image Designs", "2K Bulk WhatsApp", "Logo Design"],
  },
  {
    name: "Pro",
    price: "14,999",
    period: "/Month",
    features: ["PPC Campaign", "Content Creation", "3 Video Creations", "6 Image Designs", "3K Bulk WhatsApp", "2K Bulk SMS", "Logo Design", "Website Frontend (1 Month Maintenance Free)"],
  },
  {
    name: "Standard",
    price: "19,999",
    period: "/Month",
    features: ["PPC Campaign", "Content Creation", "8 Video Creations", "20 Image Designs", "4K Bulk WhatsApp", "3K Bulk SMS", "Logo Design", "Website Design & Hosting"],
  },
  {
    name: "Premium",
    price: "24,999",
    period: "/Month",
    features: ["PPC Campaign", "Content Creation", "10 Video Creations", "25 Image Designs", "5K Bulk WhatsApp", "4K Bulk SMS", "Logo Design", "Website Design & Hosting"],
  },
  {
    name: "Business",
    price: "29,999",
    period: "/Month",
    features: ["PPC Campaign", "Content Creation", "12 Video Creations", "30 Image Designs", "6K Bulk WhatsApp", "5K Bulk SMS", "Logo Design", "Website Design & Hosting", "SEO Services"],
  },
];

export default function Pricing() {
  return (
    <Layout>
      <style>{`
        /* GOLD PULSE ANIMATION */
        .gold-pulse {
          background: linear-gradient(135deg, #111, #000);
          position: relative;
          overflow: hidden;
        }

        .gold-pulse::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, rgba(255,215,0,0.1), rgba(255,215,0,0.6), rgba(255,215,0,0.1));
          animation: goldFlow 4s linear infinite;
        }

        @keyframes goldFlow {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        /* 3D TILT */
        .tilt-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .tilt-card:hover {
          transform: perspective(900px) rotateX(6deg) rotateY(-6deg) scale(1.03);
          box-shadow: 0 25px 50px rgba(0,0,0,0.5);
        }
      `}</style>

      <section className="py-20 text-center">
        <h1 className="text-5xl font-bold mb-4">Premium Pricing Plans</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Choose the perfect package tailored for your business growth.
        </p>
      </section>

      <section className="py-20 px-6 max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {plans.map((plan, index) => (
          <Card
            key={index}
            className="gold-pulse tilt-card rounded-2xl border border-yellow-500/20 shadow-xl text-white bg-black dark:bg-black"
          >
            <CardHeader className="text-center pb-0">
              <h3 className="text-3xl font-bold text-yellow-400">{plan.name}</h3>
              <p className="text-lg font-semibold mt-2">₹{plan.price} {plan.period}</p>
            </CardHeader>

            <CardContent className="pt-6">
              <ul className="space-y-3 text-sm">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <Check className="h-5 w-5 text-yellow-400 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link href="/contact">
                <Button className="w-full mt-6 bg-yellow-500 text-black hover:bg-yellow-400 font-bold">
                  Get Started <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="py-20 bg-primary text-center text-primary-foreground mt-10">
        <h2 className="text-3xl font-bold mb-4">Need a Custom Package?</h2>
        <p className="opacity-80 mb-8 max-w-xl mx-auto">
          We create tailored marketing strategies for all businesses.
        </p>
        <Link href="/contact">
          <Button variant="secondary" size="lg" className="gap-2">
            Contact Us <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </section>
    </Layout>
  );
}
