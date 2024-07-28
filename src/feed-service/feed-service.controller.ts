import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller('feed-service')
export class FeedServiceController {
  constructor(
    @Inject('FEED_SERVICE') private readonly feedClient: ClientProxy,
  ) {}

  @Get('/')
  async test() {
    console.log('test');
    return 'test';
  }

  @Get('/get-incidents')
  async testGetIncidents(): Promise<any> {
    const res = await this.feedClient.send({ cmd: 'get-incidents' }, {});
    console.log(res);

    // await getIncidents.subscribe();
  }
}
