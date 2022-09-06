import './styles/part3.css';
import flame from '../assets/svgs/flame.svg';
import { useContext } from 'react';
import { dataContext } from '..';
import { useNavigate } from 'react-router-dom';
import { workspaceURL } from '../config/config';
import { useTranslation } from 'react-i18next';
import i18n from '../locale';

export default function Part3() {
  const { t } = useTranslation(['page']);

  const data = useContext(dataContext);
  const navigate = useNavigate();

  return (
    <div className="Part3">
      <img src={flame} alt="" />
      <div className="preset">
        <div>
          <p className={`title ${i18n.language === 'ko' ? null : 'urbanist'}`}>
            {t('writ13')}
          </p>
          <p className="detail">{t('writ14')}</p>
          {data?.isLoggedIn ? (
            <button
              onClick={() =>
                window.location.replace(
                  `${workspaceURL}/login/${localStorage.getItem('token')}/${
                    data?.uid
                  }/${data?.uname}`
                )
              }
            >
              {t('go_to_workspace')}
            </button>
          ) : (
            <button onClick={() => navigate('/login')}>
              {t('get_started')}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
