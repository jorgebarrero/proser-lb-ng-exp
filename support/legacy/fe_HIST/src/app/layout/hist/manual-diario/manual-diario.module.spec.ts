import { ManualDiarioModule } from './manual-diario.module';

describe('ManualDiarioModule', () => {
  let ManualDiarioModule: ManualDiarioModule;

  beforeEach(() => {
    ManualDiarioModule = new ManualDiarioModule();
  });

  it('should create an instance', () => {
    expect(ManualDiarioModule).toBeTruthy();
  });
});
