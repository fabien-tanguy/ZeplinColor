import { useAtom } from "jotai";
import { testAtom } from "../../App";
import { RGBToHex } from "../../utils/colors";
import { ColorSquareWrapper } from "./ColorSquare.style";

export interface ColorSquareProps {
  name: string;
  r: number;
  g: number;
  b: number;
  a: number;
}

export const ColorSquare = ({ r, g, b, a, name }: ColorSquareProps) => {
  const [_num, setNum] = useAtom(testAtom);

  return (
    <ColorSquareWrapper
      style={{
        backgroundColor: `rgba(${r},${g},${b},${a})`,
      }}
      title={name}
      onClick={() => setNum(RGBToHex(r, g, b))}
    />
  );
};
