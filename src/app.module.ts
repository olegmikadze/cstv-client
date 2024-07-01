import { Module } from '@nestjs/common';
import { FeedServiceModule } from './feed-service/feed-service.module';

@Module({
  imports: [FeedServiceModule],
})
export class AppModule {}
