import './styles/part3.css';
import flame from '../assets/svgs/flame.svg';
import { useContext } from 'react';
import { dataContext } from '..';
import { useNavigate } from 'react-router-dom';
import { workspaceURL } from '../config/config';

export default function Part3() {
  const data = useContext(dataContext);
  const navigate = useNavigate();

  return (
    <div className="Part3">
      <img src={flame} alt="" />
      <div className="preset">
        <div>
          <p className="title urbanist">Create your own application!</p>
          <p className="detail">Selenod is 100% free.</p>
          {data?.isLoggedIn ? (
            <button
              onClick={() =>
                window.location.replace(
                  `${workspaceURL}/login/${data?.uid}/${data?.uname}`
                )
              }
            >
              Go to Workspace
            </button>
          ) : (
            <button onClick={() => navigate('/login')}>Get Started</button>
          )}
        </div>
      </div>
    </div>
  );
}
