import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

interface Project {
  // Define the properties of the Project type here
}

interface ProjectCardProps {
  title?: string;
  description?: string;
  category?: string;
  imageUrl?: string;
  beforeImageUrl?: string;
  afterImageUrl?: string;
  onClick?: () => void;
  project: Project;
}

const ProjectCard = ({
  title = "Modern Office Building",
  description = "Complete renovation of a 10,000 sq ft commercial space with modern design elements and sustainable materials.",
  category = "Commercial",
  imageUrl = "https://images.unsplash.com/photo-1541971875076-8f970d573be6?w=800&q=80",
  beforeImageUrl = "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",

  afterImageUrl = "https://images.unsplash.com/photo-1541971875076-8f970d573be6?w=800&q=80",
  onClick = () => { },
  project,
}: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showAfterImage, setShowAfterImage] = useState(true); return (
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
            src={showAfterImage ? afterImageUrl : beforeImageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 ease-in-out"
            style={{ transform: isHovered ? "scale(1.05)" : "scale(1)" }}
          />

          {/* Before/After Toggle */}
          {beforeImageUrl && afterImageUrl && (
            <div
              className="absolute bottom-3 right-3 z-10"
              onClick={(e) => {
                e.stopPropagation();
                setShowAfterImage(!showAfterImage);
              }}
            >
              <Button
                variant="outline"
                size="sm"
                className="bg-white/90 hover:bg-white text-xs font-medium"
              >
                {showAfterImage ? "View Before" : "View After"}
              </Button>
            </div>
          )}

          {/* Category Badge */}
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

          {/* View Details Button - Only shows on hover */}
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
