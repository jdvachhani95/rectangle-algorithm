import { Controller, Get, Query, UsePipes } from '@nestjs/common';
import { AnalyzeAlgorithm } from './analyze.algorithm';
import { transformInputInMappedObject } from '../utils';
import { RectangleCoordinatesValidationPipe } from '../validations/rectanglesCoordinates.pipe';

@Controller('analyze')
export class AnalyzeController {
  constructor(private readonly analyzeAlgorithm: AnalyzeAlgorithm) {}

  @Get('all-possibilities')
  @UsePipes(new RectangleCoordinatesValidationPipe())
  analyzeTwoRectangles(@Query('rectangles') rectangles: any) {
    const mappedCoordinates = transformInputInMappedObject(JSON.parse(rectangles));
    const { A, B, C, D, E, F, G, H } = mappedCoordinates;
    const analyzedResult = {
      result: this.analyzeAlgorithm.getAnalyzedResult(A, B, C, D, E, F, G, H),
    };
    if (analyzedResult.result === 'Intersection') {
      analyzedResult['intersectionPoints'] = this.analyzeAlgorithm.findIntersectionPoints(
        A,
        B,
        C,
        D,
        E,
        F,
        G,
        H,
      );
    }
    return analyzedResult;
  }

  @Get('containment')
  @UsePipes(new RectangleCoordinatesValidationPipe())
  analyzeRectanglesContainment(@Query('rectangles') rectangles: any) {
    const mappedCoordinates = transformInputInMappedObject(JSON.parse(rectangles));
    const { A, B, C, D, E, F, G, H } = mappedCoordinates;
    return {
      result: this.analyzeAlgorithm.analyzeContainment(A, B, C, D, E, F, G, H),
    };
  }

  @Get('alignment')
  @UsePipes(new RectangleCoordinatesValidationPipe())
  analyzeRectanglesAlignment(@Query('rectangles') rectangles: any) {
    const mappedCoordinates = transformInputInMappedObject(JSON.parse(rectangles));
    const { A, B, C, D, E, F, G, H } = mappedCoordinates;
    return {
      result: this.analyzeAlgorithm.analyzeAlignment(A, B, C, D, E, F, G, H),
    };
  }
}
