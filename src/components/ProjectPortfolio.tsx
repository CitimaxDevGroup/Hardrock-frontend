import React, { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
}

const defaultProjects: Project[] = [
  {
    id: "1",
    title: "HAI MPSA AREA (45 hectares)",
    description: `The HAI MPSA area is located in Barangay Cupang, Antipolo City with a total approved area of 45 hectares. It is bounded by two major river systems, namely; Kaybibit River and Nangka River. The MPSA was issued by the Department of Environment and Natural Resources on June 17, 2004. 
    \nThe whole 45-hectare area is underlain by massive basalt/andesite deposits of the Kinabuan Formation consisting mainly of altered spillitic basalt flows with intercalated, highly indurated sandstone, shale and chert beds. This type of basalt is the most ideal rock sought by the construction industry. The area is overlain by thin soil overburden materials ranging from 0.5 meters to 1.5 meters. Average thickness is set at 1.0 meter. However, a thick oxidized or weathered layer of about 10 – 15 meters occurs before fresh basalt materials are exposed.`,
    category: "Extraction",
    image:
      "/project1.png",
  },
  {
    id: "2",
    title: "Quarry Operation",
    description: `The company employs a contour mining method with about five (5) active benches from BL 74 to BL 130. The quarry benches have a width of 12 meters and a height of 9 meters trending in an east west direction. The active quarry area is about 10 hectares.
    \nThe quarry development (stripping) and waste disposal utilizes one (1) Caterpillar D8N bulldozer to expose fresh basalt. Drilling and blasting are done by a blasting contractor, BM Equipment and Resources Inc. using three (3) units 75mm diameter capacity hydraulic crawler drills. Loading operation are being done using three (3) units excavators, namely a VOLVO EC460 and 2 units VOLVO EC290 while hauling operations involves six (6) units Caterpillar 769B off-highway dump trucks.`,
    category: "Quarry",
    image:
      "/project2.png",
  },
  {
    id: "3",
    title: "Crushing Plants",
    description: `The company operates and maintains two (2) complete assembly rock crushing plant for the production of various aggregates and road base materials used in the construction industry. The main crushing plant, Plant No.1 is a 300 TPH capacity three stage rock processing plant using Nordberg (METSO) crushing equipments while Plant No.2 is a 100 TPH capacity two stage rock processing plant.`,
    category: "Crushing",
    image:
      "/project3.png",
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
    <section className="bg-gray-50" id="portfolio">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            className="text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Quarry & Crushing Operations
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Discover our quarry and crushing operations delivering high-quality aggregates with precision and sustainability.
          </motion.p>
        </div>

        <div className="flex flex-wrap justify-center mb-8 gap-2">
          {categories.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${filter === category
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
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  category={project.category}
                  imageUrl={project.image}
                  onClick={() => setSelectedProject(project)}
                />
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
                <div className="flex justify-center mb-4">
                  <h3 className="text-3xl font-bold text-center">{selectedProject.title}</h3>
                  {/* <button
                    onClick={() => setSelectedProject(null)}
                    aria-label="Close"
                    className="text-gray-500 hover:text-gray-700"
                  >
                    ✕
                  </button> */}
                </div>

                <div className="flex justify-center mb-2">
                  <img
                    src={selectedProject.image}
                    alt="Image"
                    className="w-[900px] h-[450px] object-cover rounded-lg"
                  />
                </div>

                <div className="mb-2">
                  <span className="inline-block bg-gray-200 text-gray-800 text-xs font-semibold px-3 py-1 rounded-full">
                    {selectedProject.category}
                  </span>
                </div>
                
                <p className="text-gray-700 whitespace-pre-line text-justify mb-2 leading-snug [&>p]:my-1">{selectedProject.description}</p>
                <div className="flex justify-end">
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