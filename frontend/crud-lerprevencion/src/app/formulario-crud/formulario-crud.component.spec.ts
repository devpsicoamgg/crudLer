import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioCrudComponent } from './formulario-crud.component';

describe('FormularioCrudComponent', () => {
  let component: FormularioCrudComponent;
  let fixture: ComponentFixture<FormularioCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioCrudComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormularioCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
