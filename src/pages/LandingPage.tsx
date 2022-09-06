import { useEffect, useState } from 'react';
import Part0 from '../components/part0';
import Part1 from '../components/part1';
import Part2 from '../components/part2';
import Part3 from '../components/part3';
import ResponsePage from './ResponsePage';

import i18n from '../locale';

export default function LandingPage() {
  const [isDone, setIsDone] = useState<boolean>(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Selenod';

    const translateCookie = document.cookie.match(
      '(^|;) ?translate=([^;]*)(;|$)'
    );
    if (translateCookie) {
      i18n.changeLanguage(translateCookie[2]);
    } else {
      const translate = window.navigator.language
        ? window.navigator.language === 'en-US'
          ? 'en'
          : 'ko'
        : 'en';
      i18n.changeLanguage(translate);
      document.cookie = `translate=${translate};max-age=${
        365 * 24 * 60 * 60 * 1000
      };path=/`;
    }

    setIsDone(true);
  }, []);

  return isDone ? (
    <div>
      <Part0 />
      <Part1 />
      <Part2 />
      <Part3 />
    </div>
  ) : (
    <ResponsePage />
  );
}
