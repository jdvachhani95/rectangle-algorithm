import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import {
  intersectedRectangleArea,
  notIntersectedRectangleArea,
} from '../src/area/test/stubs/areaTest.stub';

describe('AreaController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/area/calculate/two-rectangles (GET)', () => {
    const { rectangles } = intersectedRectangleArea;
    return request(app.getHttpServer())
      .get(`/area/calculate/two-rectangles?rectangles=${JSON.stringify(rectangles)}`)
      .expect(200)
      .responseType('number');
  });

  it('/area/calculate/two-rectangles (GET)', () => {
    const { rectangles } = notIntersectedRectangleArea;
    return request(app.getHttpServer())
      .get(`/area/calculate/two-rectangles?rectangles=${JSON.stringify(rectangles)}`)
      .expect(200)
      .responseType('number');
  });
});
