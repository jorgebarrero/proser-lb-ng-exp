import { DetalleAsignacionesModule } from './detalle-asignaciones.module';

describe('DetalleAsignacionesModule', () => {
  let conexionDesconexionModule: DetalleAsignacionesModule;

  beforeEach(() => {
    conexionDesconexionModule = new DetalleAsignacionesModule();
  });

  it('should create an instance', () => {
    expect(conexionDesconexionModule).toBeTruthy();
  });
});
