import './styles/part1.css';
import doubleWindows from '../assets/images/doubleWindows.png';

export default function Part1() {
  return (
    <div className="Part1">
      <div className="preset">
        <div>
          <p className="comment urbanist">
            <span>Here, all things you need is ready.</span>
            <br />
            Editor, node-based language, builder for web.
          </p>
          <img className="double-windows-img" src={doubleWindows} alt="" />
        </div>
      </div>
    </div>
  );
}
