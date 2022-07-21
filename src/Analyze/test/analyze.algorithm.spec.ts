import { Test } from '@nestjs/testing';
import { transformInputInMappedObject } from '../../utils';
import { AnalyzeAlgorithm } from '../analyze.algorithm';
import {
  analyzeAlignmentTestStubs,
  analyzeAllPossibilitiesTestStubs,
  analyzeContainmentTestStubs,
  intersectedPointsTestStubs,
} from '../test/stubs/analyzeRectangles.stub';

describe('AnalyzeAlgorithm', () => {
  let analyzeAlgorithm: AnalyzeAlgorithm;
  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [AnalyzeAlgorithm],
    }).compile();
    analyzeAlgorithm = moduleRef.get<AnalyzeAlgorithm>(AnalyzeAlgorithm);
    jest.clearAllMocks();
  });

  describe('Test alignment test cases', () => {
    analyzeAlignmentTestStubs.forEach((testCase) => {
      it(`Test case for: ${testCase.expectedResult}`, () => {
        const { A, B, C, D, E, F, G, H } = transformInputInMappedObject(testCase.rectangles);
        const res = analyzeAlgorithm.analyzeAlignment(A, B, C, D, E, F, G, H);
        expect(res).toEqual(testCase.expectedResult);
      });
    });
  });

  describe('Test containment test cases', () => {
    analyzeContainmentTestStubs.forEach((testCase) => {
      it(`Test case for: ${testCase.expectedResult}`, () => {
        const { A, B, C, D, E, F, G, H } = transformInputInMappedObject(testCase.rectangles);
        const res = analyzeAlgorithm.analyzeContainment(A, B, C, D, E, F, G, H);
        expect(res).toEqual(testCase.expectedResult);
      });
    });
  });

  describe('Test all possibilities', () => {
    analyzeAllPossibilitiesTestStubs.forEach((testCase) => {
      it(`Test case for: ${testCase.expectedResult}`, () => {
        const { A, B, C, D, E, F, G, H } = transformInputInMappedObject(testCase.rectangles);
        const res = analyzeAlgorithm.getAnalyzedResult(A, B, C, D, E, F, G, H);
        expect(res).toEqual(testCase.expectedResult);
      });
    });
  });

  describe('Test intersected points in case of intersections', () => {
    intersectedPointsTestStubs.forEach((testCase) => {
      it(`Test calculated intersected points`, () => {
        const { A, B, C, D, E, F, G, H } = transformInputInMappedObject(testCase.rectangles);
        const res = analyzeAlgorithm.findIntersectionPoints(A, B, C, D, E, F, G, H);
        expect(res).toEqual(testCase.expectedResult);
      });
    });
  });
});
