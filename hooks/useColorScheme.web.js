import { useEffect, useState } from 'react';

// Hook para web que detecta o tema do sistema
const usePreferredColorScheme = () => {
  const [colorScheme, setColorScheme] = useState('light');

  useEffect(() => {
    // Função para verificar o tema do sistema
    const getColorScheme = () => {
      if (typeof window === 'undefined') return 'light';
      
      // Verifica se o navegador suporta a API de preferência de cores
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
      }
      return 'light';
    };

    // Define o tema inicial
    setColorScheme(getColorScheme());

    // Adiciona um listener para mudanças no tema do sistema
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => setColorScheme(getColorScheme());
    
    // Suporte para navegadores mais antigos
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
    } else {
      mediaQuery.addListener(handleChange);
    }

    // Limpa o listener quando o componente é desmontado
    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', handleChange);
      } else {
        mediaQuery.removeListener(handleChange);
      }
    };
  }, []);

  return colorScheme;
};

export function useColorScheme() {
  return usePreferredColorScheme();
}
