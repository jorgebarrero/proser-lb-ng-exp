import { ServicioDiarioModule } from './servicio-diario.module';

describe('ServicioDiarioModule', () => {
  let servicioDiarioModule: ServicioDiarioModule;

  beforeEach(() => {
    servicioDiarioModule = new ServicioDiarioModule();
  });

  it('should create an instance', () => {
    expect(servicioDiarioModule).toBeTruthy();
  });
});
