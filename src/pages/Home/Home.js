

import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <img src={"./me.jpg"} className="me-pic" id="me" alt="me" />

      <p className="intro">
        backend engineer in nyc ✿
      </p>
      <p className="about">
      my simple pleasures . . .
      <span className="fun">
        {" "}🍜 pho • 🎤 karaoke • 🐶 dogs that look like carpets • 🎮 word hunt
      </span>
    </p>
    </div>
  );
};

export default Home;
