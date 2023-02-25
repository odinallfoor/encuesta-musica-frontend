import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuEncuestadosComponent } from './menu-encuestados.component';

describe('MenuEncuestadosComponent', () => {
  let component: MenuEncuestadosComponent;
  let fixture: ComponentFixture<MenuEncuestadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuEncuestadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuEncuestadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
