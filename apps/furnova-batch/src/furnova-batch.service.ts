import { Injectable } from '@nestjs/common';

@Injectable()
export class FurnovaBatchService {
  getHello(): string {
    return 'Welcome to Nestar BATCH Server!';
  }
}
