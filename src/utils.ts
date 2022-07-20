import {
  AnalyzeRectanglesQueryInput,
  RectanglesInput,
} from "./interfaces/analyzeDataTypes";

export const transformInputInMappedObject = (
  rectanglesQueryInput: AnalyzeRectanglesQueryInput
): RectanglesInput => {
  return {
    A: rectanglesQueryInput[0][0],
    B: rectanglesQueryInput[0][1],
    C: rectanglesQueryInput[0][2],
    D: rectanglesQueryInput[0][3],
    E: rectanglesQueryInput[1][0],
    F: rectanglesQueryInput[1][1],
    G: rectanglesQueryInput[1][2],
    H: rectanglesQueryInput[1][3],
  };
};
