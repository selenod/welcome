import { useEffect, useState } from 'react';
import './styles/feature.css';

export default function Feature() {
  const [scrollProgress, setScrollProgress] = useState(0); // For scroll fade anim

  useEffect(() => {
    document.addEventListener('scroll', () => {
      if (window.scrollY < 1000) {
        setScrollProgress(0);
      } else {
        setScrollProgress(((window.scrollY - 1000) / 1000) * 100);
      }
    });
  }, []);

  return (
    <div className="Feature">
      <div
        className="animation"
        style={{
          top: '0vh',
          width: `${Math.pow(scrollProgress, 1.25)}%`,
          opacity: `${Math.pow(scrollProgress, 1.75) / 1000}`,
        }}
      />
      <div
        className="animation"
        style={{
          top: '50vh',
          width: `${Math.pow(scrollProgress, 1.25)}%`,
          opacity: `${Math.pow(scrollProgress, 1.75) / 1000}`,
        }}
      />
    </div>
  );
}
