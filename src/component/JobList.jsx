import React from "react";
import PropTypes from "prop-types";
import { Box, Tabs, Tab } from "@mui/material";
import FadeInSection from "./FadeInSection";
import useMediaQuery from "@mui/material/useMediaQuery";

function TabPanel(props) {
  const { children, value, index, isHorizontal, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={isHorizontal ? `full-width-tabpanel-${index}` : `vertical-tabpanel-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
  isHorizontal: PropTypes.bool.isRequired
};

const JobList = () => {
  const [value, setValue] = React.useState(0);
  const isHorizontal = useMediaQuery("(max-width:600px)");

  const a11yProps = (index) => {
    return isHorizontal
      ? {
          id: `full-width-tab-${index}`,
          "aria-controls": `full-width-tabpanel-${index}`
        }
      : {
          id: `vertical-tab-${index}`
        };
  };

  const experienceItems = {
    "YEG Academy": {
      jobTitle: "Senior Executive Web Developer @",
      duration: "NOV 2023 - PRESENT",
      desc: [
        "Manage the development end-to-end (from scratch) for several responsive React web pages, enabling fast web deployment in 24/7.",
        "Spearheaded the development of a mobile app from scratch, handling architecture, UI/UX design, and functionality to deliver a high-performance solution aligned with company goals."
      ]
    },
    Inventrix: {
      jobTitle: "Software Developer @",
      duration: "OCT 2022 - NOV 2023",
      desc: [
        "Developed and maintained a reporting system for support users, managers, and executives using PHP, MySQL, HTML, and CSS.",
        "Assisted in CRM system development, reducing data entry errors by 15%.",
        "Faced challenges in app integration and managing team vision differences."
      ]
    },
    "Inventrix (Intern)": {
      jobTitle: "UI/UX Designer",
      duration: "AUG 2022 - OCT 2022",
      desc: [
        "Overhauled the product UI and UX for improved usability.",
        "Helped identify user problems and design intuitive solutions."
      ]
    }
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div
      style={{
        flexGrow: 1,
        backgroundColor: "background.paper",
        display: "flex",
        flexDirection: isHorizontal ? "column" : "row",
        height: "auto",
      }}
    >
      <Tabs
        orientation={isHorizontal ? "horizontal" : "vertical"}
        variant={isHorizontal ? "fullWidth" : "scrollable"}
        value={value}
        onChange={handleChange}
        sx={{
          borderRight: !isHorizontal ? 1 : 0,
          borderBottom: isHorizontal ? 1 : 0,
          borderColor: "divider",
        }}
      >
        {Object.keys(experienceItems).map((key, i) => (
          <Tab key={i} label={isHorizontal ? `0${i}.` : key} {...a11yProps(i)} />
        ))}
      </Tabs>

      {Object.keys(experienceItems).map((key, i) => (
        <TabPanel key={i} value={value} index={i} isHorizontal={isHorizontal}>
          <span className="joblist-job-title">
            {experienceItems[key]["jobTitle"] + " "}
          </span>
          <span className="joblist-job-company">{key}</span>
          <div className="joblist-duration">{experienceItems[key]["duration"]}</div>
          <ul className="job-description">
            {experienceItems[key]["desc"].map((descItem, j) => (
              <FadeInSection key={j} delay={`${j + 1}00ms`}>
                <li>{descItem}</li>
              </FadeInSection>
            ))}
          </ul>
        </TabPanel>
      ))}
    </div>
  );
};

export default JobList;
