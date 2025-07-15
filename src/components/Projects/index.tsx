'use client';

import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import Image from 'next/image';
import CoffeDeliveryImage from '../../assets/projects/coffeedelivery/coffee.png';
import LumiereImage from '../../assets/projects/LUMIÈRE/cosmeticos.png';
import RestaurantMenuImage from '../../assets/projects/Restaurant-menu/restaurant.png';

import { ProjectDescription, ProjectImage, ProjectInfo, ProjectLink, ProjectLinks, ProjectsContainer, ProjectsContent, ProjectsGrid, ProjectTags, ProjectTitle, Tag } from './styles';

const projects = [
  {
    title: 'Coffe Delivery',
    description: 'Plataforma de e-commerce com carrinho, pagamento e dashboard administrativo.',
    tags: ['React', 'TypeScript', 'Vite', 'Styled-components', 'Zod', 'Phosphor'],
    image: CoffeDeliveryImage,
    demo: '#',
    code: '#',
  },
  {
    title: 'Lumière',
    description: 'E-commerce de cosméticos com checkout, carrinho e integração com API.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    image: LumiereImage,
    demo: '#',
    code: '#',
  },
  {
    title: 'Restaurant Menu',
    description: 'Aplicativo de cardápio digital para restaurantes com pedidos online.',
    tags: ['Vue', 'Vite', 'CSS', 'TypeScript'],
    image: RestaurantMenuImage,
    demo: '#',
    code: '#',
  },
];

export const Projects = () => {
  return (
    <ProjectsContainer id="projects" className="section">
      <div className="container">
        <ProjectsContent>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="section-title">Meus Projetos</h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.7)', maxWidth: '700px', margin: '0 auto' }}>
              Alguns dos projetos que desenvolvi, combinando criatividade e tecnologia para resolver problemas reais.
            </p>
          </motion.div>

          <ProjectsGrid>
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
                style={{ borderRadius: '10px', background: '#2D2D2D', overflow: 'hidden', position: 'relative', boxShadow: '0 12px 24px rgba(0,0,0,0.3)', transition: 'all 0.3s ease' }}
              >
                <ProjectImage>
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={500}
                    height={300}
                    style={{ width: '100%', height: 'auto' }}

                  />
                </ProjectImage>

                <ProjectInfo>
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <ProjectDescription>{project.description}</ProjectDescription>

                  <ProjectTags>
                    {project.tags.map((tag, tagIndex) => (
                      <Tag key={tagIndex}>{tag}</Tag>
                    ))}
                  </ProjectTags>

                  <ProjectLinks>
                    <ProjectLink href={project.demo} target="_blank" rel="noopener noreferrer">
                      <FaExternalLinkAlt /> Demo
                    </ProjectLink>
                    <ProjectLink href={project.code} target="_blank" rel="noopener noreferrer">
                      <FaGithub /> Código
                    </ProjectLink>
                  </ProjectLinks>
                </ProjectInfo>
              </motion.div>
            ))}
          </ProjectsGrid>
        </ProjectsContent>
      </div>
    </ProjectsContainer >
  );
};