import { ServicioHistoricoModule } from './servicio-historico.module';

describe('ServicioHistoricoModule', () => {
  let servicioHistoricoModule: ServicioHistoricoModule;

  beforeEach(() => {
    servicioHistoricoModule = new ServicioHistoricoModule();
  });

  it('should create an instance', () => {
    expect(servicioHistoricoModule).toBeTruthy();
  });
});
