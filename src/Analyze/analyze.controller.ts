import { Controller, Get, Query } from "@nestjs/common";
import { AnalyzeService } from "./analyze.service";

@Controller("analyze")
export class AnalyzeController {
  constructor(private readonly analyzeService: AnalyzeService) {}

  @Get("two-rectangles")
  analyzeTwoRectangles(@Query() query): any {
    return "Intersection";
  }
}
