import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const NavContainer = styled.nav<{ scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
  background: ${props => props.scrolled ? '#0a192ffa' : 'transparent'};
  backdrop-filter: ${props => props.scrolled ? 'blur(10px)' : 'none'};
  transition: all 0.3s ease-in-out;
  z-index: 1000;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #64ffda;
  cursor: pointer;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: #ccd6f6;
  text-decoration: none;
  font-size: 0.9rem;
  position: relative;
  
  &:hover {
    color: #64ffda;
  }

  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -5px;
    left: 0;
    background-color: #64ffda;
    transition: width 0.3s ease-in-out;
  }

  &:hover::after {
    width: 100%;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: #64ffda;
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <NavContainer scrolled={scrolled}>
      <Logo onClick={() => scrollToSection('hero')}>AY</Logo>
      <NavLinks>
        <NavLink href="#about" onClick={(e) => {
          e.preventDefault();
          scrollToSection('about');
        }}>About</NavLink>
        <NavLink href="#skills" onClick={(e) => {
          e.preventDefault();
          scrollToSection('skills');
        }}>Skills</NavLink>
        <NavLink href="#experience" onClick={(e) => {
          e.preventDefault();
          scrollToSection('experience');
        }}>Experience</NavLink>
        <NavLink href="#projects" onClick={(e) => {
          e.preventDefault();
          scrollToSection('projects');
        }}>Projects</NavLink>
        <NavLink href="#contact" onClick={(e) => {
          e.preventDefault();
          scrollToSection('contact');
        }}>Contact</NavLink>
      </NavLinks>
      <MobileMenuButton>☰</MobileMenuButton>
    </NavContainer>
  );
};

export default Navbar; 