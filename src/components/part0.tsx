import './styles/part0.css';
import titleImg from '../assets/svgs/titleImg.svg';
import pathImg from '../assets/svgs/path.svg';
import assetImg from '../assets/svgs/asset.svg';
import exploreImg from '../assets/svgs/explore.svg';
import objectImg from '../assets/svgs/object.svg';
import { useContext, useState } from 'react';
import { dataContext } from '..';
import { useNavigate } from 'react-router-dom';
import { workspaceURL } from '../config/config';
import { useTranslation } from 'react-i18next';
import i18n from '../locale';

export default function Part0() {
  const { t } = useTranslation(['page']);

  const [scale, setScale] = useState<number>(1);
  const data = useContext(dataContext);
  const navigate = useNavigate();

  return (
    <div className="Part0">
      <div className="preset">
        <div className="title-preset">
          {i18n.language === 'ko' ? (
            <p
              className="title"
              style={{
                lineHeight: '5rem',
              }}
            >
              모두를 위한
              <br />
              <span className="urbanist">노코드</span> 개발 툴
            </p>
          ) : (
            <p className="title urbanist">
              <span>No-Code</span>
              <br />
              development tool
              <br />
              for everyone
            </p>
          )}
          <p className="detail">
            {t('writ0')}
            <br />
            {t('writ1')}
          </p>
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
        <img className="path-img" src={pathImg} alt="" />
        <img className="asset-img" src={assetImg} alt="" />
        <img className="explore-img" src={exploreImg} alt="" />
        <img
          className="title-img"
          src={titleImg}
          alt=""
          style={{
            transform: `translateY(-50%) scale(${scale})`,
          }}
          onMouseEnter={() => setScale(1.025)}
          onMouseLeave={() => setScale(1)}
        />
        <img className="object-img" src={objectImg} alt="" />
      </div>
    </div>
  );
}
