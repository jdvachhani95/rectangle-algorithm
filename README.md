# Analyze Two Rectangles (Algorithm)

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

### Description

This is a REST API service exposing an algorithm to analyze given two rectangles or calculate covered area by them. This service use nestJS and TypeScript. Different scenarios and possibilities have been cover in written unit tests for analyze rectangle algorithm.

### Pre-installation

```bash
- Node version above > 12
- npm package manager
```

### Installation

```bash
# Clone this repository
$ git clone https://github.com/jdvachhani95/rectangle-algorithm

# Open it up via
$ cd rectangle-algorithm

# Install all dependencies
$ npm install
```

### Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# server will start at http://localhost:3000
```

### Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

### API Documentation

- http://localhost:3000/analyze/all-possibilities?rectangles=${RECTANGLES_INPUT}
  (This endpoint return analyzed result from all possibilities. In case of intersection, it return intersected points as well)
- http://localhost:3000/analyze/containment?rectangles=${RECTANGLES_INPUT}
  (This endpoint analyze and return one of the possibilities of containment)
- http://localhost:3000/analyze/alignment?rectangles=${RECTANGLES_INPUT}
  (This endpoint analyze and return one of the possibilities of alignment)

#### Guide to provide Rectangles Input

RECTANGLES_INPUT = `[[A,B,C,D],[E,F,G,H]]`

##### Ref for A,B,C,D,E,F,G,H are as following:

(A,B)=> Lowest x & y point of Rectangle1
(C,D)=> Highest x & y point of Rectangle1
(E,F)=> Lowest x & y point of Rectangle2
(G,H)=> Highest x & y point of Rectangle2

### Algorithms

- Analyze given rectangles coordinates and return one of the following

  - Adjacent (Proper)
  - Adjacent (Sub-line)
  - Adjacent (Partial)
  - No Adjacent
  - Containment
  - Intersection No Containment
  - No Containment
  - No Intersection
  - Intersection

- Calculate total covered area by given rectangles coordinates

Both this algorithms can be found here:

- `src/analyze/analyze.algorithm.ts`
- `src/area/area.algorithm.ts`

### Testing different scenarios

- e2e tests have been written to validate developed endpoints
- units tests have covered all possibilities for analyze algorithm. **Unit test has been setup such a way that new scenarios can be easily included along with expected result in test stubs and unit test will automatically cover it**.
- different scenarios can be easily tested by performing given different endpoints through browser/Postman API etc
