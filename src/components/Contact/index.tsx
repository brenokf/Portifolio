'use client';

import { motion } from 'framer-motion';
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { ContactContainer, ContactContent, ContactForm, ContactIcon, ContactInfo, ContactItem, ContactList, ContactText, Input, InputGroup, SubmitButton, TextArea } from './styles';


export const Contact = () => {
  return (
    <ContactContainer id="contact" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Entre em Contato</h2>
        </motion.div>

        <ContactContent>
          <ContactInfo>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p style={{ color: 'rgba(255, 255, 255, 0.7)', marginBottom: '2rem' }}>
                Estou disponível para oportunidades de trabalho freelance. Entre em contato comigo e responderei o mais breve possível.
              </p>

              <ContactList>
                <ContactItem>
                  <ContactIcon>
                    <FaWhatsapp size={24} />
                  </ContactIcon>
                  <ContactText>
                    <h4>WhatsApp</h4>
                    <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
                      +55 (11) 99999-9999
                    </a>
                  </ContactText>
                </ContactItem>

                <ContactItem>
                  <ContactIcon>
                    <FaEnvelope size={20} />
                  </ContactIcon>
                  <ContactText>
                    <h4>Email</h4>
                    <a href="mailto:contato@portfolio.com">
                      contato@portfolio.com
                    </a>
                  </ContactText>
                </ContactItem>

                <ContactItem>
                  <ContactIcon>
                    <FaMapMarkerAlt size={20} />
                  </ContactIcon>
                  <ContactText>
                    <h4>Localização</h4>
                    <p>São Paulo, Brasil</p>
                  </ContactText>
                </ContactItem>
              </ContactList>
            </motion.div>
          </ContactInfo>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <ContactForm>
              <InputGroup>
                <Input type="text" placeholder="Seu nome" required />
                <Input type="email" placeholder="Seu email" required />
              </InputGroup>

              <Input type="text" placeholder="Assunto" required />
              <TextArea placeholder="Sua mensagem" required></TextArea>

              <SubmitButton
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Enviar Mensagem
              </SubmitButton>
            </ContactForm>
          </motion.div>
        </ContactContent>
      </div>
    </ContactContainer>
  );
};