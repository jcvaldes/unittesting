import { FormBuilder } from '@angular/forms';
import { FormularioRegister } from './formulario';

describe('Formularios', () => {
  // const jugador = new Jugador();
  let componente: FormularioRegister;
  beforeEach(() => {
    componente = new FormularioRegister( new FormBuilder() );
  });
  it('Debe de crear el formulario con dos campos, email y password', () => {
    expect(componente.form.contains('email')).toBeTruthy();
    expect(componente.form.contains('password')).toBeTruthy();
  });
  it('El Email debe ser obligatorio', () => {
    const control = componente.form.get('email');
    control.setValue('');
    expect(control.valid).toBeFalsy();
  });
  it('El Email debe ser un correo válido', () => {
    const control = componente.form.get('email');
    control.setValue('idevkingos@gmail.com');
    expect(control.valid).toBeTruthy();
  });

});
