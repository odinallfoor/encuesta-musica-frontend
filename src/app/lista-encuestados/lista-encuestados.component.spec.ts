import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaEncuestadosComponent } from './lista-encuestados.component';

describe('ListaEncuestadosComponent', () => {
  let component: ListaEncuestadosComponent;
  let fixture: ComponentFixture<ListaEncuestadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaEncuestadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaEncuestadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
