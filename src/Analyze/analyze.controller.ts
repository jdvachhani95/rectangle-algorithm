import { Controller, Get, Query } from "@nestjs/common";
import { AnalyzeAlgorithm } from "./analyze.algorithm";
import {
  AnalyzeRectanglesQueryInput,
  RectanglesInput,
} from "../interfaces/analyzeDataTypes";
import { transformInputInMappedObject } from "../utils";

@Controller("analyze")
export class AnalyzeController {
  constructor(private readonly analyzeService: AnalyzeAlgorithm) {}

  @Get("two-rectangles")
  analyzeTwoRectangles(@Query("rectangles") rectangles: any): any {
    const mappedCoordinates = transformInputInMappedObject(
      JSON.parse(rectangles)
    );
    return this.analyzeService.getAnalyzedResult(mappedCoordinates);
  }
}
