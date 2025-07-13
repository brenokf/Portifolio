'use client';

import { motion } from 'framer-motion';
import { FaReact, FaFigma, FaGithub, FaVuejs, FaAws, FaMicrosoft } from 'react-icons/fa';
import {
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiAdobephotoshop,
  SiJest,
  SiCypress,
  SiCss3,
  SiMui,
  SiHtmx
} from 'react-icons/si';
import {
  SkillCard,
  SkillIcon,
  SkillLevel,
  SkillName,
  SkillsContainer,
  SkillsContent,
  SkillsGrid
} from './styles';

const skills = [
  { icon: <FaReact />, name: 'React', level: 90 },
  { icon: <SiNextdotjs />, name: 'Next.js', level: 85 },
  { icon: <SiTypescript />, name: 'TypeScript', level: 80 },
  { icon: <SiJavascript />, name: 'JavaScript', level: 95 },
  { icon: <FaVuejs />, name: 'Vue.js', level: 70 },
  { icon: <FaAws />, name: 'AWS', level: 65 },
  { icon: <FaMicrosoft />, name: 'Azure', level: 60 },
  { icon: <SiJest />, name: 'Jest', level: 70 },
  { icon: <SiCypress />, name: 'Cypress', level: 65 },
  { icon: <SiHtmx />, name: 'HTM', level: 60 },
  { icon: <SiCss3 />, name: 'CSS', level: 85 },
  { icon: <SiMui />, name: 'Material-UI', level: 75 },
  { icon: <FaGithub />, name: 'GitHub', level: 90 },
  { icon: <FaFigma />, name: 'Figma', level: 75 },
  { icon: <SiAdobephotoshop />, name: 'Photoshop', level: 70 },
  { icon: <SiJavascript />, name: 'Segment', level: 60 },
  // Adicione outros principais se desejar
];

export const Skills = () => {
  return (
    <SkillsContainer id="skills" className="section">
      <div className="container">
        <SkillsContent>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="section-title">Minhas Habilidades</h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.7)', maxWidth: '700px', margin: '0 auto' }}>
              Tecnologias e ferramentas que domino para criar soluções incríveis e de alta performance.
            </p>
          </motion.div>

          <SkillsGrid>
            {skills.map((skill, index) => (
              <SkillCard
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <SkillIcon>{skill.icon}</SkillIcon>
                <SkillName>{skill.name}</SkillName>
                <SkillLevel style={{ '--level': `${skill.level}%` } as React.CSSProperties}>
                  <div style={{ width: `${skill.level}%`, height: '100%', background: '#8A2BE2', borderRadius: '5px' }}></div>
                </SkillLevel>
              </SkillCard>
            ))}
          </SkillsGrid>
        </SkillsContent>
      </div>
    </SkillsContainer>
  );
};