import { OperativoDetalladoModule } from './operativo-detallado.module';

describe('OperativoDetalladoModule', () => {
  let operativoDetalladoModule: OperativoDetalladoModule;

  beforeEach(() => {
    operativoDetalladoModule = new OperativoDetalladoModule();
  });

  it('should create an instance', () => {
    expect(operativoDetalladoModule).toBeTruthy();
  });
});
