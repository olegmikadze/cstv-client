import { Module } from '@nestjs/common';
import { FeedServiceController } from './feed-service.controller';
import { FeedServiceService } from './feed-service.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      { name: 'FEED_SERVICE', transport: Transport.RMQ },
    ]),
  ],
  controllers: [FeedServiceController],
  providers: [FeedServiceService],
})
export class FeedServiceModule {}
