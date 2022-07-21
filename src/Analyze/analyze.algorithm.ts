import { Injectable } from "@nestjs/common";
import { RectanglesInput } from "../interfaces/analyzeDataTypes";
@Injectable()
export class AnalyzeAlgorithm {
  constructor() {}

  // ************** Coordinates position for the Ref *****************
  // (A,B)=> Lowest x & y point of Rectangle1
  // (C,D)=> Highest x & y point of Rectangle1
  // (E,F)=> Lowest x & y point of Rectangle2
  // (G,H)=> Highest x & y point of Rectangle2

  analyzeAlignment(rectanglesCoordinates: RectanglesInput): string {
    const possibilities = [
      "Adjacent (Proper)",
      "Adjacent (Sub-line)",
      "Adjacent (Partial)",
    ];
    const { A, B, C, D, E, F, G, H } = rectanglesCoordinates;
    switch (true) {
      case E === C || G === A:
        switch (true) {
          case F === B && H === D:
            return possibilities[0];
          case F > B && H < D:
            return possibilities[1];
          case (B >= F && F <= D) || (B >= H && H <= D):
            return possibilities[2];
        }
      case F === D || H === B:
        switch (true) {
          case E === A && G === C:
            return possibilities[0];
          case E > A && G < C:
            return possibilities[1];
          case (A >= E && E <= C) || (A >= G && G <= C):
            return possibilities[2];
        }
      default:
        return "In Valid Inputs";
    }
  }

  getAnalyzedResult(rectanglesCoordinates: RectanglesInput): string {
    const { A, B, C, D, E, F, G, H } = rectanglesCoordinates;
    console.log(rectanglesCoordinates);
    switch (true) {
      case E > C || F > D || A > G || B > H:
        return "No Intersection";
      case A <= E && G <= C && B <= F && H <= D:
        return "Containment";
      case E === C || F === D || A === G || B === H:
        return this.analyzeAlignment(rectanglesCoordinates);
      case E < C || F < D || A < G || B < H:
        return "Intersection";
    }
  }
}