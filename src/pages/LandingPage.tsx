import { useEffect } from 'react';
import Part0 from '../components/part0';
import Part1 from '../components/part1';
import Part2 from '../components/part2';
import Part3 from '../components/part3';

export default function LandingPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Selenod';
  }, []);

  return (
    <div>
      <Part0 />
      <Part1 />
      <Part2 />
      <Part3 />
    </div>
  );
}
