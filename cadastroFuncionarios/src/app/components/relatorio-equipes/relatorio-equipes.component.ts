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
    { nome: 'Time Financeiro', numero: 1, imagem: 'time-financeiro.jpg' },
    { nome: 'Time Recursos Humanos', numero: 1, imagem: 'time-recursos-humanos.jpg' },
    { nome: 'Time Marketing', numero: 1, imagem: 'time-marketing.jpg' },
    { nome: 'Time Tecnologia da Informação', numero: 1, imagem: 'time-ti.jpg' },
  ];
}
