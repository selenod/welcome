import axios from 'axios';
import { useState, useEffect, useContext } from 'react';
import ResponsePage from './ResponsePage';
import { ResponseProps } from '../data';
import { useNavigate, useParams } from 'react-router-dom';
import { setDataContext } from '..';
import api from '../config/api';

export default function RedirectPage() {
  const [props, setProps] = useState<ResponseProps>({
    status: undefined,
    message: undefined,
  });
  const navigate = useNavigate();
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
              .then((data) => {
                localStorage.setItem('id', data.data.id);
                localStorage.setItem('nickname', data.data.name);
                setData!({ ...setData, isLoggedIn: true });
                navigate('/');
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
            .then((data) => {
              localStorage.setItem('id', data.data.id);
              localStorage.setItem('nickname', data.data.name);
              setData!({ ...setData, isLoggedIn: true });
              navigate('/');
            })
            .catch(() => {
              setProps({
                status: '401',
                message: 'OAuth token has expired.',
              });
            });
          break;
        default:
          break;
      }
    }

    fetchData();
  }, [navigate, platform, setData]);

  return <ResponsePage {...props} />;
}
