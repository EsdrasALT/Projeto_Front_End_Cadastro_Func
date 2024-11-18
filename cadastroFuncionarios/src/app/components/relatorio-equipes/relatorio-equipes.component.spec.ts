import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatorioEquipesComponent } from './relatorio-equipes.component';

describe('RelatorioEquipesComponent', () => {
  let component: RelatorioEquipesComponent;
  let fixture: ComponentFixture<RelatorioEquipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RelatorioEquipesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelatorioEquipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
