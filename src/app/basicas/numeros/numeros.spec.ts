import { incrementar } from './numeros';

describe('Pruebas de numeros', () => {
  it('Debe retornar 100 si el numero ingresado es mayor a 100', () => {
    const resp = incrementar(101);
    expect(resp).toBe(100);
  });
  it('Debe de retornar el número + 1, si el número ingresado es menor a 100', () => {
    const resp = incrementar(50);
    expect(resp).toBe(51);
  });
});
