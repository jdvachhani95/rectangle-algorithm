import { Module } from "@nestjs/common";
import { AnalyzeController } from "./analyze.controller";
import { AnalyzeAlgorithm } from "./analyze.algorithm";

@Module({
  controllers: [AnalyzeController],
  providers: [AnalyzeAlgorithm],
  exports: [AnalyzeAlgorithm],
})
export class AnalyzeModule {}
