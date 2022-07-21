import { Controller, Get, Query, UsePipes } from "@nestjs/common";
import { AreaAlgorithm } from "./area.algorithm";
import { transformInputInMappedObject } from "../utils";
import { RectangleCoordinatesValidationPipe } from "../validations/rectanglesCoordinates.pipe";

@Controller("area/calculate")
export class AreaController {
  constructor(private readonly areaService: AreaAlgorithm) {}

  @Get("two-rectangles")
  @UsePipes(new RectangleCoordinatesValidationPipe())
  calculateTotalCoveredArea(@Query("rectangles") rectangles: any): any {
    const mappedCoordinates = transformInputInMappedObject(
      JSON.parse(rectangles)
    );
    const { A, B, C, D, E, F, G, H } = mappedCoordinates;
    return this.areaService.calculateCoveredArea(A, B, C, D, E, F, G, H);
  }
}
