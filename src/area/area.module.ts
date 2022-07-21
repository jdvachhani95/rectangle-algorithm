import { Module } from '@nestjs/common';
import { AreaController } from './area.controller';
import { AreaAlgorithm } from './area.algorithm';
import { AnalyzeAlgorithm } from '../analyze/analyze.algorithm';
import { AnalyzeModule } from '../analyze/analyze.module';

@Module({
  imports: [AnalyzeModule],
  controllers: [AreaController],
  providers: [AreaAlgorithm, AnalyzeAlgorithm],
})
export class AreaModule {}
