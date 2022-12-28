import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ZepplinColors from "./assets/data-zeplin-color.json";

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

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const colors = React.useRef(transformZeplinAPI(ZepplinColors));
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
{["FDJ","Jeux de tirage", "Jeux instant"].map((game,index) => (
          <Tab label={game} {...a11yProps(0)} />
))}
        </Tabs>
      </Box>
      {["","", ""].map((game,index) => (
        <TabPanel value={value} index={index} key={index}>
        {colors.current.map((color) => {
          return (
            <ColorSquare
              r={color.r}
              g={color.g}
              b={color.b}
              a={color.a}
              key={color.name}
              name={color.name}
            />
          );
        })}
      </TabPanel>
      ))}
    </Box>
  );
}

interface ColorSquareProps {
  name: string;
  r: number;
  g: number;
  b: number;
  a: number;
}

function ColorSquare({ r, g, b, a, name }: ColorSquareProps) {
  console.log(`rgba(${r},${g},${b},${a})`);
  return (
    <div
      style={{
        height: "20px",
        width: "20px",
        backgroundColor: `rgba(${r},${g},${b},${a})`,
      }}
      title={name}
    />
  );
}

function transformZeplinAPI(apiResponse: any): ColorSquareProps[] {
  return apiResponse.map((color: any) => ({
    name: color.name,
    r: color.r,
    g: color.g,
    b: color.b,
    a: color.a,
  }));
}
