import { usuarioIngresado } from './booleanos';
describe('Pruebas de booleanos', () => {
  it('Debe de regresar un true', () => {
    const resp = usuarioIngresado();
    expect(resp).toBeTruthy();
    // expect(resp).not.toBeTruthy();
  });
});
