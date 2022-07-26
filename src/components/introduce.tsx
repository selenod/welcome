import './styles/introduce.css';
import titleImg from '../assets/svgs/titleImg.svg';
import pathImg from '../assets/svgs/path.svg';
import assetImg from '../assets/svgs/asset.svg';
import exploreImg from '../assets/svgs/explore.svg';
import objectImg from '../assets/svgs/object.svg';
import { useState } from 'react';

export default function Introduce() {
  const [scale, setScale] = useState<number>(1);

  return (
    <div className="Introduce">
      <div className="preset">
        <div className="title-preset">
          <p className="title">
            <span>No-Code</span>
            <br />
            development tool
            <br />
            for everyone
          </p>
          <p className="detail">
            Selenod is a no-code tool for building applications easily
            <br />
            for Windows, Linux, and macOS.
          </p>
          <button>Get Started</button>
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
