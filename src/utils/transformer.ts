import { ColorSquareProps } from "../components/ColorSquare/ColorSquare";

export function transformZeplinAPI(apiResponse: any): ColorSquareProps[] {
    return apiResponse.map((color: any) => ({
      name: color.name,
      r: color.r,
      g: color.g,
      b: color.b,
      a: color.a,
    }));
  }