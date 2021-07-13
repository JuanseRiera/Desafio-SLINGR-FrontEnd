import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadoraDeExpresionesComponent } from './calculadora-de-expresiones.component';

describe('CalculadoraDeExpresionesComponent', () => {
  let component: CalculadoraDeExpresionesComponent;
  let fixture: ComponentFixture<CalculadoraDeExpresionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculadoraDeExpresionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculadoraDeExpresionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
