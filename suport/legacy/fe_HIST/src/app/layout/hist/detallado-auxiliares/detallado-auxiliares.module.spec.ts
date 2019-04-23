import { DetalladoAuxiliaresModule } from './detallado-auxiliares.module';

describe('DetalladoAuxiliaresModule', () => {
  let detalladoAuxiliaresModule: DetalladoAuxiliaresModule;

  beforeEach(() => {
    detalladoAuxiliaresModule = new DetalladoAuxiliaresModule();
  });

  it('should create an instance', () => {
    expect(detalladoAuxiliaresModule).toBeTruthy();
  });
});
