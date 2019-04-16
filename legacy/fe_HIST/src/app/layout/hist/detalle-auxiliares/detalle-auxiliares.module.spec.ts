import { DetalleAuxiliaresModule } from './detalle-auxiliares.module';

describe('DetalleAuxiliaresModule', () => {
  let conexionDesconexionModule: DetalleAuxiliaresModule;

  beforeEach(() => {
    conexionDesconexionModule = new DetalleAuxiliaresModule();
  });

  it('should create an instance', () => {
    expect(conexionDesconexionModule).toBeTruthy();
  });
});
