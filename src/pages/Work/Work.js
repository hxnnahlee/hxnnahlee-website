import "./Work.css";

const Work = () => {
  return (
    <>
      <div className="mickey">
        <img
          src="./hxnnahlee-website/mickey.png"
          alt="mickey"
          style={{ width: "20%" }}
        />
      </div>
      <h2 className="jobspacing jobtitlesize">
        Software Engineer II: Disney Streaming
      </h2>
      <h2>
        Develop and maintain critical services for safeguarding public APIS of
        streaming apps (Disney+, Hulu, Espn) under Disney Streaming.
      </h2>
      <br></br>
      <br></br>
      <h2>Notable Projects:</h2>
      <ul>
        <li>
          Spearheaded partnership with the Data Engineering team, designing
          infrastructure for data persistence to S3
        </li>
        <li>
          Improved fraud pipeline efficiency by rearchitecting AWS WAF and
          DynamoDB, catching 100K+ repeat offenders
        </li>
        <li>
          Led the development and implementation of APIs for 5+ external teams
          to seamlessly interact with fraud pipeline
        </li>
        <li>
          Pioneered implementation for canary deployment pipeline in Spinnaker
          with Istio for Kubernetes-based application
        </li>
      </ul>
      <br></br>
      <h2>Technologies Used:</h2>
      <ul class="jobspacing">
        <li>AWS Kinesis</li>
        <li>AWS DynamoDB</li>
        <li>AWS Lambda</li>
        <li>AWS WAF</li>
        <li>Redis</li>
        <li>Jenkins</li>
        <li>Apache Flink</li>
        <li>Docker</li>
      </ul>

      <h2 className="jobspacing jobtitlesize">
        Software Developer Intern: Orbweaver Sourcing
      </h2>
      <br></br>
      <h2>Notable Projects:</h2>
      <ul>
        <li>
          Leveraged Ruby on Rails to lead the migration of a substantial
          codebase to a highly scalable, microservice-driven architecture on
          AWS.
        </li>
      </ul>
      <br></br>
    </>
  );
};

export default Work;
