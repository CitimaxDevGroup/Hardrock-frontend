import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Hammer,
  Building2,
  Ruler,
  Truck,
  PaintBucket,
  HardHat,
  Shovel,
  Mountain,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface ServiceProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const Service: React.FC<ServiceProps> = ({ title, description, icon }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card className="h-full min-h-[190px] flex flex-col justify-between bg-white border-2 border-gray-100 hover:border-amber-500 transition-all duration-300">
        <CardHeader className="pb-2">
          <div className="bg-black p-3 rounded-full w-14 h-14 flex items-center justify-center mb-1">
            {icon}
          </div>
          <CardTitle className="text-xl font-bold">{title}</CardTitle>
        </CardHeader>
        <CardContent className="mt-auto">
          <CardDescription className="text-gray-600">
            {description}
          </CardDescription>
        </CardContent>
      </Card>
    </motion.div>
  );
};

interface ServicesSectionProps {
  title?: string;
  subtitle?: string;
  services?: ServiceProps[];
}

const ServicesSection: React.FC<ServicesSectionProps> = ({
  title = "Our Regular Products",
  subtitle = "We provide comprehensive gravel mining and aggregate supply solutions tailored to your specific needs",
  services = [
    {
      title: "G-1 Aggregates (Processed Product)",
      description:
        "100 % Crushed Aggregates — 20 mm to 40 mm",
      icon: <Shovel className="w-8 h-8 text-white" />,
    },
    {
      title: "3/4 Aggregates (Processed Product)",
      description:
        "100 % Crushed Aggregates — 10 mm to 20 mm",
      icon: <Shovel className="w-8 h-8 text-white" />,
    },
    {
      title: "3/8 Aggregates (Processed Product)",
      description:
        "100 % Crushed Aggregates — 6 mm to 10 mm",
      icon: <Shovel className="w-8 h-8 text-white" />,
    },
    {
      title: "Base Course (Processed Product)",
      description:
        "100 % Crushed Aggregates — Maximum 1.5in (DPWH Item 202)",
      icon: <Shovel className="w-8 h-8 text-white" />,
    },
    {
      title: "S-1 Manufactured Sand (Processed Product)",
      description:
        "100 % Manufactured — sand 0 to 5 mm",
      icon: <Shovel className="w-8 h-8 text-white" />,
    },
    {
      title: "Armor Rocks (Quarry Product)",
      description:
        "100 % blasted rock — Sizes ranges from 500 mm to 1500 mm",
      icon: <Mountain className="w-8 h-8 text-white" />,
    },
     {
      title: "Sub-base Materials (Quarry Product)",
      description:
        "100 % screen quarry materials — 0 mm to 75 mm Maximum of 2in (DPWH 200)",
      icon: <Mountain className="w-8 h-8 text-white" />,
    },
     {
      title: "Fill Materials (Quarry Product)",
      description:
        "100 % stripped materials — 0 mm to 75 mm",
      icon: <Mountain className="w-8 h-8 text-white" />,
    },
  ],
}) => {
  return (
    <section className="bg-gray-50 pb-5">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl font-bold text-gray-900 mb-2"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.5 }}
            transition={{ duration: 1.0 }}
          >
            {title}
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.5 }}
            transition={{ duration: 1.0, delay: 0.2 }}
          >
            {subtitle}
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Service
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
