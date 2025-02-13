import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 1rem;
  max-width: 1000px;
  margin: 0 auto;
`;

const SmallHeading = styled.h3`
  color: #64ffda;
  font-size: 1rem;
  font-weight: 400;
  margin-bottom: 1rem;
  opacity: 0;
`;

const MainHeading = styled.h1`
  color: #ccd6f6;
  font-size: clamp(40px, 8vw, 80px);
  font-weight: 600;
  margin: 0;
  opacity: 0;
`;

const SubHeading = styled.h2`
  color: #8892b0;
  font-size: clamp(30px, 6vw, 60px);
  font-weight: 600;
  margin: 0;
  margin-bottom: 2rem;
  opacity: 0;
`;

const Description = styled.p`
  color: #8892b0;
  font-size: 1.1rem;
  max-width: 540px;
  margin-bottom: 2rem;
  opacity: 0;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
  opacity: 0;
`;

const CTAButton = styled.a`
  display: inline-block;
  color: #64ffda;
  background: transparent;
  border: 1px solid #64ffda;
  border-radius: 4px;
  padding: 1.25rem 1.75rem;
  font-size: 0.9rem;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.25s ease;

  &:hover {
    background: rgba(100, 255, 218, 0.1);
    transform: translateY(-3px);
  }
`;

const ResumeButton = styled(CTAButton)`
  display: flex;
  align-items: center;
  gap: 8px;

  i {
    font-size: 1.1rem;
  }
`;

const Hero: React.FC = () => {
  const elementRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const timeline = gsap.timeline({ defaults: { ease: 'power3.out' } });

    timeline
      .to(elementRefs.current[0], { opacity: 1, y: -20, duration: 0.5 })
      .to(elementRefs.current[1], { opacity: 1, y: -20, duration: 0.5 }, '-=0.2')
      .to(elementRefs.current[2], { opacity: 1, y: -20, duration: 0.5 }, '-=0.2')
      .to(elementRefs.current[3], { opacity: 1, y: -20, duration: 0.5 }, '-=0.2')
      .to(elementRefs.current[4], { opacity: 1, y: -20, duration: 0.5 }, '-=0.2');
  }, []);

  return (
    <HeroSection id="hero">
      <SmallHeading ref={el => elementRefs.current[0] = el}>
        Hi, my name is
      </SmallHeading>
      <MainHeading ref={el => elementRefs.current[1] = el}>
        Alex Yuan.
      </MainHeading>
      <SubHeading ref={el => elementRefs.current[2] = el}>
        I build things for the web & beyond.
      </SubHeading>
      <Description ref={el => elementRefs.current[3] = el}>
        I'm a software engineer specializing in building exceptional digital experiences.
        Currently, I'm focused on building accessible, human-centered products while pursuing my
        Computer Engineering degree at the University of Toronto.
      </Description>
      <ButtonContainer ref={el => elementRefs.current[4] = el}>
        <CTAButton 
          href="#projects"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Check out my work!
        </CTAButton>
        <ResumeButton 
          href="/AlexYuanResume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fas fa-file-pdf"></i>
          Resume
        </ResumeButton>
      </ButtonContainer>
    </HeroSection>
  );
};

export default Hero; 