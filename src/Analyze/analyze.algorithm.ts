import { Injectable } from '@nestjs/common';
@Injectable()
export class AnalyzeAlgorithm {
  // ************** Coordinates position for the Ref *****************
  // (A,B)=> Lowest x & y point of Rectangle1
  // (C,D)=> Highest x & y point of Rectangle1
  // (E,F)=> Lowest x & y point of Rectangle2
  // (G,H)=> Highest x & y point of Rectangle2

  analyzeAlignment(
    A: number,
    B: number,
    C: number,
    D: number,
    E: number,
    F: number,
    G: number,
    H: number,
  ): string {
    const possibilities = [
      'Adjacent (Proper)',
      'Adjacent (Sub-line)',
      'Adjacent (Partial)',
      'No Adjacent',
    ];
    switch (E === C || F === D || A === G || B === H) {
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
        return possibilities[3];
    }
  }

  analyzeContainment(
    A: number,
    B: number,
    C: number,
    D: number,
    E: number,
    F: number,
    G: number,
    H: number,
  ) {
    if (E > C || F > D || A > G || B > H) {
      return 'No Containment';
    }
    switch (true) {
      case A <= E && G <= C && B <= F && H <= D:
        return 'Containment';
      case E < C || F < D || A < G || B < H:
        return 'Intersection - No Containment';
    }
  }

  getAnalyzedResult(
    A: number,
    B: number,
    C: number,
    D: number,
    E: number,
    F: number,
    G: number,
    H: number,
  ): string {
    switch (true) {
      /* here condition E > C check that the most left point of the rectangle (EFGH) is
       * on the right side of the most right point of the rectangle (ABCD)
       * so there is no overlapping.
       */
      case E > C || F > D || A > G || B > H:
        return 'No Intersection';

      /* here condition check that all the points of the rectangle (EFGH) are inside the rectangle (ABCD)
       * hence it is a case of containment.
       */
      case A <= E && G <= C && B <= F && H <= D:
        return this.analyzeContainment(A, B, C, D, E, F, G, H);

      /* here condition check left most left coordinates of rectangle (EFGH) has an alignment with
       * right most coordinates of rectangle (ABCD)
       * then it is a case of alignment
       */
      case E === C || F === D || A === G || B === H:
        return this.analyzeAlignment(A, B, C, D, E, F, G, H);

      /* here condition E < C check that the most left point of the rectangle (EFGH) is in boundary of
       * most right point of the rectangle (ABCD)
       * then there is a overlapping.
       */
      case E < C || F < D || A < G || B < H:
        return 'Intersection';
    }
  }

  findIntersectionPoints(
    A: number,
    B: number,
    C: number,
    D: number,
    E: number,
    F: number,
    G: number,
    H: number,
  ) {
    if (E > C || F > D || A > G || B > H) return [];
    /* bottom left point of the overlapping area. */
    const bottom_x = Math.max(A, E);
    const bottom_y = Math.max(B, F);

    /* top right point of the overlapping area. */
    const top_x = Math.min(C, G);
    const top_y = Math.min(D, H);
    return [
      [bottom_x, bottom_y],
      [top_x, top_y],
    ];
  }
}
