'use client';

import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { HeaderContainer, Nav, Logo, NavLink, NavLinks, MobileMenuButton, Overlay } from './styles'

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <HeaderContainer style={{ backgroundColor: scrolled ? 'rgba(10, 10, 10, 0.95)' : 'transparent' }}>
      <div className="container">
        <Nav>
          <Logo
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Port<span>fólio</span>
          </Logo>

          <NavLinks $isOpen={isMenuOpen}>
            <NavLink><a href="#hero" onClick={closeMenu}>Início</a></NavLink>
            <NavLink><a href="#about" onClick={closeMenu}>Sobre</a></NavLink>
            <NavLink><a href="#skills" onClick={closeMenu}>Habilidades</a></NavLink>
            <NavLink><a href="#projects" onClick={closeMenu}>Projetos</a></NavLink>
            <NavLink><a href="#contact" onClick={closeMenu}>Contato</a></NavLink>
          </NavLinks>

          <MobileMenuButton onClick={toggleMenu}>
            {isMenuOpen ? (
              <FaTimes size={24} color="#FFF" />
            ) : (
              <FaBars size={24} color="#FFF" />
            )}
          </MobileMenuButton>

          <Overlay $isOpen={isMenuOpen} onClick={closeMenu} />
        </Nav>
      </div>
    </HeaderContainer>
  );
};