import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { analyzeAllPossibilitiesTestStubs } from '../src/analyze/test/stubs/analyzeRectangles.stub';

describe('AnalyzeController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/analyze/all-possibilities (GET)', () => {
    const { expectedResult, rectangles } = analyzeAllPossibilitiesTestStubs
      .filter((test) => test.expectedResult === 'Intersection')
      .pop();
    return request(app.getHttpServer())
      .get(`/analyze/all-possibilities?rectangles=${JSON.stringify(rectangles)}`)
      .expect(200)
      .expect({
        result: expectedResult,
        intersectionPoints: [
          [2, 2],
          [3, 3],
        ],
      });
  });

  it('/analyze/containment (GET)', () => {
    const { expectedResult, rectangles } = analyzeAllPossibilitiesTestStubs
      .filter((test) => test.expectedResult === 'Containment')
      .pop();
    return request(app.getHttpServer())
      .get(`/analyze/containment?rectangles=${JSON.stringify(rectangles)}`)
      .expect(200)
      .expect({
        result: expectedResult,
      });
  });

  it('/analyze/alignment (GET)', () => {
    const { expectedResult, rectangles } = analyzeAllPossibilitiesTestStubs
      .filter((test) => test.expectedResult === 'Adjacent (Proper)')
      .pop();
    return request(app.getHttpServer())
      .get(`/analyze/alignment?rectangles=${JSON.stringify(rectangles)}`)
      .expect(200)
      .expect({
        result: expectedResult,
      });
  });
});
