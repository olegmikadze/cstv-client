import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller('feed-service')
export class FeedServiceController {
  constructor(@Inject('FEED_SERVICE') private readonly client: ClientProxy) {}

  @Get('/')
  async test() {
    console.log('test');
    return 'test';
  }

  @Get('/get-incidents')
  async testGetIncidents(): Promise<any> {
    console.log('test');

    const getIncidents = await this.client.send<number>(
      { cmd: 'feed/get-incidents' },
      {},
    );
    console.log('test1');

    await getIncidents.subscribe();
    console.log('test3');
  }
}
