import {
  BadRequestException,
  Controller,
  Get,
  Query,
  UsePipes,
} from "@nestjs/common";
import { AnalyzeAlgorithm } from "./analyze.algorithm";
import { transformInputInMappedObject } from "../utils";
import { RectangleCoordinatesValidationPipe } from "../validations/rectanglesCoordinates.pipe";

@Controller("analyze")
export class AnalyzeController {
  constructor(private readonly analyzeService: AnalyzeAlgorithm) {}

  @Get("two-rectangles")
  @UsePipes(new RectangleCoordinatesValidationPipe())
  analyzeTwoRectangles(@Query("rectangles") rectangles: any): any {
    const mappedCoordinates = transformInputInMappedObject(
      JSON.parse(rectangles)
    );
    const { A, B, C, D, E, F, G, H } = mappedCoordinates;
    return this.analyzeService.getAnalyzedResult(A, B, C, D, E, F, G, H);
  }
}
