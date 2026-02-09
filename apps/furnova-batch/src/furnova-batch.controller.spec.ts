import { Test, TestingModule } from '@nestjs/testing';
import { FurnovaBatchController } from './furnova-batch.controller';
import { FurnovaBatchService } from './furnova-batch.service';

describe('FurnovaBatchController', () => {
  let furnovaBatchController: FurnovaBatchController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [FurnovaBatchController],
      providers: [FurnovaBatchService],
    }).compile();

    furnovaBatchController = app.get<FurnovaBatchController>(FurnovaBatchController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(furnovaBatchController.getHello()).toBe('Hello World!');
    });
  });
});
