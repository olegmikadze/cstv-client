import { Module } from '@nestjs/common';
import { FeedServiceController } from './feed-service.controller';
import { FeedServiceService } from './feed-service.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'FEED_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://localhost:5672'],
          queue: 'feed_queue',
          queueOptions: {
            durable: false,
          },
        },
      },
    ]),
  ],
  controllers: [FeedServiceController],
  providers: [FeedServiceService],
})
export class FeedServiceModule {}
