'use client';

import { useState, useEffect } from 'react';
import { GlobalStyle } from '../styles/global-styles';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import { Header } from '../components/Header';
import AtomLoadingScreen from '../components/LoadingScreen';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const simulateProgress = () => {
      let current = 0;
      const interval = setInterval(() => {
        current += Math.random() * 20;
        if (current >= 100) {
          current = 100;
          clearInterval(interval);
          setTimeout(() => setLoading(false), 500);
        }
        setProgress(current);
      }, 200);
    };

    simulateProgress();
  }, []);

  return (
    <html lang="pt-BR">
      <head>
        <title>Portfólio | Desenvolvedor</title>
        <meta name="description" content="Portfólio profissional de desenvolvimento" />
      </head>
      <body>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          {loading && <AtomLoadingScreen progress={progress} />}
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
