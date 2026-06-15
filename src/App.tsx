import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import UiUxDesigns from './components/UiUxDesigns';

export default function App() {
  const [hash, setHash] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setHash(window.location.hash);
      window.scrollTo({ top: 0, behavior: 'instant' as any });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  if (hash === '#ui-ux') {
    return <UiUxDesigns />;
  }

  return (
    <main className="bg-black">
      <Hero />
      <About />
      <Features />
    </main>
  );
}
