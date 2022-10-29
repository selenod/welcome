import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import devLogoSvg from '../assets/svgs/dev.svg';

export default function DevelopersPage() {
  const { t } = useTranslation(['page']);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Developers - Selenod';
  }, []);

  return (
    <div
      style={{
        width: '100vw',
      }}
    >
      <div
        style={{
          position: 'relative',
          top: 64,
          padding: '15rem 0',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        <div>
          <img
            src={devLogoSvg}
            alt="Selenod Developers"
            width={300}
            style={{
              position: 'relative',
              left: '50%',
              transform: 'translateX(-50%)',
            }}
          />
          <div
            style={{
              position: 'relative',
              left: '50%',
              transform: 'translateX(-50%)',
              backgroundColor: 'var(--lineColor)',
              height: 1,
              width: '10rem',
              marginTop: '1.5rem',
            }}
          />
          <p
            style={{
              marginTop: '2rem',
              fontSize: '1.1rem',
              fontWeight: 600,
              textAlign: 'center',
              color: 'var(--textBlack)',
            }}
          >
            Yejoon Kim
          </p>
        </div>
        <div
          style={{
            marginTop: '10rem',
          }}
        >
          <p
            className="urbanist"
            style={{
              textAlign: 'center',
              fontWeight: 800,
              fontSize: '2rem',
              color: 'var(--textBlack)',
            }}
          >
            {t('dev1')}
          </p>
          <div
            style={{
              position: 'relative',
              left: '50%',
              transform: 'translateX(-50%)',
              backgroundColor: 'var(--lineColor)',
              height: 1,
              width: '10rem',
              marginTop: '1.5rem',
              marginBottom: '2rem',
            }}
          />
          <div
            style={{
              position: 'relative',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '25rem',
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
            }}
          >
            {[
              'choshinyoung',
              'Minibox',
              'PatrickKR',
              'ZerOne',
              'sejoon',
              'moomin',
              'YuBulliMe',
              'blooop',
            ].map((cont, index) => (
              <p
                key={index}
                style={{
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  textAlign: 'center',
                  color: 'var(--textBlack)',
                  paddingBottom: '3rem',
                  position: index >= 6 ? 'relative' : undefined,
                  left: index >= 6 ? '5rem' : 0,
                }}
              >
                {cont}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
