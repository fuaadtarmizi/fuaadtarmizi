import React from "react";
import "../styles/Project.css";
import FolderOpenRoundedIcon from "@mui/icons-material/FolderOpenRounded";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from "react-bootstrap/Carousel";
import ExternalLinks from "../component/ExternalLinks";
import 'bootstrap/dist/css/bootstrap.min.css';
import FadeInSection from "../component/FadeInSection";


class Projects extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1"
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
  render() {
    const spotlightProjects = {
      "Car Loan Calculator": {
        title: "Car Loan Calculator",
        desc:"Simple calculation to know youre monthly installment car just by insert youre interest percent (bunga). ",
        techStack: "REACT.JS",
        link: "https://github.com/fuaadtarmizi/my-calculator",
        open: "https://my-calculator-two-kappa.vercel.app/",
        image: './src/assets/calculator.png',
        alignCenter: true
      },
      "Auto-Grade Quiz": {
        title: "Auto-Grade Quiz",
        desc:
          "Auto-generated result quiz with instant feedback.",
        techStack: "NEXT.JS",
        link: "https://github.com/fuaadtarmizi/mathproject",
        open: "https://fuaadmathproject.vercel.app/",
        image: "/src/assets/quiz.png",
        alignCenter: true
      },
      "World Chat": {
        title: "World Chat",
        desc:
          "A chat project similar to Discord that can chat with everyone who have login and conversation hasbeen delete after 3 sec",
        techStack: "VUE.JS, NODE.JS (SOCKET.IO), REACT.JS, FIREBASE",
        link: "https://github.com/fuaadtarmizi/WorldChat",
        open: "https://myworld-1c5cc.web.app/",
        image: './src/assets/WorldChat.png',
        alignCenter: true
      },
      Portfolio: {
        title: "portfolio.js",
        desc:
          "A Portfolio that design for personal use.",
        techStack: "VUE.JS",
        link: "https://github.com/fuaadtarmizi/fuaadtarmizi",
        open: "https://fuaadtarmizi.vercel.app/",
        image: "./src/assets/portfolio.png",
        alignCenter: true
      }
    };
    const projects = {
      "Car Loan Calculator": {
        desc:
          "Simple calculation to know youre monthly installment car just by insert youre interest percent (bunga).",
        techStack: "REACT.JSX",
        link: "https://github.com/fuaadtarmizi/my-calculator",
        open: "https://my-calculator-two-kappa.vercel.app/"
      },
      "Auto-Grade Quiz": {
        desc:
          "Auto-generated result quiz with instant feedback.",
        techStack: "NEXT.JS",
        link: "https://github.com/fuaadtarmizi/mathproject",
        open: "https://fuaadmathproject.vercel.app/"
      },
      "World Chat": {
        desc:
          "A chat project similar to Discord that can chat with everyone who have login and conversation hasbeen delete after 3 sec",
        techStack: "VUE.JS, NODE.JS (SOCKET.IO), REACT.JS, FIREBASE",
        link:
          "https://github.com/gazijarin/Distributed-Logging-and-Monitoring-System"
      },
      "portfolio.js": {
        desc:
          "A Portfolio that design for personal use",
        techStack: "VUE.JS (REACT.JSX)",
        link: "https://github.com/fuaadtarmizi/fuaadtarmizi",
        open: "https://fuaadtarmizi.vercel.app"
      },
    };

    return (
      <div id="projects">
        <div className="section-header ">
          <span className="section-title">/ pet projects</span>
        </div>
        <Carousel>
          {Object.keys(spotlightProjects).map((key, i) => (
            <Carousel.Item key={i}>
              <img
                className="d-block w-100"
                src={spotlightProjects[key]["image"]}
                alt={key}
              />
              <div className="caption-bg">
                <Carousel.Caption className={`carousel-caption ${spotlightProjects[key].alignCenter ? "centered" : ""}`}>
                  <h3>{spotlightProjects[key]["title"]}</h3>
                  <p>{spotlightProjects[key]["desc"]}</p>
                   <p className="techStack">{spotlightProjects[key]["techStack"]}</p>
                  <ExternalLinks
                    githubLink={spotlightProjects[key]["link"]}
                    openLink={spotlightProjects[key]["open"]}
                  />
                </Carousel.Caption>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
        <div className="project-container">
          <ul className="projects-grid">
            {Object.keys(projects).map((key, i) => (
              <FadeInSection key={key} delay={`${i + 1}00ms`}>
                <li className="projects-card">
                  <div className="card-header">
                    <div className="folder-icon">
                      <FolderOpenRoundedIcon
                        style={{ fontSize: 35 }}
                      ></FolderOpenRoundedIcon>
                    </div>
                    <ExternalLinks
                      githubLink={projects[key]["link"]}
                      openLink={projects[key]["open"]}
                    ></ExternalLinks>
                  </div>

                  <div className="card-title">{key}</div>
                  <div className="card-desc">{projects[key]["desc"]}</div>
                  <div className="card-tech">{projects[key]["techStack"]}</div>
                </li>
              </FadeInSection>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Projects;
