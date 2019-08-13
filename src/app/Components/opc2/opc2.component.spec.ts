import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Opc2Component } from './opc2.component';

describe('Opc2Component', () => {
  let component: Opc2Component;
  let fixture: ComponentFixture<Opc2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Opc2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Opc2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
