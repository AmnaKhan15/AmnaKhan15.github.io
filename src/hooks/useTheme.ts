
import { useEffect, useState } from 'react';

export function useTheme() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check if dark mode is enabled
    const isDark = document.documentElement.classList.contains('dark');
    setIsDarkMode(isDark);

    // Create a mutation observer to detect theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === 'attributes' &&
          mutation.attributeName === 'class'
        ) {
          const isDark = document.documentElement.classList.contains('dark');
          setIsDarkMode(isDark);
        }
      });
    });

    // Start observing the document element
    observer.observe(document.documentElement, { attributes: true });

    return () => {
      observer.disconnect();
    };
  }, []);

  return { isDarkMode };
}
