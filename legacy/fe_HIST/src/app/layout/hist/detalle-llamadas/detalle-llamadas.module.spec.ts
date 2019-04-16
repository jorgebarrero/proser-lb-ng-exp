import { DetalleLlamadasModule } from './detalle-llamadas.module';

describe('DetalleLlamadasModule', () => {
  let detalleLlamadasModule: DetalleLlamadasModule;

  beforeEach(() => {
    detalleLlamadasModule = new DetalleLlamadasModule();
  });

  it('should create an instance', () => {
    expect(detalleLlamadasModule).toBeTruthy();
  });
});
