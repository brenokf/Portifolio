'use client';

import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import {
  HeroContainer,
  HeroContent,
  HeroText,
  HeroTitle,
  HeroSubtitle,
  HeroButtons,
  HeroImage,
  PrimaryButton,
  SecondaryButton,
  SocialLink,
  SocialLinks,
  ProfileImage,
  BackgroundShape
} from './styles'
import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <HeroContainer id="hero">
      <div className="container">
        <HeroContent>
          <HeroText>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 style={{ color: '#8A2BE2', marginBottom: '1rem' }}>Olá, eu sou</h3>
              <HeroTitle>
                Desenvolvedor <span>FullStack</span>
              </HeroTitle>
              <HeroSubtitle>
                Transformo ideias em experiências digitais impactantes, com design intuitivo, alta performance e foco total na usabilidade.
              </HeroSubtitle>
            </motion.div>

            <HeroButtons
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <PrimaryButton href="#contact">
                  Contato
                </PrimaryButton>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <SecondaryButton href="#projects">
                  Projetos
                </SecondaryButton>
              </motion.div>
            </HeroButtons>

            <SocialLinks>
              {[
                { icon: <FaGithub />, url: 'https://github.com/brenokf' },
                { icon: <FaLinkedinIn />, url: 'https://www.linkedin.com/in/brenomelomendes/' }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'none' }}
                >
                  <SocialLink
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    {social.icon}
                  </SocialLink>
                </a>
              ))}
            </SocialLinks>
          </HeroText>

          <HeroImage>
            <ProfileImage
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
            />
          </HeroImage>
        </HeroContent>
      </div>

      <BackgroundShape />
    </HeroContainer>
  );
};