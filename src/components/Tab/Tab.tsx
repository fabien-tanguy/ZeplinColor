import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import fdjColors from "../../assets/colors/colors-fdj.json";
import eumlColors from "../../assets/colors/colors-euml.json";
import lotoColors from "../../assets/colors/colors-loto.json";
import illikoColors from "../../assets/colors/colors-illiko.json";
import { Flex } from "./Tab.style";
import { ColorSquare } from "../ColorSquare/ColorSquare";
import { transformZeplinAPI } from "../../utils/transformer";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={handleChange}>
          {["FDJ", "Jeux de tirage", "Jeux instant"].map((game, index) => (
            <Tab label={game} key={index} disableRipple {...a11yProps(0)} />
          ))}
        </Tabs>
      </Box>
      {[[fdjColors], [eumlColors, lotoColors], [illikoColors]].map(
        (project, index) => {
          return (
            <TabPanel value={value} index={index} key={index}>
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
    </Box>
  );
}
