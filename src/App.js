import React from 'react';
import useWindowSize from './hooks/useWindowSize';
import useLocalStorage from './hooks/useLocalStorage'
import './App.css'

const App = () => {
  const [darkMode, setDarkMode] = useLocalStorage('darkMode', false);
  const { width } = useWindowSize();

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };


  const theme = width >= 768 ? (darkMode ? 'dark' : 'light') : 'light';

  localStorage.setItem('theme', theme);

  return (
    <div className={`App ${theme}`}>
      <h1>Theme Toggle App</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default App;