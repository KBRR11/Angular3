import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Opc1Component } from './opc1.component';

describe('Opc1Component', () => {
  let component: Opc1Component;
  let fixture: ComponentFixture<Opc1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Opc1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Opc1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
