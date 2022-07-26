import './styles/header.css';
import logo from '../assets/svgs/logo.svg';
import { useEffect, useState } from 'react';

export default function Header() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    document.addEventListener('scroll', () => {
      setScrollProgress(window.scrollY);
    });
  }, []);

  return (
    <div
      className="Header"
      style={{
        borderBottom:
          scrollProgress > 0 ? '1px solid var(--lineColor)' : undefined,
      }}
    >
      <div>
        <img src={logo} alt="selenod" />
      </div>
    </div>
  );
}
