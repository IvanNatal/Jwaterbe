import { Test, TestingModule } from '@nestjs/testing';
import { JerkbotController } from './jerkbot.controller';
import { JerkbotService } from './jerkbot.service';

describe('JerkbotController', () => {
  let controller: JerkbotController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JerkbotController],
      providers: [JerkbotService],
    }).compile();

    controller = module.get<JerkbotController>(JerkbotController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
