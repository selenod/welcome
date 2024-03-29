import './styles/part2.css';
import halfWindow from '../assets/images/halfWindow.png';
import { useTranslation } from 'react-i18next';
import i18n from '../locale';

export default function Part2() {
  const { t } = useTranslation(['page']);

  return (
    <div className="Part2">
      <div className="preset">
        <div>
          <div className="section">
            <div
              className="icon"
              style={{
                backgroundColor: '#f2dadc',
              }}
            >
              <svg viewBox="0 0 20 20" fill="#e5737e">
                <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" />
              </svg>
            </div>
            <p
              className={`title ${i18n.language === 'ko' ? null : 'urbanist'}`}
            >
              {t('writ4')}
            </p>
            <p className="detail">
              {t('writ5')}
              <br />
              {t('writ6')}
            </p>
          </div>
          <div className="section">
            <div
              className="icon"
              style={{
                backgroundColor: '#efdaf2',
              }}
            >
              <svg viewBox="0 0 20 20" fill="#d673e5">
                <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z" />
              </svg>
            </div>
            <p
              className={`title ${i18n.language === 'ko' ? null : 'urbanist'}`}
            >
              {t('writ15')}
            </p>
            <p className="detail">
              {t('writ16')}
              <br />
              {t('writ17')}
            </p>
          </div>
          <div className="section">
            <div
              className="icon"
              style={{
                backgroundColor: '#e0daf2',
              }}
            >
              <svg viewBox="0 0 20 20" fill="#9173e5">
                <path d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1zm-5 8.274l-.818 2.552c.25.112.526.174.818.174.292 0 .569-.062.818-.174L5 10.274zm10 0l-.818 2.552c.25.112.526.174.818.174.292 0 .569-.062.818-.174L15 10.274z" />
              </svg>
            </div>
            <p
              className={`title ${i18n.language === 'ko' ? null : 'urbanist'}`}
            >
              {t('writ10')}
            </p>
            <p className="detail">
              {t('writ11')}
              <br />
              {t('writ12')}
            </p>
          </div>
        </div>
      </div>
      <img src={halfWindow} alt="" />
    </div>
  );
}
