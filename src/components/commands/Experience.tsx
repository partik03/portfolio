import { ExperienceList, ExperienceIntro } from "../styles/Experience.styled";
import { Wrapper } from "../styles/Output.styled";

const Experience: React.FC = () => {
  return (
    <Wrapper data-testid="education">
      <ExperienceIntro>Here is my work experience!</ExperienceIntro>
      {eduBg.map(({ title, desc, data, exposure }) => (
        <ExperienceList key={title}>
          <div className="title">{title}</div>
          <div className="desc">{desc}</div>
          <ul className="data">
            {data.split("\n").map((item, index) => (
              <li key={index}>{item.trim()}</li>
            ))}
          </ul>
          <div className="exposure">
            <strong>Exposure:</strong> {exposure}
          </div>
        </ExperienceList>
      ))}
    </Wrapper>
  );
};

const eduBg = [
  {
    title: "JPMorgan Chase & Co | May 2024 - July 2024",
    desc: "Summer Engineering Intern",
    data: `Assisted in developing Spring Boot APIs in Java, contributing to backend functionality improvements.
        Gained experience with Spring Cloud Gateway, learning about API request management and routing.
        Participated in creating infrastructure using Terraform, observing best practices for infrastructure as code.
        Wrote Python scripts to help automate the generation of Docker and deployment files, reducing manual work.
        Contributed to the migration of CI/CD pipelines from Jenkins to Harness, learning about modern deployment processes`,
    exposure:
      "Java, Spring Boot, Spring Cloud Gateway, Terraform, Python, Docker, Jenkins, Harness, CI/CD, Infrastructure as Code",
  },
  {
    title:
      "Google Summer of Code 2023 (Nodecloud - SCoRe Lab) | May 2023 - July 2023",
    desc: "Student Mentee",
    data: `Nodecloud is an API allowing developers to interact with multiple cloud providers using a unified interface
    The project leverages the Typescript Compiler API to create classes automatically for specific functions by parsing the SDKs of cloud providers, extracting useful information about functions, and using transformation to output the final class according to a particular template.
    The project already supports cloud providers like GCP, AWS, Digitalocean, and Alicloud, and the goal is to extend its functionality to support Linode and Oracle Cloud Providers.
    The project requires implementing dummy classes, SDK parsers, Data Extraction functions, and Transformers for Oracle and Linode.`,
    exposure:
      "JavaScript, TypeScript, Oracle Cloud Platform, Linode Cloud Platform, TypeScript Compiler API, Jest.js",
  },
  {
    title:
      "Google Summer of Code 2024 ( RustCloud - C2SI )| July 2024 - August 2024",
    desc: "Student Mentee",
    data: `Developed RustCloud, a Rust package from scratch, enabling users to interact with multiple cloud platforms through a single library.
    Implemented functions and types for Google Cloud Platform (GCP) and Amazon Web Services (AWS), enhancing the library's versatility.
    Wrote comprehensive tests to maintain code reliability and facilitate future development.
    Created thorough documentation to improve user adoption and understanding of the library`,
    exposure:
      "Rust, Google Cloud Platform (GCP), Amazon Web Services (AWS), CI/CD, Software Testing, Cloud Computin`g",
  },
  {
    title: "Textr AI | December 2022 - May 2023",
    desc: "Full Stack Developer",
    data: `Worked on the website and the product's front end using ReactJs, Tailwind CSS, and Material UI.
    Worked on a new Rest API in Python using FastAPI to scrape Google Search Results and collect keywords, headers,and other information for SEO competitor analyses.
    Developed a Microservice for payments using Golang and Razorpay.`,
    exposure: "Python, FastAPI, ReactJs, Golang, Gofiber, BeautifulSoup",
  },
];

export default Experience;

// Google Summer of Code 2023 (Nodecloud - SCoRe Lab) May 2023 - July 2023
// Student Mentee
// Nodecloud is an API allowing developers to interact with multiple cloud providers using a unified interface.
// The project leverages the Typescript Compiler API to create classes automatically for specific functions by parsing the
// SDKs of cloud providers, extracting useful information about functions, and using transformation to output the final
// class according to a particular template.
// The project already supports cloud providers like GCP, AWS, Digitalocean, and Alicloud, and the goal is to extend its
// functionality to support Linode and Oracle Cloud Providers.
// The project requires implementing dummy classes, SDK parsers, Data Extraction functions, and Transformers for
// Oracle and Linode.
// Exposure: JavaScript, TypeScript, Oracle Cloud Platform, Linode Cloud Platform, TypeScript Compiler API, Jest.js
