export const analyzeAlignmentTestStubs = [
  {
    rectangles: [
      [1, 1, 3, 4],
      [3, 1, 5, 4],
    ],
    expectedResult: 'Adjacent (Proper)',
  },
  {
    rectangles: [
      [1, 1, 3, 4],
      [3, 2, 5, 3],
    ],
    expectedResult: 'Adjacent (Sub-line)',
  },
  {
    rectangles: [
      [1, 1, 3, 4],
      [3, 1, 5, 3],
    ],
    expectedResult: 'Adjacent (Partial)',
  },
  {
    rectangles: [
      [0, 0, 1, 1],
      [1, 1, 2, 2],
    ],
    expectedResult: 'No Adjacent',
  },
];

export const analyzeContainmentTestStubs = [
  {
    rectangles: [
      [1, 1, 5, 5],
      [2, 2, 4, 4],
    ],
    expectedResult: 'Containment',
  },
  {
    rectangles: [
      [1, 1, 5, 5],
      [3, 3, 4, 7],
    ],
    expectedResult: 'Intersection - No Containment',
  },
  {
    rectangles: [
      [1, 1, 4, 4],
      [5, 2, 7, 3],
    ],
    expectedResult: 'No Containment',
  },
];

export const analyzeAllPossibilitiesTestStubs = [
  ...analyzeAlignmentTestStubs,
  {
    rectangles: [
      [1, 1, 6, 6],
      [3, 1, 6, 3],
    ],
    expectedResult: 'Containment',
  },
  {
    rectangles: [
      [0, 0, 3, 3],
      [2, 2, 4, 4],
    ],
    expectedResult: 'Intersection',
  },
  {
    rectangles: [
      [0, 0, 3, 3],
      [4, 4, 5, 5],
    ],
    expectedResult: 'No Intersection',
  },
];

export const intersectedPointsTestStubs = [
  {
    rectangles: [
      [0, 0, 3, 3],
      [4, 4, 5, 5],
    ],
    // as there is no intersection
    expectedResult: [],
  },
  {
    rectangles: [
      [1, 1, 2, 4],
      [0, 2, 3, 3],
    ],
    expectedResult: [
      [1, 2],
      [2, 3],
    ],
  },
];
