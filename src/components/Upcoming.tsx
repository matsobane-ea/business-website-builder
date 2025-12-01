import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { ShieldAlert, Mail, TruckIcon, Gamepad2, Search } from "lucide-react";

const upcoming = [
  {
    title: "Anti-Phishing System",
    description: "Protects against spoofing, phishing & targeted attacks.",
    icon: ShieldAlert,
  },
  {
    title: "Email Automation Suite",
    description: "AI-powered smart email workflows.",
    icon: Mail,
  },
  {
    title: "Medical Logistics Platform",
    description: "Fast, on-demand delivery & tracking of medical products.",
    icon: TruckIcon,
  },
  {
    title: "PVP Wager Platform",
    description: "Player vs Player competitive gaming with secure wagering.",
    icon: Gamepad2,
  },
  {
    title: "SEO Optimization",
    description: "Advanced search engine optimization tools & analytics.",
    icon: Search,
  },
];

const Upcoming = () => {
  return (
    <section id="upcoming" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/50">Coming Soon</Badge>
            <h2 className="text-4xl md:text-5xl font-bold">
              What's <span className="text-primary">Next</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcoming.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="p-6 bg-card border-l-4 border-l-primary/50 hover:border-l-primary hover:shadow-glow transition-all duration-300 h-full">
                    <Icon className="w-10 h-10 text-primary mb-4" />
                    <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                    <p className="text-muted-foreground">{item.description}</p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Upcoming;
