import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterMedicoComponent } from './router-medico.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, EMPTY, Subject } from 'rxjs';

class FakeRouter {
  // simulo la funcion navigate
  navigate(params) { }
}
class FakeActivatedRoute {
  // simulo la propiedad params
  // params: Observable<any> = EMPTY;
  private subject = new Subject();
  push(valor) {
    this.subject.next(valor);
  }
  get params() {
    return this.subject.asObservable();
  }
}
describe('RouterMedicoComponent', () => {
  let component: RouterMedicoComponent;
  let fixture: ComponentFixture<RouterMedicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RouterMedicoComponent],
      providers: [
        // Router,
        // ActivatedRoute
        { provide: Router, useClass: FakeRouter },
        { provide: ActivatedRoute, useClass: FakeActivatedRoute }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Debe de redireccionar a Medico cuando se guarde', () => {
    const router = TestBed.inject(Router);
    const spy = spyOn(router, 'navigate');
    component.guardarMedico();
    expect(spy).toHaveBeenCalledWith(['medico', '123']);
  });
  it('Debe de colocar el id = nuevo', () => {
    // referencia al componente
    component = fixture.componentInstance;
    const activatedRoute: FakeActivatedRoute = TestBed.get(ActivatedRoute);
    activatedRoute.push({ id: 'nuevo' });
    expect(component.id).toBe('nuevo');
  });
});
