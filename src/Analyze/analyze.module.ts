import { Module } from "@nestjs/common";
import { AnalyzeController } from "./analyze.controller";
import { AnalyzeAlgorithm } from "./analyze.algorithm";

@Module({
  controllers: [AnalyzeController],
  providers: [AnalyzeAlgorithm],
})
export class AnalyzeModule {}
