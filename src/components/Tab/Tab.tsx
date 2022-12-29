import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import fdjColors from "../../assets/colors/colors-fdj.json";
import eumlColors from "../../assets/colors/colors-euml.json";
import lotoColors from "../../assets/colors/colors-loto.json";
import illikoColors from "../../assets/colors/colors-illiko.json";
import { Flex, TabWrapper } from "./Tab.style";
import { ColorSquare } from "../ColorSquare/ColorSquare";
import { transformZeplinAPI } from "../../utils/transformer";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  return (
    <Box>
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
                    >
                      {game}
                    </Typography>
                  </TabWrapper>
                </Tab>
              ))}
            </Flex>
          </TabList>
        </Box>
        {[[fdjColors], [eumlColors, lotoColors], [illikoColors]].map(
          (project, index) => {
            return (
              <TabPanel key={index}>
                {project.map((project, index) => {
                  const colors = React.useRef(transformZeplinAPI(project));
                  return (
                    <React.Fragment key={index}>
                      <Typography>{project[0].source.project.name}</Typography>
                      <Flex>
                        {colors.current.map((color) => (
                          <ColorSquare
                            r={color.r}
                            g={color.g}
                            b={color.b}
                            a={color.a}
                            name={color.name}
                            key={color.name}
                          />
                        ))}
                      </Flex>
                    </React.Fragment>
                  );
                })}
              </TabPanel>
            );
          }
        )}
      </Tabs>
    </Box>
  );
}
