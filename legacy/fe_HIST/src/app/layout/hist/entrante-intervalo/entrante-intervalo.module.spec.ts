import { EntranteIntervaloModule } from './entrante-intervalo.module';

describe('EntranteIntervaloModule', () => {
  let EntranteIntervaloModule: EntranteIntervaloModule;

  beforeEach(() => {
    EntranteIntervaloModule = new EntranteIntervaloModule();
  });

  it('should create an instance', () => {
    expect(EntranteIntervaloModule).toBeTruthy();
  });
});
