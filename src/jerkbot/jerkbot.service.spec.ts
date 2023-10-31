import { Test, TestingModule } from '@nestjs/testing';
import { JerkbotService } from './jerkbot.service';

describe('JerkbotService', () => {
  let service: JerkbotService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JerkbotService],
    }).compile();

    service = module.get<JerkbotService>(JerkbotService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
