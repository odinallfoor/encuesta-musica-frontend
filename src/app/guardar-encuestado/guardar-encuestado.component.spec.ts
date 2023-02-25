import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardarEncuestadoComponent } from './guardar-encuestado.component';

describe('GuardarEncuestadoComponent', () => {
  let component: GuardarEncuestadoComponent;
  let fixture: ComponentFixture<GuardarEncuestadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuardarEncuestadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuardarEncuestadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
