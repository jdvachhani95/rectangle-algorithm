import { Test } from '@nestjs/testing';
import { transformInputInMappedObject } from '../../utils';
import { AnalyzeAlgorithm } from '../../analyze/analyze.algorithm';
import { AreaAlgorithm } from '../area.algorithm';
import { intersectedRectangleArea, notIntersectedRectangleArea } from './stubs/areaTest.stub';

jest.mock('../../analyze/analyze.algorithm');
describe('AreaAlgorithm', () => {
  let areaAlgorithm: AreaAlgorithm;
  let analyzeAlgorithm: AnalyzeAlgorithm;
  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [AreaAlgorithm],
      providers: [AnalyzeAlgorithm],
    }).compile();
    areaAlgorithm = moduleRef.get<AreaAlgorithm>(AreaAlgorithm);
    analyzeAlgorithm = moduleRef.get<AnalyzeAlgorithm>(AnalyzeAlgorithm);
    jest.clearAllMocks();
  });

  describe('Test calculateCoveredArea', () => {
    it('should check whether there is intersection or not', () => {
      const { A, B, C, D, E, F, G, H } = transformInputInMappedObject(
        intersectedRectangleArea.rectangles,
      );
      const analyzeSpy = jest.spyOn(analyzeAlgorithm, 'getAnalyzedResult');
      const overlapAreaSpy = jest.spyOn(areaAlgorithm, 'overlapArea');
      const res = areaAlgorithm.calculateCoveredArea(A, B, C, D, E, F, G, H);
      expect(analyzeSpy).toBeCalledTimes(1);
      expect(overlapAreaSpy).toBeCalledTimes(1);
      expect(res).toEqual(intersectedRectangleArea.area);
    });
  });
});
