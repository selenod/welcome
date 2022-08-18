import axios from 'axios';
import { useState, useEffect, useContext } from 'react';
import ResponsePage from './ResponsePage';
import { ResponseProps } from '../data';
import { useNavigate, useParams } from 'react-router-dom';
import { dataContext, setDataContext } from '..';
import api from '../config/api';

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
    async function fetchData() {
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
                  .post('/user/create', {
                    username: res.data.name,
                    uid: res.data.id,
                  })
                  .then(() => {
                    localStorage.setItem('id', res.data.id);
                    localStorage.setItem('nickname', res.data.name);
                    setData!({ ...data, isLoggedIn: true });
                    navigate('/');
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
                .post('/user/create', {
                  username: res.data.name,
                  uid: res.data.id,
                })
                .then(() => {
                  localStorage.setItem('id', res.data.id);
                  localStorage.setItem('nickname', res.data.name);
                  setData!({ ...data, isLoggedIn: true });
                  navigate('/');
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
    }

    fetchData();
  }, [navigate, platform, data, setData]);

  return <ResponsePage {...props} />;
}
