import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  colors: {
    primary: '#0070f3',
    secondary: '#1db954',
    background: '#f5f5f5',
    text: '#333',
  },
  fonts: {
    main: 'Helvetica, Arial, sans-serif',
    code: 'Monaco, Menlo, monospace',
  },
  spacing: (factor: number) => `${factor * 8}px`,
};

const mixins = {
  flexCenter: `
    display: flex;
    justify-content: center;
    align-items: center;
  `,
};

export { theme, mixins };
