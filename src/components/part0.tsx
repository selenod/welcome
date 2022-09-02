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

export default function Part0() {
  const [scale, setScale] = useState<number>(1);
  const data = useContext(dataContext);
  const navigate = useNavigate();

  return (
    <div className="Part0">
      <div className="preset">
        <div className="title-preset">
          <p className="title urbanist">
            <span>No-Code</span>
            <br />
            development tool
            <br />
            for everyone
          </p>
          <p className="detail">
            Selenod is a web-based development tool
            <br />
            for creating desktop applications.
          </p>
          {data?.isLoggedIn ? (
            <button
              onClick={() =>
                (window.location.href = `${workspaceURL}/login/${localStorage.getItem(
                  'id'
                )}/${localStorage.getItem('nickname')}`)
              }
            >
              Go to Workspace
            </button>
          ) : (
            <button onClick={() => navigate('/login')}>Get Started</button>
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
