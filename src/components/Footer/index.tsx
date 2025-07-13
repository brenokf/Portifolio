'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedinIn, FaDribbble, FaArrowUp } from 'react-icons/fa';
import { BackToTop, Copyright, FooterContainer, SocialLink, SocialLinks } from './styles'

export const Footer = () => {
  return (
    <FooterContainer>
      <motion.div whileHover={{ y: -5 }}>
        <BackToTop
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Voltar ao topo"
          type="button"
        >
          <FaArrowUp />
        </BackToTop>
      </motion.div>

      <div className="container">
        <SocialLinks>
          {[
            { icon: <FaGithub />, url: 'https://github.com' },
            { icon: <FaLinkedinIn />, url: 'https://linkedin.com' },
            { icon: <FaDribbble />, url: 'https://dribbble.com' },
          ].map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <SocialLink whileHover={{ y: -5 }}>{social.icon}</SocialLink>
            </a>
          ))}
        </SocialLinks>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ maxWidth: '600px', margin: '0 auto', color: 'rgba(255, 255, 255, 0.7)' }}
        >
          Vamos trabalhar juntos! Entre em contato para discutir como posso ajudar a transformar suas ideias em realidade.
        </motion.p>

        <Copyright>
          &copy; {new Date().getFullYear()} Portfólio. Todos os direitos reservados.
        </Copyright>
      </div>
    </FooterContainer>
  );
};