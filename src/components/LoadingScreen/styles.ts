import styled from 'styled-components';
import { motion } from 'framer-motion';
export const LoadingContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #0A0A0A;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  overflow: hidden;
`;

export const LoadingContent = styled.div`
  position: relative;
  width: 100%;
  max-width: 500px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const GridBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(rgba(138, 43, 226, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(138, 43, 226, 0.1) 1px, transparent 1px);
  background-size: 30px 30px;
  opacity: 0.3;
`;

export const AtomContainer = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  perspective: 1000px;
`;

export const AtomCore = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 30px;
  height: 30px;
  background: #8A2BE2;
  border-radius: 50%;
  box-shadow: 
    0 0 20px #8A2BE2,
    0 0 40px rgba(138, 43, 226, 0.5);
  z-index: 10;
  transform: translate(-50%, -50%);
`;

export const Orbit3D = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  border: 1px dashed rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  transform: translate(-50%, -50%);
`;

export const Electron = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 100%;
  width: 12px;
  height: 12px;
  background: #FF2A6D;
  border-radius: 50%;
  box-shadow: 0 0 20px 5px #FF2A6D;
  transform: translate(-50%, -50%);
`

export const LoadingText = styled(motion.div)`
  color: #FFFFFF;
  font-size: 1.2rem;
  margin-top: 2rem;
  text-align: center;
  font-weight: 500;
  letter-spacing: 1px;
  max-width: 80%;
  font-family: 'Poppins', sans-serif;
`;

export const ProgressBarContainer = styled.div`
  width: 300px;
  height: 5px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  margin-top: 1.5rem;
  overflow: hidden;
`;

export const ProgressBar = styled(motion.div)`
  height: 100%;
  background: linear-gradient(
    90deg,
    #8A2BE2,
    #FF2A6D
  );
  border-radius: 5px;
`;