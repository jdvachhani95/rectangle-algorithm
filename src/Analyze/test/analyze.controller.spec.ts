import { Test } from '@nestjs/testing';
import { AnalyzeAlgorithm } from '../analyze.algorithm';
import { AnalyzeController } from '../analyze.controller';
import {
  analyzeAlignmentTestStubs,
  analyzeAllPossibilitiesTestStubs,
  analyzeContainmentTestStubs,
} from '../test/stubs/analyzeRectangles.stub';

jest.mock('../analyze.algorithm');
describe('AnalyzeController', () => {
  let analyzeController: AnalyzeController;
  let analyzeAlgorithm: AnalyzeAlgorithm;
  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [AnalyzeController],
      providers: [AnalyzeAlgorithm],
    }).compile();
    analyzeController = moduleRef.get<AnalyzeController>(AnalyzeController);
    analyzeAlgorithm = moduleRef.get<AnalyzeAlgorithm>(AnalyzeAlgorithm);
    jest.clearAllMocks();
  });

  describe('Test analyzeTwoRectangles ', () => {
    it('Should return intersectedPoints in response in case of intersection', () => {
      const findIntersectionPointsSpy = jest.spyOn(analyzeAlgorithm, 'findIntersectionPoints');
      const response = analyzeController.analyzeTwoRectangles(
        JSON.stringify(
          analyzeAllPossibilitiesTestStubs
            .filter((test) => test.expectedResult === 'Intersection')
            .pop().rectangles,
        ),
      );
      expect(findIntersectionPointsSpy).toBeCalledTimes(1);
      expect(response.intersectionPoints).not.toBeNull();
    });
  });

  describe('Test analyzeRectanglesContainment ', () => {
    it('Should return containment', () => {
      const findIntersectionPointsSpy = jest.spyOn(analyzeAlgorithm, 'findIntersectionPoints');
      const response = analyzeController.analyzeRectanglesContainment(
        JSON.stringify(
          analyzeContainmentTestStubs.filter((test) => test.expectedResult === 'Containment').pop()
            .rectangles,
        ),
      );
      expect(findIntersectionPointsSpy).toBeCalledTimes(0);
      expect(response.result).toEqual('Containment');
    });
  });

  describe('Test analyzeRectanglesAlignment ', () => {
    it('Should return Adjacent (Proper)', () => {
      const findIntersectionPointsSpy = jest.spyOn(analyzeAlgorithm, 'findIntersectionPoints');
      const response = analyzeController.analyzeRectanglesAlignment(
        JSON.stringify(
          analyzeAlignmentTestStubs.filter((test) => test.expectedResult === 'No Adjacent').pop()
            .rectangles,
        ),
      );
      expect(findIntersectionPointsSpy).toBeCalledTimes(0);
      expect(response.result).toEqual('Adjacent (Proper)');
    });
  });
});
