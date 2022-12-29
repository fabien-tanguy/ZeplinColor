import { useAtom } from "jotai";
import { testAtom } from "../../App";
import { RGBToHex } from "../../utils/colors";
import { ColorSquareWrapper } from "./ColorSquare.style";

export interface ColorSquareProps {
  name: string;
  code: string;
}

export const ColorSquare = ({ name, code }: ColorSquareProps) => {
  const [_num, setNum] = useAtom(testAtom);

  return (
    <ColorSquareWrapper
      style={{
        backgroundColor: `${code}`,
      }}
      title={name}
      onClick={() => setNum(code)}
    />
  );
};
