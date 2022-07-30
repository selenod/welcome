import './styles/part3.css';
import flame from '../assets/svgs/flame.svg';

export default function Part3() {
  return (
    <div className="Part3">
      <img src={flame} alt="" />
      <div className="preset">
        <div>
          <p className="title urbanist">It’s time to boost your development.</p>
          <p className="detail">Selenod is 100% free for all.</p>
          <button>Get Started</button>
        </div>
      </div>
    </div>
  );
}
