import './styles/part3.css';
import flame from '../assets/svgs/flame.svg';
import { useContext } from 'react';
import { dataContext } from '..';
import { useNavigate } from 'react-router-dom';

export default function Part3() {
  const data = useContext(dataContext);
  const navigate = useNavigate();

  return (
    <div className="Part3">
      <img src={flame} alt="" />
      <div className="preset">
        <div>
          <p className="title urbanist">It’s time to boost your development.</p>
          <p className="detail">Selenod is 100% free for all.</p>
          {data?.isLoggedIn ? (
            <button onClick={() => {}}>Go to Workspace</button>
          ) : (
            <button onClick={() => navigate('/login')}>Get Started</button>
          )}
        </div>
      </div>
    </div>
  );
}
