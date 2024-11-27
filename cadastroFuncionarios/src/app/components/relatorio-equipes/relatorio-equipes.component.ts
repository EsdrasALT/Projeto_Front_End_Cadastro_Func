import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-relatorio-equipes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './relatorio-equipes.component.html',
  styleUrls: ['./relatorio-equipes.component.css']
})

export class RelatorioEquipesComponent {
  equipes = [
    { nome: 'Time Financeiro', numero: 1, imagem: 'assets/timeFinanceiro.png' },
    { nome: 'Time Recursos Humanos', numero: 1, imagem: 'assets/images/timeRecursosHumanos.png' },
    { nome: 'Time Marketing', numero: 1, imagem: 'assets/images/timeMarketing.png' },
    { nome: 'Time Tecnologia da Informação', numero: 1, imagem: 'assets/images/timeTI.png' },
  ];
}
