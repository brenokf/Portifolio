import styled from 'styled-components';
import { motion } from 'framer-motion';

export const SkillsContainer = styled.section`
  position: relative;
  overflow: hidden;
`;

export const SkillsContent = styled.div`
  text-align: center;
`;

export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 2rem;
  margin-top: 3rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const SkillCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.gray};
  border-radius: 10px;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  z-index: 1;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 30px rgba(138, 43, 226, 0.3);
    
    &::before {
      height: 100%;
    }
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background: ${({ theme }) => theme.colors.primary};
    transition: height 0.3s ease;
    z-index: -1;
  }
`;

export const SkillIcon = styled.div`
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1rem;
`;

export const SkillName = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
`;

export const SkillLevel = styled.div`
  height: 5px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  margin-top: 1rem;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 5px;
  }
`;