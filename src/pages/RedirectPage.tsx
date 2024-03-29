import axios from 'axios';
import { useState, useEffect, useContext } from 'react';
import ResponsePage from './ResponsePage';
import { ResponseProps } from '../data';
import { useNavigate, useParams } from 'react-router-dom';
import { dataContext, setDataContext } from '..';
import api from '../config/api';
import i18n from '../locale';

export default function RedirectPage() {
  const [props, setProps] = useState<ResponseProps>({
    status: undefined,
    message: undefined,
  });
  const navigate = useNavigate();
  const data = useContext(dataContext);
  const setData = useContext(setDataContext);
  const { platform } = useParams();

  useEffect(() => {
    (async () => {
      const url = new URL(window.location.href);

      switch (platform) {
        case 'google':
          let hash = url.hash;
          if (hash) {
            const accessToken = hash.split('=')[1].split('&')[0];
            await axios
              .get(
                'https://www.googleapis.com/oauth2/v2/userinfo?access_token=' +
                  accessToken,
                {
                  headers: {
                    authorization: `token ${accessToken}`,
                    accept: 'application/json',
                  },
                }
              )
              .then((res) => {
                api
                  .post('/user/login', {
                    username: res.data.name,
                    uid: res.data.id,
                    translate: i18n.language,
                  })
                  .then(async (res) => {
                    await api
                      .get(`/user/${res.data.token}`)
                      .then((userData) => {
                        localStorage.setItem('token', res.data.token);
                        document.cookie = `translate=${
                          userData.data.translate
                        };max-age=${365 * 24 * 60 * 60 * 1000};path=/`;
                        i18n.changeLanguage(userData.data.translate);
                        setData!({
                          isLoggedIn: true,
                          uid: userData.data.uid,
                          uname: userData.data.username,
                        });
                        navigate('/');
                      })
                      .catch((err) => {
                        setProps({
                          status: err.response.status,
                          message: err.response.data.message,
                        });
                      });
                  })
                  .catch((error) => {
                    setProps({
                      status: error.response.status,
                      message: error.response.data.message,
                    });
                  });
              })
              .catch(() => {
                setProps({
                  status: '401',
                  message: 'OAuth token has expired.',
                });
              });
          } else {
            setProps({
              status: '400',
              message: 'Bad Request.',
            });
          }
          break;
        case 'kakao':
          let code = url.searchParams.get('code');
          await api
            .get(`/user/auth?platform=kakao&code=${code}`)
            .then((res) => {
              api
                .post('/user/login', {
                  username: res.data.name,
                  uid: res.data.id,
                  translate: i18n.language,
                })
                .then(async (res) => {
                  await api
                    .get(`/user/${res.data.token}`)
                    .then((userData) => {
                      localStorage.setItem('token', res.data.token);
                      document.cookie = `translate=${
                        userData.data.translate
                      };max-age=${365 * 24 * 60 * 60 * 1000};path=/`;
                      i18n.changeLanguage(userData.data.translate);
                      setData!({
                        isLoggedIn: true,
                        uid: userData.data.uid,
                        uname: userData.data.username,
                      });
                      navigate('/');
                    })
                    .catch((err) => {
                      setProps({
                        status: err.response.status,
                        message: err.response.data.message,
                      });
                    });
                })
                .catch((error) => {
                  setProps({
                    status: error.response.status,
                    message: error.response.data.message,
                  });
                });
            })
            .catch((error) => {
              setProps({
                status: error.response.status,
                message: error.response.data.message,
              });
            });
          break;
        default:
          break;
      }
    })();
  }, [navigate, platform, data, setData]);

  return <ResponsePage {...props} />;
}
