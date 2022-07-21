import { Module } from "@nestjs/common";
import { AnalyzeModule } from "./analyze/analyze.module";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";

@Module({
  imports: [AnalyzeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
