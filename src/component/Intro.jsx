import React from "react";
import "../styles/Intro.css";

import AnimationLeave from "../component/AnimationLeave"
import { Typewriter } from "react-simple-typewriter";
import FadeInSection from "./FadeInSection";

class Intro extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1",
      visible: true,
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey,
    });
  }
  render(){
  return (
    <>
    <div id="intro">
    <AnimationLeave/>
    <h1 className="intro-title ">
      <Typewriter words={["hi,"]} typeSpeed={180}/>
      <span className="intro-name">
      <Typewriter words={["fuaad"]} typeSpeed={200}/>
    </span>
      <Typewriter words={[" here."]} cursor cursorStyle="|" typeSpeed={220}/>
    </h1>
    <FadeInSection>
      <div className="intro-subtitle">I create stuff sometimes.</div>
      <div className="intro-desc">
        I'm a software developer from Damansara, Malaysia. 
        I'm passionate about clean code, performance optimization, and solving real-world problems through technology.
      </div>
    </FadeInSection>
    </div>
    </>
  );
  };
};

export default Intro;
