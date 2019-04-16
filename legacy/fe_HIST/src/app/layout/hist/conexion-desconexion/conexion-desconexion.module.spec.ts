import { ConexionDesconexionModule } from './conexion-desconexion.module';

describe('ConexionDesconexionModule', () => {
  let conexionDesconexionModule: ConexionDesconexionModule;

  beforeEach(() => {
    conexionDesconexionModule = new ConexionDesconexionModule();
  });

  it('should create an instance', () => {
    expect(conexionDesconexionModule).toBeTruthy();
  });
});
