import { Test } from '@nestjs/testing';
import { AreaAlgorithm } from '../area.algorithm';
import { AreaController } from '../area.controller';
import { intersectedRectangleArea } from './stubs/areaTest.stub';

jest.mock('../area.algorithm');

describe('AreaController', () => {
  let areaController: AreaController;
  let areaAlgorithm: AreaAlgorithm;
  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [AreaController],
      providers: [AreaAlgorithm],
    }).compile();
    areaController = moduleRef.get<AreaController>(AreaController);
    areaAlgorithm = moduleRef.get<AreaAlgorithm>(AreaAlgorithm);
    jest.clearAllMocks();
  });

  describe('Test calculateTotalCoveredArea ', () => {
    it('Should calculate overlap area and deduct from total area in case of intersection', () => {
      const calculateCoveredAreaSpy = jest.spyOn(areaAlgorithm, 'calculateCoveredArea');
      const response = areaController.calculateTotalCoveredArea(
        JSON.stringify(intersectedRectangleArea.rectangles),
      );
      expect(calculateCoveredAreaSpy).toBeCalledTimes(1);
      expect(response).toEqual(intersectedRectangleArea.area);
    });
  });
});
