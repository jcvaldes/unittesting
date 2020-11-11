import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicoComponent } from './medico.component';
import { MedicoService } from './medico.service';

describe('MedicoComponent', () => {
  let component: MedicoComponent;
  // Permite obtener acceso al DOM
  let fixture: ComponentFixture<MedicoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicoComponent ],
      providers: [MedicoService],
      imports: [HttpClientModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicoComponent);
    // componentInstance: instancia el componente, gracias a esto puedo usar todos los metodos del componente ya instanciado
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('Debe crearse el componente', () => {
    expect(component).toBeTruthy();
  });
  it('Debe de retornar el nombre del médico', () => {
    const nombre = 'Juan';
    const res = component.saludarMedico( nombre );
    expect(res).toContain(nombre);
  });
});
