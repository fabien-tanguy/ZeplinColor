import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Flex, TabWrapper } from "./Tab.style";
import { ColorSquare } from "../ColorSquare/ColorSquare";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

// COLORS
import fdjColors from "../../assets/colors/colors-fdj.json";
import alertsColors from "../../assets/colors/colors-alerts.json";
import othersColors from "../../assets/colors/colors-others.json";
import eumlColors from "../../assets/colors/colors-euml.json";
import lotoColors from "../../assets/colors/colors-loto.json";
import illikoColors from "../../assets/colors/colors-illiko.json";

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  return (
    <Box border="1px solid #dedede" borderRadius="10px">
      <Tabs>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList>
            <Flex>
              {["FDJ", "Jeux de tirage", "Jeux instant"].map((game, index) => (
                <Tab
                  style={{ listStyleType: "none" }}
                  label={game}
                  key={index}
                  onClick={() => setSelectedIndex(index)}
                  {...a11yProps(0)}
                >
                  <TabWrapper isSelected={index === selectedIndex}>
                    <Typography
                      fontWeight={index === selectedIndex ? "600" : "normal"}
                      fontSize="small"
                    >
                      {game}
                    </Typography>
                  </TabWrapper>
                </Tab>
              ))}
            </Flex>
          </TabList>
        </Box>
        {[
          // TAB 1
          [fdjColors, othersColors, alertsColors],
          // TAB 2
          [eumlColors, lotoColors],
          // TAB 3
          [illikoColors],
        ].map((project, index) => {
          return (
            <TabPanel key={index}>
              {project.map((project, index) => {
                const colors = React.useRef(project);
                return (
                  <Box m={2} key={index}>
                    <Typography mb={1} fontSize="small">
                      {project.name}
                    </Typography>
                    <Flex>
                      {colors.current.colors.map((color) => (
                        <ColorSquare
                          name={color.name}
                          code={color.code}
                          key={color.name}
                        />
                      ))}
                    </Flex>
                  </Box>
                );
              })}
            </TabPanel>
          );
        })}
      </Tabs>
    </Box>
  );
}
