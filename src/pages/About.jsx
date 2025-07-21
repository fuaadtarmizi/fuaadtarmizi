import React from "react";
import "../styles/About.css";
import FadeInSection from "../component/FadeSection";

class About extends React.Component {
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
    const one = (
      <p>
        I am currently a <b>Web Developer</b> at
        <a href="https://www.yegmy.com/"> YEG Academy</a>. with a foundation in Software Developmentstill drawing on the same core principles and problem-solving skills.
         In my spare time, I enjoy building small-scale projects as a way to explore new technologie
      </p>
    );
    const two = (
      <p>
        Outside of work, I'm interested in following the developments of
        science. I also play a lot of video games. And make TikToks.
      </p>
    );

    const tech_stack = [
      "React.js",
      "React Native",
      "Laravel",
      "Express.js",
      "Python",
      "Javascript ES6+",
    ];

    return (
      <div id="about">
        <FadeInSection>
          <div className="section-header">
            <span className="section-title">/ about me</span>
          </div>
          <div className="about-content">
            <div className="about-description">
              {one}
              {"Here are some technologies I have been working with:"}
              <ul className="tech-stack">
                {tech_stack.map((tech_item, i) => (
                  <FadeInSection key={i} delay={`${i + 1}00ms`}>
                    <li>{tech_item}</li>
                  </FadeInSection>
                ))}
              </ul>
              {two}
            </div>
            <div className="about-image">
              <img alt="fuad" src="/me.jpg" />
            </div>
          </div>
        </FadeInSection>
      </div>
    );
  }
}

export default About;
