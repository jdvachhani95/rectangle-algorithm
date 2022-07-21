export const AreaAlgorithm = jest.fn().mockReturnValue({
  calRectangleArea: jest.fn().mockImplementation((a, b, c, d) => {
    return (c - a) * (d - b);
  }),
  overlapArea: jest.fn().mockReturnValue(1),
  calculateCoveredArea: jest.fn().mockReturnValue(7),
});
