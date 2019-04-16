import { ProductividadModule } from './productividad.module';

describe('ProductividadModule', () => {
  let productividadModule: ProductividadModule;

  beforeEach(() => {
    productividadModule = new ProductividadModule();
  });

  it('should create an instance', () => {
    expect(productividadModule).toBeTruthy();
  });
});
