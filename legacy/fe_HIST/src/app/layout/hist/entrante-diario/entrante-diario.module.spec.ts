import { EntranteDiarioModule } from './entrante-diario.module';

describe('EntranteDiarioModule', () => {
  let entranteDiarioModule: EntranteDiarioModule;

  beforeEach(() => {
    entranteDiarioModule = new EntranteDiarioModule();
  });

  it('should create an instance', () => {
    expect(entranteDiarioModule).toBeTruthy();
  });
});
