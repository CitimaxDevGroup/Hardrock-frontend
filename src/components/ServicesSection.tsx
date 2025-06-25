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
      <Card className="h-full bg-white border-2 border-gray-100 hover:border-amber-500 transition-all duration-300">
        <CardHeader className="pb-2">
          <div className="bg-amber-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
            {icon}
          </div>
          <CardTitle className="text-xl font-bold">{title}</CardTitle>
        </CardHeader>
        <CardContent>
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
  title = "Our Mining Services",
  subtitle = "We provide comprehensive gravel mining and aggregate supply solutions tailored to your specific needs",
  services = [
    {
      title: "Gravel Extraction",
      description:
        "Professional gravel mining operations using modern equipment and sustainable practices for optimal yield and quality.",
      icon: <Building2 className="w-8 h-8 text-amber-600" />,
    },
    {
      title: "Aggregate Processing",
      description:
        "Advanced screening, washing, and crushing services to produce aggregate materials to exact specifications.",
      icon: <Hammer className="w-8 h-8 text-amber-600" />,
    },
    {
      title: "Quality Testing",
      description:
        "Comprehensive material testing and quality assurance to ensure all aggregate meets industry standards and specifications.",
      icon: <Ruler className="w-8 h-8 text-amber-600" />,
    },
    {
      title: "Logistics & Delivery",
      description:
        "Reliable transportation and delivery services with our fleet of trucks to get materials to your site on time.",
      icon: <Truck className="w-8 h-8 text-amber-600" />,
    },
    {
      title: "Custom Blending",
      description:
        "Specialized aggregate blending services to create custom material mixes for unique project requirements.",
      icon: <PaintBucket className="w-8 h-8 text-amber-600" />,
    },
    {
      title: "Site Management",
      description:
        "Comprehensive site management and environmental monitoring ensuring sustainable mining practices and compliance.",
      icon: <HardHat className="w-8 h-8 text-amber-600" />,
    },
  ],
}) => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
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
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
