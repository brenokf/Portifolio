'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaPalette } from 'react-icons/fa';
import LogoImage from '@/assets/designers/logo/logo.png';
import BrandingImage from '@/assets/designers/branding/menu.jpg';
import PresentationImage from '@/assets/designers/presentation/business.png';
import SocialImage from '@/assets/designers/socialnetwork/limpeza.png'
import FlyerImage from '@/assets/designers/socialmedia/feira.png'
import ProductImage from '@/assets/designers/product/produto.png'

import {
  GraphicDesignContainer,
  GalleryGrid,
  GalleryItem,
  ImageContainer,
  GalleryImage,
  Overlay,
  ProjectInfo,
  ProjectTitle,
  ProjectCategory,
  ViewButton,
  CanvaIntegration,
  CanvaIcon,
  CanvaContent,
  CanvaButton,
  SectionTitle,
  SectionDescription
} from './styles';

export const GraphicDesign = () => {
  // Dados dos projetos de design
  const designProjects = [
    {
      title: 'Menu de Restaurante',
      category: 'Cardápio',
      image: BrandingImage,
      link: 'https://www.canva.com/design/DAF6kDR3SZU/xudahtzTzF0H-dXy7yP4RA/edit?utm_content=DAF6kDR3SZU&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton', // Link para seu projeto no Canva
    },
    {
      title: 'Logos Conquista Rubi',
      category: 'Logo',
      image: LogoImage,
      link: 'https://www.canva.com/design/DAGBJH0mgKA/7P_9i8lsuOwutN-CzrLOFA/edit?utm_content=DAGBJH0mgKA&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton',
    },
    // title: 'Flyer Promocional',
    //   category: 'Flyer',
    {
      title: 'Flyer Serviços Digitais',
      category: 'Flyer',
      image: PresentationImage,
      link: 'https://www.canva.com/design/DAGdI6fUkSI/5ZjOyBCNU-oQ9NMca23kxw/edit?utm_content=DAGdI6fUkSI&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton',
    },
    {
      title: 'Banner para Redes Sociais',
      category: 'Social Media',
      image: SocialImage,
      link: 'https://www.canva.com/design/...',
    },
    {
      title: 'Apresentação de Produtos',
      category: 'Apresentação',
      image: ProductImage,
      link: 'https://www.canva.com/design/DAGHBDRLvUQ/cRpcs5ZmeLQJLFqzWRV0hA/edit?utm_content=DAGHBDRLvUQ&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton',
    },
    {
      title: 'Convite Digital',
      category: 'Convite',
      image: FlyerImage,
      link: 'https://www.canva.com/design/DAGjQpoa6FU/WtZGIFOg_q6IhnGE6fGYZg/edit?utm_content=DAGjQpoa6FU&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton',
    },
  ];

  return (
    <GraphicDesignContainer id="design">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <SectionTitle>Design Gráfico</SectionTitle>
          <SectionDescription>
            Explore meus projetos de design gráfico, criados com criatividade e atenção aos detalhes para transmitir a mensagem de forma impactante.
          </SectionDescription>
        </motion.div>

        <GalleryGrid>
          {designProjects.map((project, index) => (
            <GalleryItem
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ImageContainer>
                <GalleryImage
                  src={project.image}
                  alt={project.title}
                  className="gallery-image"
                />
                <Overlay className="overlay">
                  <ProjectInfo className="project-info">
                    <ProjectTitle>{project.title}</ProjectTitle>
                    <ProjectCategory>{project.category}</ProjectCategory>
                    <ViewButton
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Ver no Canva <FaExternalLinkAlt />
                    </ViewButton>
                  </ProjectInfo>
                </Overlay>
              </ImageContainer>
            </GalleryItem>
          ))}
        </GalleryGrid>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <CanvaIntegration>
            <CanvaIcon>
              <FaPalette />
            </CanvaIcon>
            <CanvaContent>
              <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem', fontWeight: 600 }}>
                Todos meus projetos de design no Canva
              </h3>
              <p style={{
                color: 'rgba(255, 255, 255, 0.7)',
                marginBottom: '1.5rem',
                lineHeight: 1.7
              }}>
                Explore minha galeria completa de designs gráficos, incluindo logos, banners, apresentações e materiais promocionais criados com a plataforma Canva.
              </p>
              <CanvaButton
                href="https://www.canva.com/your-profile"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Ver Perfil Completo no Canva
              </CanvaButton>
            </CanvaContent>
          </CanvaIntegration>
        </motion.div>
      </div>
    </GraphicDesignContainer>
  );
};