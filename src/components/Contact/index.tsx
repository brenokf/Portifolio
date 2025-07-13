'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import {
  ContactContainer,
  ContactContent,
  ContactInfo,
  ContactForm,
  InputGroup,
  Input,
  TextArea,
  SubmitButton,
  ContactList,
  ContactItem,
  ContactIcon,
  ContactText,
  SectionTitle,
  SectionDescription,
  FormStatus
} from './styles';

export const Contact = () => {
  // Estado do formulário
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState({
    type: '',
    message: '',
    isSubmitting: false
  });

  // Manipulador de mudança de inputs
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Manipulador de envio do formulário
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Enviando mensagem...', isSubmitting: true });

    try {
      // Substitua com seu endpoint do Formspree
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message
        })
      });

      if (response.ok) {
        setStatus({
          type: 'success',
          message: 'Mensagem enviada com sucesso! Responderei em breve.',
          isSubmitting: false
        });
        // Limpar formulário
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        const error = await response.json();
        throw new Error(error.error || 'Erro ao enviar mensagem');
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: error.message || 'Ocorreu um erro. Tente novamente mais tarde.',
        isSubmitting: false
      });
    }
  };

  return (
    <ContactContainer id="contact">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <SectionTitle>Entre em Contato</SectionTitle>
          <SectionDescription>
            Estou disponível para oportunidades de trabalho freelance. Preencha o formulário ou entre em contato diretamente.
          </SectionDescription>
        </motion.div>

        <ContactContent>
          <ContactInfo>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <ContactList>
                <ContactItem>
                  <ContactIcon>
                    <FaWhatsapp size={24} />
                  </ContactIcon>
                  <ContactText>
                    <h4>WhatsApp</h4>
                    <a href="https://wa.me/5592995025846" target="_blank" rel="noopener noreferrer">
                      +55 (92) 99502-5846
                    </a>
                  </ContactText>
                </ContactItem>

                <ContactItem>
                  <ContactIcon>
                    <FaEnvelope size={20} />
                  </ContactIcon>
                  <ContactText>
                    <h4>Email</h4>
                    <a href="mailto:breno-kf@hotmail.com">
                      breno-kf@hotmail.com
                    </a>
                  </ContactText>
                </ContactItem>

                <ContactItem>
                  <ContactIcon>
                    <FaMapMarkerAlt size={20} />
                  </ContactIcon>
                  <ContactText>
                    <h4>Localização</h4>
                    <p>Paraná, Brasil</p>
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
            <ContactForm onSubmit={handleSubmit}>
              {status.message && (
                <FormStatus
                  className={status.type}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {status.message}
                </FormStatus>
              )}

              <InputGroup>
                <Input
                  type="text"
                  name="name"
                  placeholder="Seu nome"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  disabled={status.isSubmitting}
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Seu email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  disabled={status.isSubmitting}
                />
              </InputGroup>

              <Input
                type="text"
                name="subject"
                placeholder="Assunto"
                required
                value={formData.subject}
                onChange={handleChange}
                disabled={status.isSubmitting}
              />

              <TextArea
                name="message"
                placeholder="Sua mensagem"
                required
                value={formData.message}
                onChange={handleChange}
                disabled={status.isSubmitting}
              />

              <SubmitButton
                type="submit"
                whileHover={{ scale: status.isSubmitting ? 1 : 1.05 }}
                whileTap={{ scale: status.isSubmitting ? 1 : 0.95 }}
                disabled={status.isSubmitting}
              >
                {status.isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
              </SubmitButton>
            </ContactForm>
          </motion.div>
        </ContactContent>
      </div>
    </ContactContainer>
  );
};