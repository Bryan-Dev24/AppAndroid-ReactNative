import { useEffect, useState, useMemo } from 'react';
import { useColorScheme as _useColorScheme } from 'react-native';

/**
 * Hook personalizado que retorna o esquema de cores atual do dispositivo
 * Garante que sempre retornará um valor (padrão: 'light')
 * 
 * @returns {'light' | 'dark'} - O esquema de cores atual ('light' ou 'dark')
 * 
 * @example
 * const colorScheme = useColorScheme();
 * const backgroundColor = colorScheme === 'dark' ? '#000' : '#fff';
 */
export function useColorScheme() {
  const systemColorScheme = _useColorScheme();
  const [currentColorScheme, setCurrentColorScheme] = useState(
    systemColorScheme || 'light'
  );

  // Atualiza o esquema de cores quando o sistema mudar
  useEffect(() => {
    if (systemColorScheme) {
      setCurrentColorScheme(systemColorScheme);
    }
  }, [systemColorScheme]);

  // Memoiza o valor para evitar renderizações desnecessárias
  return useMemo(() => currentColorScheme, [currentColorScheme]);
}

/**
 * Hook auxiliar para verificar se o tema atual é escuro
 * 
 * @returns {boolean} - Verdadeiro se o tema for escuro
 * 
 * @example
 * const isDark = useIsDarkMode();
 */
export function useIsDarkMode() {
  const colorScheme = useColorScheme();
  return colorScheme === 'dark';
}
