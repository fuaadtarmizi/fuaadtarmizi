import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser';


class ExternalLinks extends React.Component {
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
    return (
      <div className="external-links">
        <a className="github-icon" href={this.props.githubLink}>
          <GitHubIcon
            style={{
              fontSize: 20,
              color: "var(--lightest-slate)"
            }}
          ></GitHubIcon>
        </a>
        {this.props.openLink && (
        <a
          className="open-icon"
          href={this.props.openLink}
          target="_blank"
          rel="noopener noreferrer"
          
          style={{
            fontSize: 18,
            color: "var(--lightest-slate)",
            textDecoration: "none",
            padding: "6px 12px",
            borderRadius: "6px",
            display: "inline-block"
          }}
        >
          Try Me
        </a>
      )}
      </div>
    );
  }
}

export default ExternalLinks;
