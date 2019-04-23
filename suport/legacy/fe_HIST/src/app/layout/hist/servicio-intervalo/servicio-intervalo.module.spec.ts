import { ServicioIntervaloModule } from './servicio-intervalo.module';

describe('ServicioIntervaloModule', () => {
  let servicioIntervaloModule: ServicioIntervaloModule;

  beforeEach(() => {
    servicioIntervaloModule = new ServicioIntervaloModule();
  });

  it('should create an instance', () => {
    expect(servicioIntervaloModule).toBeTruthy();
  });
});
