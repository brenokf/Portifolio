import styled from 'styled-components';
import { motion } from 'framer-motion';

export const AboutContainer = styled.section`
  background-color: ${({ theme }) => theme.colors.gray};
  position: relative;
  overflow: hidden;
`;

export const AboutContent = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
  }
`;

export const AboutImage = styled.div`
  flex: 1;
  position: relative;
`;

export const ImageFrame = styled(motion.div)`
  width: 100%;
  height: 400px;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  box-shadow: ${({ theme }) => theme.shadows.lg};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &::before {
    content: '';
    position: absolute;
    top: 20px;
    left: 20px;
    width: 100%;
    height: 100%;
    border: 2px solid ${({ theme }) => theme.colors.primary};
    border-radius: 10px;
    z-index: -1;
  }
`;

export const AboutText = styled.div`
  flex: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    text-align: center;
  }
`;

export const AboutTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 50px;
    height: 4px;
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 2px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    &::after {
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

export const AboutDescription = styled.p`
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 1.5rem;
  line-height: 1.8;
`;

export const InfoList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin: 2rem 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

export const InfoItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  span {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 500;
  }
`;