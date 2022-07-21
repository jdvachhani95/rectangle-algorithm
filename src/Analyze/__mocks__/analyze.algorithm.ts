import { intersectedPointsTestStubs } from '../test/stubs/analyzeRectangles.stub';

export const AnalyzeAlgorithm = jest.fn().mockReturnValue({
  analyzeAlignment: jest.fn().mockImplementation(() => {
    return 'Adjacent (Proper)';
  }),

  analyzeContainment: jest.fn().mockReturnValue('Containment'),

  getAnalyzedResult: jest.fn().mockReturnValue('Intersection'),

  findIntersectionPoints: jest
    .fn()
    .mockReturnValue(intersectedPointsTestStubs.pop().expectedResult),
});
