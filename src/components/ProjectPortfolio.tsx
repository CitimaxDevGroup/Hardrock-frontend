import React, { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  beforeImage: string;
  afterImage: string;
}

const defaultProjects: Project[] = [
  {
    id: "1",
    title: "Riverside Gravel Pit",
    description:
      "Large-scale gravel extraction operation producing high-quality aggregate for regional infrastructure projects.",
    category: "Extraction",
    beforeImage:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    afterImage:
      "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=800&q=80",
  },
  {
    id: "2",
    title: "Highway 401 Aggregate Supply",
    description:
      "Supplied over 50,000 tons of premium gravel for major highway expansion project with strict quality specifications.",
    category: "Infrastructure",
    beforeImage:
      "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=800&q=80",
    afterImage:
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&q=80",
  },
  {
    id: "3",
    title: "Commercial Screening Plant",
    description:
      "State-of-the-art screening and washing facility producing multiple grades of aggregate for commercial applications.",
    category: "Processing",
    beforeImage:
      "https://images.unsplash.com/photo-1565636252824-5a0a7f7f0de9?w=800&q=80",
    afterImage:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
  },
  {
    id: "4",
    title: "Residential Development Supply",
    description:
      "Consistent supply of decorative and structural gravel for large residential development project over 18 months.",
    category: "Residential",
    beforeImage:
      "https://images.unsplash.com/photo-1519567770579-c2fc5e9c5208?w=800&q=80",
    afterImage:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
  },
  {
    id: "5",
    title: "Environmental Restoration",
    description:
      "Sustainable mining operation with comprehensive site restoration including wetland creation and native vegetation.",
    category: "Environmental",
    beforeImage:
      "https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?w=800&q=80",
    afterImage:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80",
  },
  {
    id: "6",
    title: "Custom Aggregate Blending",
    description:
      "Specialized blending operation creating custom aggregate mixes for unique engineering applications.",
    category: "Specialty",
    beforeImage:
      "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&q=80",
    afterImage:
      "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=800&q=80",
  },
];

const ProjectPortfolio = () => {
  const [filter, setFilter] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ["All", ...Array.from(new Set(defaultProjects.map((p) => p.category)))];

  const filteredProjects =
    filter === "All"
      ? defaultProjects
      : defaultProjects.filter((p) => p.category === filter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section className="py-16 bg-gray-50" id="portfolio">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            className="text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Mining Operations
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Explore our successful gravel mining projects showcasing quality extraction and environmental stewardship.
          </motion.p>
        </div>

        <div className="flex flex-wrap justify-center mb-8 gap-2">
          {categories.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                filter === category
                  ? "bg-gray-600 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {filteredProjects.length > 0 ? (
          <motion.div
            key={filter}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {filteredProjects.map((project) => (
              <motion.div key={project.id} variants={itemVariants}>
                <ProjectCard project={project} onClick={() => setSelectedProject(project)} />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="text-center py-12">
            <p className="text-xl text-gray-500">No projects found in this category.</p>
          </div>
        )}

        {selectedProject && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-75 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-lg">
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-bold">{selectedProject.title}</h3>
                  <button
                    onClick={() => setSelectedProject(null)}
                    aria-label="Close"
                    className="text-gray-500 hover:text-gray-700"
                  >
                    ✕
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Before</p>
                    <img
                      src={selectedProject.beforeImage}
                      alt="Before"
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">After</p>
                    <img
                      src={selectedProject.afterImage}
                      alt="After"
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                    {selectedProject.category}
                  </span>
                </div>
                <p className="text-gray-700">{selectedProject.description}</p>

                <div className="flex justify-end mt-6">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectPortfolio;
