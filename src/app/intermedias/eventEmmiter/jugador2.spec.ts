import { Jugador2 } from './jugador2';

describe('Jugador 2 emit', () => {
  // const jugador = new Jugador();
  let jugador: Jugador2;
  // beforeAll()
  // beforeEach()
  // afterAll()
  // afterEach

  beforeEach(() => jugador = new Jugador2());
  it('Debe emitir un evento cuando recibe daño', () => {
    let nuevoHP = 0;
    // si bien el subscribe es asincrono espera a que se resuelva para continuar
    jugador.hpCambia.subscribe(hp => {
      nuevoHP = hp;
    });
    jugador.recibeDanio(1000);
    // espera a que se resuelva la subscripcion para continuar
    expect(nuevoHP).toBe(0);
  });
  it('Debe emitir un evento cuando recibe daño y si es menos de 10', () => {
    let nuevoHP = 0;
    // si bien el subscribe es asincrono espera a que se resuelva para continuar
    jugador.hpCambia.subscribe(hp => {
      nuevoHP = hp;
    });
    jugador.recibeDanio(50);
    // espera a que se resuelva la subscripcion para continuar
    expect(nuevoHP).toBe(50);
  });
});
