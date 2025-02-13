import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const SkillsSection = styled.section`
  padding: 100px 0;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  margin-top: 50px;
`;

const SkillCategory = styled.div`
  margin-bottom: 40px;
`;

const CategoryTitle = styled.h3`
  color: var(--green);
  font-size: 1.2rem;
  margin-bottom: 20px;
`;

const SkillCard = styled(motion.div)`
  background: var(--light-navy);
  padding: 20px;
  border-radius: 4px;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    background: var(--lightest-navy);
  }
`;

const SkillName = styled.h4`
  color: var(--lightest-slate);
  font-size: 1.1rem;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ProgressContainer = styled.div`
  position: relative;
  padding-top: 20px;
  margin-bottom: 5px;
`;

const SkillLevel = styled.div<{ level: number }>`
  width: 100%;
  height: 6px;
  background: var(--navy);
  border-radius: 3px;
  overflow: visible;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: ${props => props.level}%;
    background: var(--green);
    transition: width 1s ease;
    border-radius: 3px;
  }
`;

const PercentageTooltip = styled(motion.div)<{ level: number }>`
  position: absolute;
  top: -10px;
  left: calc(${props => props.level}% - 15px);
  transform: translate(-50%, -100%);
  background: var(--green);
  color: var(--navy);
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.75rem;
  font-family: var(--font-mono);
  font-weight: bold;
  pointer-events: none;
  white-space: nowrap;
  z-index: 1;

  &:after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 50%;
    transform: translateX(-50%);
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 4px solid var(--green);
  }
`;

const Pointer = styled(motion.div)<{ level: number }>`
  position: absolute;
  top: -2px;
  left: calc(${props => props.level}% - 3px);
  width: 10px;
  height: 10px;
  background: var(--green);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  box-shadow: 0 0 0 2px var(--light-navy);
`;

const skillsData = {
  languages: [
    { name: 'Java', level: 90 },
    { name: 'Python', level: 95 },
    { name: 'C/C++', level: 85 },
    { name: 'TypeScript', level: 90 },
    { name: 'JavaScript', level: 90 },
    { name: 'Golang', level: 80 },
    { name: 'Rust', level: 75 },
    { name: 'Ruby', level: 80 },
  ],
  frameworks: [
    { name: 'React', level: 95 },
    { name: 'Angular', level: 85 },
    { name: 'Vue', level: 90 },
    { name: 'Node.js', level: 90 },
    { name: 'FastAPI', level: 85 },
    { name: 'TensorFlow', level: 80 },
    { name: 'PyTorch', level: 85 },
  ],
  tools: [
    { name: 'Git', level: 95 },
    { name: 'Docker', level: 90 },
    { name: 'AWS', level: 85 },
    { name: 'Jenkins', level: 80 },
    { name: 'GitHub Actions', level: 90 },
    { name: 'Linux/Unix', level: 90 },
  ],
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const tooltipVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

const pointerVariants = {
  hidden: { scale: 0 },
  visible: { scale: 1 },
};

interface SkillCardProps {
  skill: { name: string; level: number };
  index: number;
  categoryIndex: number;
}

const SkillCardComponent: React.FC<SkillCardProps> = ({ skill, index, categoryIndex }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <SkillCard
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ 
        duration: 0.5,
        delay: index * 0.1 + categoryIndex * 0.2
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <SkillName>{skill.name}</SkillName>
      <ProgressContainer>
        <AnimatePresence>
          {isHovered && (
            <PercentageTooltip
              level={skill.level}
              variants={tooltipVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{ duration: 0.2 }}
            >
              {skill.level}%
            </PercentageTooltip>
          )}
        </AnimatePresence>
        <SkillLevel level={skill.level}>
          <AnimatePresence>
            {isHovered && (
              <Pointer
                level={skill.level}
                variants={pointerVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                transition={{ duration: 0.2 }}
              />
            )}
          </AnimatePresence>
        </SkillLevel>
      </ProgressContainer>
    </SkillCard>
  );
};

const Skills: React.FC = () => {
  return (
    <SkillsSection id="skills">
      <h2 className="section-heading">Skills</h2>
      
      {Object.entries(skillsData).map(([category, skills], categoryIndex) => (
        <SkillCategory key={category}>
          <CategoryTitle>
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </CategoryTitle>
          <SkillsGrid>
            {skills.map((skill, index) => (
              <SkillCardComponent
                key={skill.name}
                skill={skill}
                index={index}
                categoryIndex={categoryIndex}
              />
            ))}
          </SkillsGrid>
        </SkillCategory>
      ))}
    </SkillsSection>
  );
};

export default Skills; 