import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  onClick?: () => void;
}

const ProjectCard = ({
  title,
  description,
  category,
  imageUrl,
  onClick = () => {},
}: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -5 }}
      className="h-full"
    >
      <Card
        className="overflow-hidden h-full bg-white cursor-pointer transition-all duration-300 hover:shadow-xl"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={onClick}
      >
        <div className="relative overflow-hidden aspect-[4/3]">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 ease-in-out"
            style={{ transform: isHovered ? "scale(1.05)" : "scale(1)" }}
          />

          <div className="absolute top-3 left-3">
            <Badge
              variant="secondary"
              className="bg-primary/90 text-white hover:bg-primary"
            >
              {category}
            </Badge>
          </div>
        </div>

        <CardContent className="p-4">
          <h3 className="text-lg font-bold mb-2 text-gray-900">{title}</h3>
          <p className="text-sm text-gray-600 line-clamp-2">{description}</p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            className="mt-3"
          >
            <Button
              variant="outline"
              size="sm"
              className="w-full border-primary text-primary hover:bg-primary hover:text-white transition-colors"
            >
              View Details
            </Button>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;