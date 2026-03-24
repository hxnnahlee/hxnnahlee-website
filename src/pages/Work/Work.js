import "./Work.css";

const Work = () => {
  return (
    <div className="work">
      <div className="mickey">
        <img src="./mickey.png" alt="mickey" />
      </div>

      {/* DISNEY */}
      <div className="job">
        <p className="company">Disney Streaming</p>
        <p className="role">Software Engineer II</p>

        <p className="description">
          Develop and maintain critical services for safeguarding public APIS of
          streaming apps (Disney+, Hulu, Espn).
        </p>

        <p className="section-title">Notable Projects:</p>

        <ul>
          <li>
            Spearheaded partnership with the Data Engineering team, designing
            infrastructure for data persistence to S3
          </li>
          <li>
            Led the development and implementation of APIs for 5+ external teams
            to seamlessly interact with fraud pipeline; worked directly with
            external teams to gather requirements for API responses
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
            Created a pipeline integrating Redis, AWS WAF, and DynamoDB to detect
            and intercept repeated offenders
          </li>
        </ul>

        <p className="section-title">Technologies Used:</p>

        <p className="techused">
          AWS Kinesis, DynamoDB, Lambda, WAF, Cloudformation, Cloudwatch, Redis,
          Jenkins, Apache Flink, Docker, Databricks, Spark
        </p>
      </div>

      {/* ORBWEAVER */}
      <div className="job">
        <p className="company">Orbweaver</p>
        <p className="role">Software Developer Intern</p>

        <p className="section-title">Notable Projects:</p>

        <ul>
          <li>
            Leveraged Ruby on Rails to lead the migration of a substantial
            codebase to a highly scalable, microservice-driven architecture on
            AWS
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Work;