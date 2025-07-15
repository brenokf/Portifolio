'use client';

import {
  AboutContainer,
  AboutContent,
  AboutImage,
  ImageFrame,
  AboutText,
  AboutTitle,
  AboutDescription,
  InfoList,
  InfoItem
} from './styles'
import { motion } from 'framer-motion';
import Image from 'next/image';
import profile from '../../assets/avatar.jpeg'
export const About = () => {
  return (
    <AboutContainer id="about" className="section">
      <div className="container">
        <AboutContent>
          <AboutImage>
            <ImageFrame
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: 300,
                minWidth: 300,
              }}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.7, type: 'spring' }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '50%',
                  boxShadow: '0 8px 32px rgba(138,43,226,0.25)',
                  background: 'linear-gradient(180deg, #1E1E1E 0%, #2D2D2D 100%)',
                  width: 220,
                  height: 220,
                  margin: '0 auto',
                  overflow: 'hidden',
                }}
              >
                <Image
                  src={profile}
                  alt="Sobre mim"
                  placeholder="blur"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                    borderRadius: '50%',
                    display: 'block',
                  }}
                  width={220}
                  height={220}
                  priority
                />
              </motion.div>
            </ImageFrame>
          </AboutImage>

          <AboutText>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <AboutTitle className="section-title">Sobre Mim</AboutTitle>
              <AboutDescription>
                Sou desenvolvedor fullstack a cerca de 5 anos
                focado em criar experiências digitais que realmente conectam
                pessoas e negócios.
              </AboutDescription>
              <AboutDescription>
                Tenho um olhar atento para design, performance
                e usabilidade, entregando soluções robustas,
                intuitivas e alinhadas aos objetivos do produto.
              </AboutDescription>

              <InfoList>
                <InfoItem>
                  <span>Nome:</span> Breno Melo
                </InfoItem>
                <InfoItem>
                  <span>Email:</span> breno-kf@hotmail.com
                </InfoItem>
                <InfoItem>
                  <span>Idade:</span> 33 anos
                </InfoItem>
                <InfoItem>
                  <span>De:</span> São José dos Pinhais - PR, Brasil
                </InfoItem>
              </InfoList>
            </motion.div>
          </AboutText>
        </AboutContent>
      </div>
    </AboutContainer>
  );
};