import { Module } from "@nestjs/common";
import { AnalyzeModule } from "./Analyze/analyze.module";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";

@Module({
  imports: [AnalyzeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
