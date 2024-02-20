import "./Work.css";

const Work = () => {
  return (
    <>
      <div className="mickey">
        <img src="./mickey.png" alt="mickey" style={{ width: "20%" }} />
      </div>
      <h2 className="jobtitlesize">
        Disney Streaming
      </h2>
      <h2 className="jobspacing jobtitlesize">
        Software Engineer II
      </h2>
      <h2>
        Develop and maintain critical services for safeguarding public APIS of
        streaming apps (Disney+, Hulu, Espn).
      </h2>
      <br>
      </br>
      <h2>Notable Projects:</h2>
      <ul>
        <li>
          Spearheaded partnership with the Data Engineering team, designing
          infrastructure for data persistence to S3
        </li>
        <li>
            Led the development and implementation of APIs for 5+ external teams to seamlessly interact with fraud pipeline;
            worked directly with external teams to gather requirements for API responses
        </li>
        <li>
          Pioneered implementation for canary deployment pipeline in Spinnaker
          with Istio for Kubernetes-based application
        </li>
        <li>
            Created various Scala Spark jobs hosted on Databricks to aggregate
            terabytes of data for machine learning model
        </li>
        <li>
            Created a pipeline integrating Redis, AWS WAF, and DynamoDB to detect and intercept repeated offenders
        </li>
      </ul>
      <br></br>
      <h2>Technologies Used:</h2>
      <p class="jobspacing techused">AWS Kinesis, DynamoDB, Lambda, WAF, Cloudformation, Cloudwatch, Redis, Jenkins, Apache Flink,
      Docker, Databricks, Spark</p>

      <br></br>
      <h2 className="jobtitlesize">
        Orbweaver
      </h2>
      <h2 className="jobspacing jobtitlesize">
        Software Developer Intern
      </h2>
      <h2>Notable Projects:</h2>
      <ul>
        <li>
          Leveraged Ruby on Rails to lead the migration of a substantial
          codebase to a highly scalable, microservice-driven architecture on
          AWS
        </li>
      </ul>
      <br></br>
    </>
  );
};

export default Work;
