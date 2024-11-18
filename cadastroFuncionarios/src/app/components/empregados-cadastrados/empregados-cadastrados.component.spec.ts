import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpregadosCadastradosComponent } from './empregados-cadastrados.component';

describe('EmpregadosCadastradosComponent', () => {
  let component: EmpregadosCadastradosComponent;
  let fixture: ComponentFixture<EmpregadosCadastradosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpregadosCadastradosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpregadosCadastradosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
