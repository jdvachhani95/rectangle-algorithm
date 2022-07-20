import { Controller, Get, Query } from "@nestjs/common";
import { AnalyzeService } from "./analyze.service";
import {
  AnalyzeRectanglesQueryInput,
  RectanglesInput,
} from "../interfaces/analyzeDataTypes";
import { transformInputInMappedObject } from "../utils";

@Controller("analyze")
export class AnalyzeController {
  constructor(private readonly analyzeService: AnalyzeService) {}

  @Get("two-rectangles")
  analyzeTwoRectangles(@Query("rectangles") rectangles: any): any {
    const mappedCoordinates = transformInputInMappedObject(
      JSON.parse(rectangles)
    );
    return this.analyzeService.getAnalyzedResult(mappedCoordinates);
  }
}
