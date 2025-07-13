import styled from 'styled-components';
import { motion } from 'framer-motion';

export const HeroContainer = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding-top: 5rem;
  position: relative;
  overflow: hidden;
`;

export const HeroContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column-reverse;
    text-align: center;
  }
`;

export const HeroText = styled.div`
  flex: 1;
  z-index: 2;
`;

export const HeroTitle = styled(motion.h1)`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  line-height: 1.2;

  span {
    color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 3rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 2.5rem;
  }
`;

export const HeroSubtitle = styled(motion.p)`
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 2rem;
  max-width: 600px;
`;

export const HeroButtons = styled(motion.div)`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`;

export const PrimaryButton = styled.a`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.light};
  padding: 0.75rem 2rem;
  border-radius: 30px;
  font-weight: 500;
  transition: all 0.3s ease;
  display: inline-block;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(138, 43, 226, 0.3);
  }
`;

export const SecondaryButton = styled.a`
  background: transparent;
  color: ${({ theme }) => theme.colors.light};
  padding: 0.75rem 2rem;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 30px;
  font-weight: 500;
  transition: all 0.3s ease;
  display: inline-block;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(138, 43, 226, 0.3);
  }
`;

export const HeroImage = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  z-index: 2;
`;

export const ProfileImage = styled(motion.div)`
  width: 350px;
  height: 350px;
  border-radius: 50%;
  background: linear-gradient(145deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
  position: relative;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(138, 43, 226, 0.4);

  &::before {
    content: '';
    position: absolute;
    top: 10px;
    left: 10px;
    right: 10px;
    bottom: 10px;
    background: url('/profile.jpg') center/cover no-repeat;
    border-radius: 50%;
    border: 5px solid ${({ theme }) => theme.colors.dark};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 300px;
    height: 300px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 250px;
    height: 250px;
  }
`;

export const SocialLinks = styled.div`
  position: absolute;
  left: 0;
  bottom: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  z-index: 2;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    position: relative;
    flex-direction: row;
    justify-content: center;
    bottom: 0;
    margin-top: 2rem;
  }
`;

export const SocialLink = styled(motion.a)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.light};
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    transform: translateY(-5px);
  }
`;

export const BackgroundShape = styled.div`
  position: absolute;
  top: -200px;
  right: -200px;
  width: 600px;
  height: 600px;
  border-radius: 50%;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
  filter: blur(100px);
  opacity: 0.2;
  z-index: 1;
`;