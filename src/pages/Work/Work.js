import "./Work.css";

const Work = () => {
  return (
    <>
      <div className="mickey">
        <img src="./mickey.png" alt="mickey" style={{ width: "20%" }} />
      </div>
      <h2 className="jobspacing jobtitlesize">
        Software Engineer II - Disney Streaming
      </h2>
      <h2>Backend Software Engineer - Disney Streaming, API Services Team.</h2>
      <h2>Focusing on fraud prevention for Disney Streaming's public APIs.</h2>
      <h2>Technologies Used:</h2>
      <ul class="jobspacing">
        <li>AWS Kinesis</li>
        <li>AWS DynamoDB</li>
        <li>AWS Lambda</li>
        <li>AWS WAF</li>
        <li>Redis</li>
        <li>Jenkins</li>
        <li>Apache Flink</li>
        <li>HTTP4s</li>
        <li>Docker</li>
      </ul>

      <h2 className="jobspacing jobtitlesize">Software Developer Intern</h2>
      <h2>Software Developer Intern for Orbweaver Sourcing</h2>
      <h2>Notable Projects:</h2>
      <ul>
        <li>
          Migrating outdated Product Information Management platform to a
          micro-service driven architecture
        </li>
      </ul>
    </>
  );
};

export default Work;
