import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ContactContainer = styled.section`
  position: relative;
  overflow: hidden;
`;

export const ContactContent = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 4rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

export const ContactInfo = styled.div``;

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

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
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

  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
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