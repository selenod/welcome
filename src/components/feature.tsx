import { useEffect, useState } from 'react';
import './styles/feature.css';

export default function Feature() {
  const [scrollProgress, setScrollProgress] = useState(0); // For scroll fade anim

  useEffect(() => {
    document.addEventListener('scroll', () => {
      setScrollProgress(((window.scrollY - 1000) / 500) * 100);
    });
  }, []);

  return <div className="Feature"></div>;
}
