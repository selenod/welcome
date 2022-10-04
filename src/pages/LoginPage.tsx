import { useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { dataContext } from '..';
import { googleClientID, kakaoRestAPIKey } from '../config/config.js';

export default function LoginPage() {
  const { t } = useTranslation(['page']);

  const data = useContext(dataContext);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Login - Selenod';
  }, []);

  useEffect(() => {
    if (data!.isLoggedIn) {
      navigate('/');
    }
  }, [data, navigate]);

  const googleOAuthURL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${googleClientID}&response_type=token&redirect_uri=https://selenod.com/redirect/google&scope=https://www.googleapis.com/auth/userinfo.profile`;
  const kakaoOAuthURL = `https://kauth.kakao.com/oauth/authorize?client_id=${kakaoRestAPIKey}&redirect_uri=https://selenod.com/redirect/kakao&response_type=code`;

  return (
    <div
      style={{
        width: '100vw',
        height: '50rem',
      }}
    >
      <div
        style={{
          position: 'relative',
          top: '50%',
          transform: 'translateY(-50%)',
        }}
      >
        <p
          style={{
            color: 'var(--textBlack)',
            fontWeight: 700,
            fontSize: '1.85rem',
            textAlign: 'center',
            marginBottom: '2.25rem',
          }}
        >
          {t('continue_to_selenod')}
        </p>
        <div
          style={{
            position: 'relative',
            width: 265,
            height: 54,
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: '#fff',
            borderRadius: 12,
            cursor: 'pointer',
            border: '1px solid var(--lineColor)',
            marginBottom: 12,
          }}
          onClick={() => window.location.assign(googleOAuthURL)}
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              position: 'relative',
              top: '50%',
              transform: 'translateY(-50%)',
              marginLeft: 15,
              float: 'left',
            }}
          >
            <rect
              width="24"
              height="24"
              transform="translate(0.845947)"
              fill="white"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M23.8859 12.2614C23.8859 11.4459 23.8128 10.6618 23.6769 9.90912H12.8459V14.3575H19.035C18.7684 15.795 17.9582 17.013 16.7403 17.8284V20.7139H20.4569C22.6314 18.7118 23.8859 15.7637 23.8859 12.2614Z"
              fill="#4285F4"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.8459 23.4998C15.9509 23.4998 18.5541 22.47 20.4568 20.7137L16.7402 17.8282C15.7105 18.5182 14.3932 18.9259 12.8459 18.9259C9.85068 18.9259 7.31546 16.903 6.41114 14.1848H2.56909V17.1644C4.46136 20.9228 8.35046 23.4998 12.8459 23.4998Z"
              fill="#34A853"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.41117 14.1851C6.18117 13.4951 6.05049 12.758 6.05049 12.0001C6.05049 11.2421 6.18117 10.5051 6.41117 9.81506V6.83551H2.56913C1.79027 8.38801 1.34595 10.1444 1.34595 12.0001C1.34595 13.8557 1.79027 15.6121 2.56913 17.1646L6.41117 14.1851Z"
              fill="#FBBC05"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.8459 5.07386C14.5343 5.07386 16.0502 5.65409 17.242 6.79364L20.5405 3.49523C18.5489 1.63955 15.9457 0.5 12.8459 0.5C8.35046 0.5 4.46136 3.07705 2.56909 6.83545L6.41114 9.815C7.31546 7.09682 9.85068 5.07386 12.8459 5.07386Z"
              fill="#EA4335"
            />
          </svg>
          <p
            style={{
              position: 'relative',
              top: '50%',
              left: 'calc(50% - 24.5px)',
              transform: 'translate(-50%, -50%)',
              float: 'left',
              fontFamily: 'Roboto, sans-serif',
              fontSize: 18,
              color: '#757575',
            }}
          >
            {t('continue_with_google')}
          </p>
        </div>
        <div
          style={{
            position: 'relative',
            width: 265,
            height: 54,
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: '#fee500',
            borderRadius: 12,
            cursor: 'pointer',
          }}
          onClick={() => window.location.assign(kakaoOAuthURL)}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 208 192"
            fill="#000"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              position: 'relative',
              top: '50%',
              transform: 'translateY(-50%)',
              marginLeft: 17,
              float: 'left',
            }}
          >
            <path d="M104 0C46.56 0 0 36.71 0 82C0 111.28 19.47 137 48.75 151.48C47.16 156.97 38.51 186.82 38.17 189.17C38.17 189.17 37.96 190.93 39.1 191.6C39.4814 191.792 39.8981 191.905 40.3245 191.931C40.751 191.957 41.1782 191.895 41.58 191.75C44.86 191.29 79.58 166.94 85.58 162.75C91.6832 163.598 97.8383 164.015 104 164C161.44 164 208 127.29 208 82C208 36.71 161.44 0 104 0Z" />
          </svg>
          <p
            style={{
              position: 'relative',
              top: 'calc(50% - 1px)',
              left: 'calc(50% - 24.5px)',
              transform: 'translate(-50%, -50%)',
              float: 'left',
              fontSize: 17,
              fontFamily: 'noto-sans-cjk-kr, sans-serif',
              color: '#191919',
            }}
          >
            {t('continue_with_kakao')}
          </p>
        </div>
      </div>
    </div>
  );
}
