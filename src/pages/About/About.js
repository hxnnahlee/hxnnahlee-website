import "./About.css";

const About = () => {
  return (
    <div className="about">
      <div className="cloud">
        <img src="./cloud.png" alt="cloud" />
      </div>

      <div className="about-text">
        <p>
          I'm currently a backend software engineer at Hinge.
        </p>

        <p>
          I graduated from Lehigh University in 2020 with a Bachelor of Science in
          Computer Science & a minor in Psychology.
        </p>

        <p>
          Outside of work, I like to rock climb, sing, play piano, play video
          games, and crochet
        </p>
      </div>

      <div className="crochet-section">
        <p className="crochet-title">Some of my crochet projects :)</p>

        <div className="crochet-pics">
          <img src="./mushroom.jpg" alt="crochet" />
          <img src="./IMG_6750.jpg" alt="crochet" />
          <img src="./IMG_9352.jpg" alt="crochet" />
        </div>
      </div>
    </div>
  );
};

export default About;