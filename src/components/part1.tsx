import './styles/part1.css';
import doubleWindows from '../assets/images/doubleWindows.png';
import { useTranslation } from 'react-i18next';
import i18n from '../locale';

export default function Part1() {
  const { t } = useTranslation(['page']);

  return (
    <div className="Part1">
      <div className="preset">
        <div>
          <p
            className={`comment ${i18n.language === 'ko' ? null : 'urbanist'}`}
          >
            <span>{t('writ2')}</span>
            <br />
            {t('writ3')}
          </p>
          <img className="double-windows-img" src={doubleWindows} alt="" />
        </div>
      </div>
    </div>
  );
}
