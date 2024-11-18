import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-relatorio-equipes',
  standalone: true,
  imports: [CommonModule], // Adicione outros módulos necessários
  templateUrl: './relatorio-equipes.component.html',
  styleUrls: ['./relatorio-equipes.component.css']
})
export class RelatorioEquipesComponent  {
  equipes = [
    { nome: 'Time Financeiro', numero: 1 },
    { nome: 'Time Recursos Humanos', numero: 1 },
    { nome: 'Time Marketing', numero: 1 },
    { nome: 'Time Tecnologia da Informação', numero: 1 },
  ];
}
