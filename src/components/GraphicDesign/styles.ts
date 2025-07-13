import styled from 'styled-components';
import { motion } from 'framer-motion';
import Image from 'next/image';

export const GraphicDesignContainer = styled.section`
  background-color: ${({ theme }) => theme.colors.gray};
  position: relative;
  overflow: hidden;
  padding: 5rem 0;
`;

export const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 1.5rem;
  }
`;

export const GalleryItem = styled(motion.div)`
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  display: block;
  box-shadow: ${({ theme }) => theme.shadows.md};
  transition: all 0.3s ease;
  background: ${({ theme }) => theme.colors.lightGray};
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 30px rgba(138, 43, 226, 0.3);
    
    .overlay {
      opacity: 1;
    }
    
    .gallery-image {
      transform: scale(1.05);
    }
    
    .project-info {
      transform: translateY(0);
    }
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 100%;
  overflow: hidden;
`;

export const GalleryImage = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 5%;
  transition: transform 0.5s ease;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to top, 
    rgba(138, 43, 226, 0.9) 0%, 
    rgba(138, 43, 226, 0.4) 50%,
    transparent 100%
  );
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 1.5rem;
  opacity: 0;
  transition: opacity 0.3s ease;
  color: white;
  z-index: 2;
`;

export const ProjectInfo = styled.div`
  transform: translateY(20px);
  transition: transform 0.4s ease;
`;

export const ProjectTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
`;

export const ProjectCategory = styled.p`
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: 1rem;
  font-size: 0.9rem;
`;

export const ViewButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(5px);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 30px;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.25);
    transform: translateY(-2px);
  }
`;

export const CanvaIntegration = styled.div`
  background: ${({ theme }) => theme.colors.lightGray};
  border-radius: 10px;
  padding: 2.5rem;
  margin-top: 4rem;
  display: flex;
  align-items: center;
  gap: 2.5rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50px;
    right: -50px;
    width: 150px;
    height: 150px;
    background: linear-gradient(135deg, rgba(138, 43, 226, 0.1), transparent);
    border-radius: 50%;
    z-index: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    text-align: center;
    padding: 2rem;
  }
`;

export const CanvaIcon = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 20px;
  background: linear-gradient(135deg, #2c5eff, #00c4cc);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  z-index: 1;
  
  svg {
    font-size: 3rem;
    color: white;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 80px;
    height: 80px;
    
    svg {
      font-size: 2.5rem;
    }
  }
`;

export const CanvaContent = styled.div`
  flex: 1;
  z-index: 1;
`;

export const CanvaButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: linear-gradient(135deg, #2c5eff, #00c4cc);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 30px;
  font-weight: 500;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(44, 94, 255, 0.3);
  }
`;

export const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  position: relative;
  display: inline-block;
  text-align: center;
  width: 100%;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 4px;
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 2px;
  }
`;

export const SectionDescription = styled.p`
  color: rgba(255, 255, 255, 0.7);
  max-width: 700px;
  margin: 0 auto 3rem;
  text-align: center;
  line-height: 1.7;
`;

