import { useClickOutside } from "@mantine/hooks";
import { Box, TextField } from "@mui/material";
import { atom, useAtom } from "jotai";
import { useState } from "react";
import Tab from "./components/Tab/Tab";

export const testAtom = atom("");

function App() {
  const [num] = useAtom(testAtom);

  const [showColorPicker, setShowColorPicker] = useState(false);
  const ref = useClickOutside(() => {
    console.log("outside");
    setShowColorPicker(false);
  });

  return (
    <Box>
      <TextField
        type="text"
        size="small"
        value={num}
        onClick={() => setShowColorPicker(true)}
      />
      {showColorPicker && (
        <Box ref={ref} maxWidth="500px" marginTop={4}>
          <Tab />
        </Box>
      )}
    </Box>
  );
}

export default App;
