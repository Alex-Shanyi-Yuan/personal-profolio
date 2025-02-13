import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ContactSection = styled.section`
  padding: 100px 0;
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
`;

const ContactTitle = styled.h2`
  font-size: clamp(40px, 5vw, 60px);
  margin-bottom: 20px;
  color: var(--lightest-slate);
`;

const ContactText = styled.p`
  color: var(--slate);
  margin-bottom: 50px;
  font-size: 1.1rem;
  line-height: 1.6;
`;

const ContactCard = styled(motion.div)`
  background: var(--light-navy);
  padding: 2rem;
  border-radius: 8px;
  margin-bottom: 2rem;
  box-shadow: 0 10px 30px -15px var(--navy-shadow);
`;

const ContactInfo = styled.div`
  margin: 2rem 0;
  
  a {
    color: var(--green);
    text-decoration: none;
    font-size: 1.2rem;
    display: inline-block;
    margin: 0.5rem 0;
    transition: all 0.2s ease;
    
    &:hover {
      color: var(--green);
      transform: translateY(-2px);
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-top: 2rem;
`;

const SocialLink = styled(motion.a)`
  color: var(--lightest-slate);
  font-size: 1.8rem;
  transition: all 0.3s ease;
  padding: 10px;
  border-radius: 50%;
  background: var(--lightest-navy);
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: var(--green);
    transform: translateY(-3px);
    background: var(--light-navy);
  }
`;

const ContactButton = styled(motion.a)`
  display: inline-block;
  background: transparent;
  color: var(--green);
  border: 1px solid var(--green);
  border-radius: 4px;
  padding: 1.25rem 1.75rem;
  font-size: 1rem;
  line-height: 1;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  margin-top: 50px;

  &:hover {
    background: rgba(100, 255, 218, 0.1);
    transform: translateY(-3px);
  }
`;

const Contact: React.FC = () => {
  return (
    <ContactSection id="contact">
      <ContactTitle>Get In Touch</ContactTitle>
      <ContactText>
        I'm currently looking for new opportunities and would love to hear from you.
        Whether you have a question or just want to say hi, feel free to reach out!
      </ContactText>

      <ContactCard
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <ContactInfo>
          <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
            <a href="mailto:alexsy.yuan@mail.utoronto.ca">
              <i className="fas fa-envelope"></i> alexsy.yuan@mail.utoronto.ca
            </a>
          </motion.div>
          <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
            <a href="tel:+16475730588">
              <i className="fas fa-phone"></i> +1 (647) 573-0588
            </a>
          </motion.div>
        </ContactInfo>

        <SocialLinks>
          <SocialLink
            href="https://github.com/Alex-Shanyi-Yuan"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5 }}
          >
            <i className="fab fa-github"></i>
          </SocialLink>
          <SocialLink
            href="https://www.linkedin.com/in/alex-shanyi-yuan/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5 }}
          >
            <i className="fab fa-linkedin"></i>
          </SocialLink>
        </SocialLinks>
      </ContactCard>

      <ContactButton
        href="mailto:alexsy.yuan@mail.utoronto.ca"
        whileHover={{ y: -3 }}
        whileTap={{ y: 0 }}
      >
        Say Hello
      </ContactButton>
    </ContactSection>
  );
};

export default Contact; 