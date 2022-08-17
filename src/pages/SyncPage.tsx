import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { dataContext, setDataContext } from '..';

import { ResponseProps } from '../data';
import ResponsePage from './ResponsePage';

export default function SyncPage() {
  const { id, nickname } = useParams();
  const navigate = useNavigate();
  const data = useContext(dataContext);
  const setData = useContext(setDataContext);

  const [props, setProps] = useState<ResponseProps>({
    status: undefined,
    message: undefined,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    if (
      localStorage.getItem('id') &&
      localStorage.getItem('nickname') &&
      id === localStorage.getItem('id') &&
      nickname === localStorage.getItem('nickname')
    ) {
      localStorage.removeItem('id');
      localStorage.removeItem('nickname');
      setData!({ ...data, isLoggedIn: false });
      navigate('/');
    } else {
      setProps({
        status: '404',
        message: 'Page not found.',
      });
    }
  }, [id, nickname, navigate, data, setData]);

  return <ResponsePage {...props} />;
}
