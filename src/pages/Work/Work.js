
import "./Work.css";

const Work = () => {
  return (
    <>
        <div className="mickey">
        <img src="./mickey.png" alt="mickey" style={{width: '20%'}}/>
        </div>
      <h2 className="jobspacing jobtitlesize">Software Engineer II - Disney Streaming</h2>
        <p>Backend Software Engineer - Disney Streaming, API Services Team.</p> 
        <p>Focusing on fraud prevention for Disney Streaming's public APIs.</p>
        <p>Technologies Used:</p>
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
        <p>Software Developer Intern for Orbweaver Sourcing</p>
        <p>Notable Projects:</p>
        <ul>
            <li>Migrating outdated Product Information Management platform to a micro-service driven architecture</li>
        </ul>
      </>
  );
};

export default Work;