

import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <img src={"./me.jpg"} className="me-pic" id="me" alt="me" />

      <p className="intro">
        backend engineer in nyc ✿
      </p>
      <p className="about-text">
        my simple pleasures . . .
      </p>

      <p className="fun">
        🍜 pho • 🎤 karaoke • 🐶 dogs that look like carpets • 🎮 word hunt
      </p>
    </div>
  );
};

export default Home;
