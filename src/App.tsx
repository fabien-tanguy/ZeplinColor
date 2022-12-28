import { createTheme, ThemeProvider } from "@mui/material";
import { atom, useAtom } from "jotai";
import Tab from "./components/Tab/Tab";

export const testAtom = atom("");

function App() {
  const [num] = useAtom(testAtom);

  return (
    <>
      <Tab />
      <p>Selected color: {num}</p>
    </>
  );
}

export default App;
