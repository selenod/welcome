import './styles/part1.css';
import doubleWindows from '../assets/images/doubleWindows.png';

export default function Part1() {
  return (
    <div className="Part1">
      <div className="preset">
        <div>
          <p className="comment urbanist">
            <span>Everything you need is here.</span>
            <br />
            Web editor, node-based language, and application builder.
          </p>
          <img className="double-windows-img" src={doubleWindows} alt="" />
        </div>
      </div>
    </div>
  );
}
