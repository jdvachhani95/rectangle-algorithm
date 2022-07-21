import { Module } from '@nestjs/common';
import { AnalyzeModule } from './analyze/analyze.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AreaModule } from './area/area.module';

@Module({
  imports: [AnalyzeModule, AreaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
