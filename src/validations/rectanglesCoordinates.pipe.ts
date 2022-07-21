import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common';
import { transformInputInMappedObject } from '../utils';

@Injectable()
export class RectangleCoordinatesValidationPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    if (metadata.type === 'query') {
      const parsedValue = JSON.parse(value);
      if (parsedValue.some((rectanglePoints: any) => rectanglePoints.length !== 4)) {
        throw new BadRequestException('Invalid given rectangles input');
      }
      const mappedCoordinates = transformInputInMappedObject(parsedValue);
      const { A, B, C, D, E, F, G, H } = mappedCoordinates;
      if (A === C || B === D || E === G || F === H) {
        throw new BadRequestException(
          "Either one or both rectangle's given coordinates can not form a proper rectangle. Angled Rectangles are out of scope",
        );
      }
      if (A === E && B == F && C === G && D === H) {
        throw new BadRequestException('Require two distinct rectangles values');
      }
    }
    return value;
  }
}
