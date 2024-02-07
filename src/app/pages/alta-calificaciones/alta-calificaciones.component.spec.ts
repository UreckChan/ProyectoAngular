import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaCalificacionesComponent } from './alta-calificaciones.component';

describe('AltaCalificacionesComponent', () => {
  let component: AltaCalificacionesComponent;
  let fixture: ComponentFixture<AltaCalificacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AltaCalificacionesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AltaCalificacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
