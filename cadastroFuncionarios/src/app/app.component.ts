import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  template: `
    <nav>
      <ul>
        <li><a routerLink="/pagina-principal">Página Principal</a></li>
        <li><a routerLink="/empregados-cadastrados">Empregados Cadastrados</a></li>
        <li><a routerLink="/relatorio-equipes">Relatório de Equipes</a></li>
      </ul>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
