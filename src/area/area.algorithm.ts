import { Injectable } from "@nestjs/common";
import { AnalyzeAlgorithm } from "../analyze/analyze.algorithm";
import { RectanglesInput } from "../interfaces/analyzeDataTypes";
@Injectable()
export class AreaAlgorithm {
  constructor(private readonly analyzeAlgorithm: AnalyzeAlgorithm) {}

  // ************** Coordinates position for the Ref *****************
  // (A,B)=> Lowest x & y point of Rectangle1
  // (C,D)=> Highest x & y point of Rectangle1
  // (E,F)=> Lowest x & y point of Rectangle2
  // (G,H)=> Highest x & y point of Rectangle2

  /**
   * Calculate the area of a single rectangle.
   */
  calRectangleArea(A: number, B: number, C: number, D: number): number {
    return (C - A) * (D - B);
  }

  overlapArea(
    A: number,
    B: number,
    C: number,
    D: number,
    E: number,
    F: number,
    G: number,
    H: number
  ) {
    /* bottom left point of the overlapping area. */
    const bottom_x = Math.max(A, E);
    const bottom_y = Math.max(B, F);

    /* top right point of the overlapping area. */
    const top_x = Math.min(C, G);
    const top_y = Math.min(D, H);

    return (top_x - bottom_x) * (top_y - bottom_y);
  }

  calculateCoveredArea(
    A: number,
    B: number,
    C: number,
    D: number,
    E: number,
    F: number,
    G: number,
    H: number
  ) {
    const analyzedResult = this.analyzeAlgorithm.getAnalyzedResult(
      A,
      B,
      C,
      D,
      E,
      F,
      G,
      H
    );
    if (analyzedResult === "Intersection") {
      return (
        this.calRectangleArea(A, B, C, D) +
        this.calRectangleArea(E, F, G, H) -
        this.overlapArea(A, B, C, D, E, F, G, H)
      );
    }
    return (
      this.calRectangleArea(A, B, C, D) + this.calRectangleArea(E, F, G, H)
    );
  }
}
