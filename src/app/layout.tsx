'use client';

import { GlobalStyle } from '../styles/global-styles';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import { Header } from '../components/Header';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <title>Portfólio | Desenvolvedor</title>
        <meta name="description" content="Portfólio profissional de desenvolvimento" />
      </head>
      <body>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}