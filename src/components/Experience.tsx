import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ExperienceSection = styled.section`
  padding: 100px 0;
`;

const TimelineContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    width: 2px;
    background: var(--lightest-navy);
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -1px;

    @media (max-width: 768px) {
      left: 31px;
    }
  }
`;

const TimelineItem = styled(motion.div)<{ isLeft: boolean }>`
  padding: 10px 40px;
  position: relative;
  width: 50%;
  left: ${props => props.isLeft ? '0' : '50%'};

  @media (max-width: 768px) {
    width: 100%;
    padding-left: 70px;
    padding-right: 25px;
    left: 0;
  }
`;

const TimelineContent = styled.div`
  padding: 20px;
  background: var(--light-navy);
  border-radius: 4px;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    width: 25px;
    height: 25px;
    right: -67px;
    background: var(--green);
    border: 4px solid var(--navy);
    top: 15px;
    border-radius: 50%;
    z-index: 1;

    @media (max-width: 768px) {
      left: -46px;
      right: auto;
    }
  }
`;

const TimelinePeriod = styled.div`
  color: var(--green);
  font-family: var(--font-mono);
  font-size: 0.85rem;
  margin-bottom: 10px;
`;

const CompanyName = styled.h3`
  color: var(--lightest-slate);
  font-size: 1.2rem;
  margin-bottom: 5px;
`;

const JobTitle = styled.h4`
  color: var(--light-slate);
  font-size: 1rem;
  margin-bottom: 15px;
`;

const JobDescription = styled.ul`
  color: var(--slate);
  font-size: 0.9rem;
  list-style-type: none;
  padding: 0;

  li {
    position: relative;
    padding-left: 20px;
    margin-bottom: 10px;

    &::before {
      content: '▹';
      position: absolute;
      left: 0;
      color: var(--green);
    }
  }
`;

const experienceData = [
  {
    period: "May 2024 - April 2025",
    company: "AMD",
    title: "Full Stack Developer Intern",
    location: "Toronto, ON",
    description: [
      "Developed a regression management web application using Vue3, Node.js, and PostgreSQL, improving data visualization for 2,000+ engineers",
      "Designed and implemented a JWT token-based authentication system with RBAC, reducing unauthorized access incidents by 90%",
      "Built an automated CI/CD pipeline using GitHub Actions, reducing deployment time by 30% and improving code quality"
    ]
  },
  {
    period: "May 2023 - Aug 2023",
    company: "University of Toronto",
    title: "Silicon Design Engineer Intern",
    location: "Toronto, ON",
    description: [
      "Developed Verilog code for FPGA-Python communication, reducing latency by 80% and enabling real-time data processing",
      "Created comprehensive test benches covering 92% of the source code, ensuring robust functionality",
      "Implemented I2C and SPI protocols for peripheral communication, improving data transfer efficiency by 50%"
    ]
  },
  {
    period: "Jan 2023 - Aug 2023",
    company: "Accelbyte Inc.",
    title: "Software Engineer Intern",
    location: "Toronto, ON",
    description: [
      "Expanded cloud services to support HTTP, gRPC, and RESTful endpoints, improving API flexibility and reducing development time by 30%",
      "Designed a hybrid storage solution using AWS EC2 and S3, reducing costs by 20% while maintaining performance",
      "Automated CI/CD pipelines using Jenkins, reducing DevOps workload by 2 hours per release"
    ]
  },
  {
    period: "May 2022 - Aug 2022",
    company: "F8th Inc.",
    title: "Data Scientist, Machine Learning Engineer Intern",
    location: "Toronto, ON",
    description: [
      "Developed an active learning model with 98% accuracy, reducing training time by 80% and securing partnerships for the company",
      "Presented the model at the 2022 'FinTech' event, leading to increased business opportunities"
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

const Experience: React.FC = () => {
  return (
    <ExperienceSection id="experience">
      <h2 className="section-heading">Experience</h2>
      <TimelineContainer
        as={motion.div}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {experienceData.map((experience, index) => (
          <TimelineItem
            key={index}
            isLeft={index % 2 === 0}
            variants={itemVariants}
          >
            <TimelineContent>
              <TimelinePeriod>{experience.period}</TimelinePeriod>
              <CompanyName>{experience.company}</CompanyName>
              <JobTitle>{experience.title} | {experience.location}</JobTitle>
              <JobDescription>
                {experience.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </JobDescription>
            </TimelineContent>
          </TimelineItem>
        ))}
      </TimelineContainer>
    </ExperienceSection>
  );
};

export default Experience; 