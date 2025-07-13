import { createGlobalStyle } from 'styled-components';

// Extend DefaultTheme to include 'fonts'
declare module 'styled-components' {
  export interface DefaultTheme {
    fonts: {
      primary: string;
    };
    colors: {
      dark: string;
      light: string;
      primary: string;
      secondary: string;
      accent: string;
      gray: string;
      lightGray: string;
    };
    spacing: {
      lg: string;
      md: string;
      sm: string;
      xs: string;
    };
    breakpoints: {
      md: string;
      sm: string;
      lg: string;
      xl: string;
    };
    shadows: {
      lg: string;
      md: string;
      sm: string;

    };
  }
}

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: ${({ theme }) => theme.fonts.primary};
    background-color: ${({ theme }) => theme.colors.dark};
    color: ${({ theme }) => theme.colors.light};
    overflow-x: hidden;
    line-height: 1.6;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
  }

  .container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
  }

  .section {
    padding: 5rem 0;
  }

  .section-title {
    font-size: 2.5rem;
    margin-bottom: ${({ theme }) => theme.spacing.lg};
    position: relative;
    display: inline-block;

    &::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 0;
      width: 50px;
      height: 4px;
      background: ${({ theme }) => theme.colors.primary};
      border-radius: 2px;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    .section {
      padding: 3rem 0;
    }
    
    .section-title {
      font-size: 2rem;
    }
  }
`;