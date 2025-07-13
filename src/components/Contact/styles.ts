import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ContactContainer = styled.section`
  background-color: ${({ theme }) => theme.colors.gray};
  position: relative;
  overflow: hidden;
  padding: 5rem 0;
`;

export const ContactContent = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 4rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

export const ContactInfo = styled.div`
  padding: 2rem 0;
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const InputGroup = styled.div`
  display: flex;
  gap: 1.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 1rem;
  background: ${({ theme }) => theme.colors.lightGray};
  border: none;
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.light};
  font-family: inherit;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 3px rgba(138, 43, 226, 0.3);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.4);
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 1rem;
  background: ${({ theme }) => theme.colors.lightGray};
  border: none;
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.light};
  font-family: inherit;
  font-size: 1rem;
  resize: vertical;
  min-height: 150px;
  transition: all 0.3s ease;

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 3px rgba(138, 43, 226, 0.3);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.4);
  }
`;

export const SubmitButton = styled(motion.button)`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.light};
  border: none;
  padding: 1rem 2rem;
  border-radius: 30px;
  font-weight: 500;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  width: fit-content;
  
  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(138, 43, 226, 0.3);
  }

  &:disabled {
    background: ${({ theme }) => theme.colors.lightGray};
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

export const ContactList = styled.ul`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const ContactItem = styled.li`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const ContactIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

export const ContactText = styled.div`
  h4 {
    font-size: 1.25rem;
    margin-bottom: 0.25rem;
  }
  
  p, a {
    color: rgba(255, 255, 255, 0.7);
    transition: color 0.3s ease;
    
    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
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

export const FormStatus = styled(motion.div)`
  padding: 1rem;
  border-radius: 5px;
  font-weight: 500;
  text-align: center;
  
  &.success {
    background: rgba(40, 167, 69, 0.15);
    color: #28a745;
  }
  
  &.error {
    background: rgba(220, 53, 69, 0.15);
    color: #dc3545;
  }
`;