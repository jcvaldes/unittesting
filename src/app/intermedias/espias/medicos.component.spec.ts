import { Observable, of, throwError } from 'rxjs';
import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';
import { EMPTY } from 'rxjs';

describe('MedicosComponent', () => {

  let componente: MedicosComponent;
  // null evita el error de pasarle el httpclient
  const servicio = new MedicosService(null);

  beforeEach(() => {
    componente = new MedicosComponent(servicio);
  });
  it('Init: Debe cargar los médicos', () => {
    const medicos = ['medico1', 'medico2', 'medico3'];
    spyOn(servicio, 'getMedicos').and.callFake(() => {
      return of(medicos);
    });
    componente.ngOnInit();
    expect(componente.medicos.length).toBeGreaterThan(0);
  });
  it('Debe de llamar al servidor para agregar un médico', () => {
    const espia = spyOn(servicio, 'agregarMedico').and.callFake(medico => {
      return EMPTY;
    });
    componente.agregarMedico();
    // el metodo debe ser llamado
    expect(espia).toHaveBeenCalled();
  });
  it('Debe agregar un nuevo médico al arreglo de médicos', () => {
    const medico = {
      id: 1,
      nombre: 'Juan'
    };
    spyOn(servicio, 'agregarMedico').and.returnValue( of(medico));
    // el metodo debe ser llamado
    componente.agregarMedico();
    expect(componente.medicos.length).toBe(1);
    expect(componente.medicos.indexOf(medico)).toBeGreaterThanOrEqual(0);
  });
  it('Si falla la adición, la propiedad mensajeError, debe ser igual al error del servicio', () => {
    const miError = 'No se pudo agregar el médico';
    // genero un error
    spyOn(servicio, 'agregarMedico').and.returnValue( throwError(miError) );
    componente.agregarMedico();
    expect(componente.mensajeError).toBe(miError);
  });
  it('Debe de llamar al servidor para borrar un médico', () => {
    // esto simula la pulsacion del confirm en SI para que no aparezca en pantalla
    spyOn(window, 'confirm').and.returnValue(true);
    const espia = spyOn(servicio, 'borrarMedico').and.returnValue(EMPTY);
    componente.borrarMedico('1');
    // el metodo debe ser llamado
    expect(espia).toHaveBeenCalledWith('1');
  });

  it('No Debe de llamar al servidor para borrar un médico', () => {
    // esto simula la pulsacion del confirm en NO para que no aparezca en pantalla
    spyOn(window, 'confirm').and.returnValue(false);
    const espia = spyOn(servicio, 'borrarMedico').and.returnValue(EMPTY);
    componente.borrarMedico('1');
    // el metodo no debe ser llamado
    expect(espia).not.toHaveBeenCalledWith('1');
  });
});
