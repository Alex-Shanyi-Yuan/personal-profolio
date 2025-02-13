import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectsSection = styled.section`
  padding: 100px 0;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 25px;
  margin-top: 50px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled(motion.div)`
  background: var(--light-navy);
  border-radius: 4px;
  padding: 25px;
  position: relative;
  cursor: pointer;
  height: 100%;
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

  &:hover {
    transform: translateY(-5px);
  }
`;

const ProjectHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

const ProjectType = styled.span`
  color: var(--green);
  font-family: var(--font-mono);
  font-size: 0.85rem;
`;

const ProjectTitle = styled.h3`
  color: var(--lightest-slate);
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const ProjectDescription = styled.p`
  color: var(--slate);
  font-size: 0.9rem;
  margin-bottom: 15px;
`;

const TechList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  list-style: none;
  padding: 0;
  margin: 20px 0;
`;

const TechItem = styled.li`
  color: var(--slate);
  font-family: var(--font-mono);
  font-size: 0.75rem;
  padding: 5px 10px;
  background: var(--lightest-navy);
  border-radius: 3px;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 15px;
  margin-top: auto;
`;

const ProjectLink = styled.a`
  color: var(--lightest-slate);
  font-size: 1.2rem;
  transition: color 0.2s ease;

  &:hover {
    color: var(--green);
  }
`;

const FilterContainer = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 30px;
  flex-wrap: wrap;
`;

const FilterButton = styled.button<{ active: boolean }>`
  background: ${props => props.active ? 'var(--green)' : 'transparent'};
  color: ${props => props.active ? 'var(--navy)' : 'var(--green)'};
  border: 1px solid var(--green);
  padding: 8px 15px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 0.9rem;

  &:hover {
    background: ${props => props.active ? 'var(--green)' : 'rgba(100, 255, 218, 0.1)'};
  }
`;

const projectsData = [
  {
    title: "Tech Headline Summarizer",
    type: "AI & Automation",
    description: "Built an automated Python application using NewsAPI and OpenAI GPT-3.5 to fetch, summarize, and deliver tech headlines via email, reducing manual effort by 90%",
    tech: ["Python", "OpenAI API", "NewsAPI", "Email Automation"],
    links: {
      github: "https://github.com/Alex-Shanyi-Yuan/weekly-top-new",
      // live: "https://tech-summarizer.demo.com"
    },
    category: "AI"
  },
  {
    title: "Pedestrian Detection System",
    type: "Computer Vision",
    description: "Trained a Mask R-CNN model with ResNet-50 backbone, achieving 93.3% accuracy in pedestrian detection and segmentation",
    tech: ["PyTorch", "Deep Learning", "Computer Vision", "ResNet"],
    links: {
      // github: "https://github.com/Alex-Shanyi-Yuan/pedestrian-detection"
    },
    category: "ML"
  },
  {
    title: "Network Communication Systems",
    type: "Systems Programming",
    description: "Developed a UDP-based file transfer system with packetization and stop-and-wait protocol, achieving 99% data transmission accuracy",
    tech: ["C", "UDP/TCP", "Socket Programming", "Networking"],
    links: {
      // github: "https://github.com/Alex-Shanyi-Yuan/network-systems"
    },
    category: "Systems"
  },
  {
    title: "Social Media Platform",
    type: "Full Stack",
    description: "Built a RESTful server for managing user authentication, authorization, and data storage, designed to handle large-scale traffic",
    tech: ["React", "Node.js", "MongoDB", "RESTful API"],
    links: {
      // github: "https://github.com/Alex-Shanyi-Yuan/social-media",
      // live: "https://social-media.demo.com"
    },
    category: "Web"
  },
  {
    title: "Blockchain System",
    type: "Blockchain",
    description: "Designed and developed a blockchain prototype with Solidity smart contracts for secure data storage and user authentication",
    tech: ["Rust", "Solidity", "Blockchain", "Smart Contracts"],
    links: {
      github: "https://github.com/Alex-Shanyi-Yuan/Blockchain-Rust"
    },
    category: "Blockchain"
  }
];

const categories = ["All", "Web", "AI", "ML", "Systems", "Blockchain"];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3
    }
  }
};

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? projectsData
    : projectsData.filter(project => project.category === activeCategory);

  return (
    <ProjectsSection id="projects">
      <h2 className="section-heading">Projects</h2>
      
      <FilterContainer>
        {categories.map(category => (
          <FilterButton
            key={category}
            active={activeCategory === category}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </FilterButton>
        ))}
      </FilterContainer>

      <ProjectsGrid>
        <AnimatePresence mode='wait'>
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.title}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ delay: index * 0.1 }}
            >
              <ProjectHeader>
                <ProjectType>{project.type}</ProjectType>
              </ProjectHeader>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <TechList>
                {project.tech.map((tech, i) => (
                  <TechItem key={i}>{tech}</TechItem>
                ))}
              </TechList>
              <ProjectLinks>
                {project.links.github && (
                  <ProjectLink 
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Repository"
                  >
                    <i className="fab fa-github"></i>
                  </ProjectLink>
                )}
                {project.links.live && (
                  <ProjectLink 
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Live Demo"
                  >
                    <i className="fas fa-external-link-alt"></i>
                  </ProjectLink>
                )}
              </ProjectLinks>
            </ProjectCard>
          ))}
        </AnimatePresence>
      </ProjectsGrid>
    </ProjectsSection>
  );
};

export default Projects; 