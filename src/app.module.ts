import { Module } from '@nestjs/common';
import { FeedServiceModule } from './feed-service/feed-service.module';
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
    FeedServiceModule,
  ],
})
export class AppModule {}
