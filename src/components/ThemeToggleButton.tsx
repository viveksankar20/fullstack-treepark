'use client';

import { useTheme } from '@/app/theme-context';

const ThemeToggleButton: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 border rounded-md mt-4"
    >
      {theme === 'light' ? 'Switch to Dark Mode 🌙' : 'Switch to Light Mode ☀️'}
    </button>
  );
};

export default ThemeToggleButton;
