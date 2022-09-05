import './styles/header.css';
import logo from '../assets/svgs/logo.svg';
import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { Popover } from 'react-tiny-popover';
import { PopContent } from '../assets/components/popcontent';
import { dataContext, setDataContext } from '..';
import { workspaceURL } from '../config/config';
import { useTranslation } from 'react-i18next';
import i18n from '../locale';
import api from '../config/api';

interface PopoverInterface {
  workspace: boolean;
}

export default function Header() {
  const { t } = useTranslation(['page']);

  const [scrollProgress, setScrollProgress] = useState(0);
  const [isPopoverOpen, setIsPopoverOpen] = useState<PopoverInterface>({
    workspace: false,
  });
  const data = useContext(dataContext);
  const setData = useContext(setDataContext);
  const navigate = useNavigate();

  useEffect(() => {
    document.addEventListener('scroll', () => {
      setScrollProgress(window.scrollY);
    });
  }, [data]);

  return (
    <div
      className="Header"
      style={{
        borderBottom:
          scrollProgress > 0 ? '1px solid var(--lineColor)' : undefined,
      }}
    >
      <div>
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
        {data!.isLoggedIn ? (
          <Popover
            isOpen={isPopoverOpen.workspace}
            positions={['bottom']}
            padding={5}
            align="center"
            reposition={false}
            onClickOutside={() =>
              setIsPopoverOpen({ ...isPopoverOpen, workspace: false })
            }
            content={() => (
              <PopContent
                width={175}
                contents={[
                  {
                    text: t('workspace'),
                    onClick: () =>
                      window.location.replace(
                        `${workspaceURL}/login/${localStorage.getItem(
                          'token'
                        )}/${data?.uid}/${data?.uname}`
                      ),
                  },
                  {
                    text: t('logout'),
                    onClick: () => {
                      localStorage.removeItem('token');
                      setData!({ ...data, isLoggedIn: false });
                    },
                  },
                ]}
              />
            )}
          >
            <div
              className="start"
              style={{
                width: 'auto',
                padding: '0 1rem 0 1rem',
              }}
              onClick={() =>
                setIsPopoverOpen({
                  ...isPopoverOpen,
                  workspace: !isPopoverOpen.workspace,
                })
              }
            >
              <p
                style={{
                  float: 'right',
                }}
              >
                {data?.uname ?? 'Loading..'}
              </p>
            </div>
          </Popover>
        ) : (
          <div className="start" onClick={() => navigate('/login')}>
            <p>{t('get_started')}</p>
          </div>
        )}
        <div
          className="translate"
          onClick={() => {
            document.cookie = `translate=${
              i18n.language === 'en' ? 'ko' : 'en'
            };max-age=${365 * 24 * 60 * 60 * 1000};path=/`;

            i18n.changeLanguage(i18n.language === 'en' ? 'ko' : 'en');

            if (data?.isLoggedIn) {
              (async () => {
                await api
                  .put(`/user`, {
                    token: localStorage.getItem('token'),
                    translate: i18n.language,
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              })();
            }
          }}
        >
          <svg viewBox="0 0 20 20" fill="#474a4d">
            <path d="M7 2a1 1 0 011 1v1h3a1 1 0 110 2H9.578a18.87 18.87 0 01-1.724 4.78c.29.354.596.696.914 1.026a1 1 0 11-1.44 1.389c-.188-.196-.373-.396-.554-.6a19.098 19.098 0 01-3.107 3.567 1 1 0 01-1.334-1.49 17.087 17.087 0 003.13-3.733 18.992 18.992 0 01-1.487-2.494 1 1 0 111.79-.89c.234.47.489.928.764 1.372.417-.934.752-1.913.997-2.927H3a1 1 0 110-2h3V3a1 1 0 011-1zm6 6a1 1 0 01.894.553l2.991 5.982a.869.869 0 01.02.037l.99 1.98a1 1 0 11-1.79.895L15.383 16h-4.764l-.724 1.447a1 1 0 11-1.788-.894l.99-1.98.019-.038 2.99-5.982A1 1 0 0113 8zm-1.382 6h2.764L13 11.236 11.618 14z" />
          </svg>
        </div>
      </div>
    </div>
  );
}
