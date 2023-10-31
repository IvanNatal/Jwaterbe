import { Test, TestingModule } from '@nestjs/testing';
import { JcoinsService } from './jcoins.service';

describe('JcoinsService', () => {
  let service: JcoinsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JcoinsService],
    }).compile();

    service = module.get<JcoinsService>(JcoinsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
