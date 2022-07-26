import { useEffect, useState } from 'react';
import './styles/feature.css';

export default function Feature() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    document.addEventListener('scroll', () => {
      setScrollProgress(window.scrollY);
    });
  }, []);

  return <div className="Feature"></div>;
}
