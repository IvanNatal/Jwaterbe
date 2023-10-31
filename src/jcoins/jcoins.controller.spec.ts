import { Test, TestingModule } from '@nestjs/testing';
import { JcoinsController } from './jcoins.controller';
import { JcoinsService } from './jcoins.service';

describe('JcoinsController', () => {
  let controller: JcoinsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JcoinsController],
      providers: [JcoinsService],
    }).compile();

    controller = module.get<JcoinsController>(JcoinsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
