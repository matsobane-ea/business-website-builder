import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Bot, Shield, Workflow, Cpu } from "lucide-react";

const recaps = [
  { title: "AI Call Agent", icon: Bot },
  { title: "Email Security Suite", icon: Shield },
  { title: "API Integrations", icon: Workflow },
  { title: "AI Business Systems", icon: Cpu },
];

const Recap = () => {
  return (
    <section id="recap" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            In The Last <span className="text-primary">Weeks</span>, We Built
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {recaps.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="p-6 bg-card border-l-4 border-l-primary hover:shadow-glow transition-all duration-300 hover:-translate-y-1">
                    <Icon className="w-10 h-10 text-primary mb-4" />
                    <h3 className="text-lg font-semibold">{item.title}</h3>
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

export default Recap;
