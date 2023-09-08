import "./About.css";

const About = () => {
  return (
    <>
      <div className="cloud">
        <img src="./cloud.png" alt="cloud" style={{ width: "10%" }} />
      </div>
      <h2>
        I'm currently a backend software engineer at Disney Streaming; My work
        involves protecting Disney Streaming's public APIs against fraudulent
        attacks.
      </h2>
      <h2>
        I graduated from Lehigh University in 2020 with a Bachelor of Science in
        Computer Science & a minor in Psychology.{" "}
      </h2>
      <br></br>
      <h2>
        Outside of work, I like to rock climb, sing, play piano, play video
        games, and crochet !!
      </h2>
      <br></br>

      <div className="crochet-pics">
        <h2>Some of my crochet projects :)</h2>
        <br></br>
        <img src="./mushroom.jpg" alt="crochet" style={{ width: "10%" }} />
        <img src="./IMG_6750.jpg" alt="crochet" style={{ width: "10%" }} />
        <img src="./IMG_9352.jpg" alt="crochet" style={{ width: "10%" }} />
      </div>
    </>
  );
};

export default About;
