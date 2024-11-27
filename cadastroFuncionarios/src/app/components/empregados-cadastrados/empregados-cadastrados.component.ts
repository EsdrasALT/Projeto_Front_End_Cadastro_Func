import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-empregados-cadastrados',
  standalone: true,
  imports: [CommonModule], // Adicione outros módulos necessários
  templateUrl: './empregados-cadastrados.component.html',
  styleUrls: ['./empregados-cadastrados.component.css']
})
export class EmpregadosCadastradosComponent {

  empregados = [
    {
      nome: 'Roberto da Silva',
      setor: 'TI',
      equipe: '1',
      cargo: 'Dev Sênior',
      admissao: '01/01/2024',
    },
    {
      nome: 'Andre de Souza',
      setor: 'Marketing',
      equipe: '1',
      cargo: 'Especialista MKT',
      admissao: '01/02/2024',
    },
    {
      nome: 'Maria Gomes',
      setor: 'RH',
      equipe: '1',
      cargo: 'Assistente de Escritório',
      admissao: '01/03/2024',
    },
    {
      nome: 'Camila Rabelo',
      setor: 'Setor Financeiro',
      equipe: '1',
      cargo: 'Auxiliar de Contabilidade',
      admissao: '01/04/2024',
    },
  ];

  adicionarEmpregado() {
    console.log('Adicionar Funcionário acionado!');
    // Você pode implementar lógica adicional aqui, como abrir um modal ou redirecionar para outra página
  }  

  editarEmpregado(nome: string) {
    console.log(`Editar: ${nome}`);
  }

  excluirEmpregado(nome: string) {
    console.log(`Excluir: ${nome}`);
  }
}