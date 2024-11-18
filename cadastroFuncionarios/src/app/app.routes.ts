import { RouterModule, Routes, provideRouter } from '@angular/router';
import { PaginaPrincipalComponent } from './components/pagina-principal/pagina-principal.component';
import { EmpregadosCadastradosComponent } from './components/empregados-cadastrados/empregados-cadastrados.component';
import { RelatorioEquipesComponent } from './components/relatorio-equipes/relatorio-equipes.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app.component';

export const routes: Routes = [
  { path: '', redirectTo: '/pagina-principal', pathMatch: 'full' },
  { path: 'pagina-principal', component: PaginaPrincipalComponent },
  { path: 'empregados-cadastrados', component: EmpregadosCadastradosComponent },
  { path: 'relatorio-equipes', component: RelatorioEquipesComponent },

];

  bootstrapApplication(AppComponent, {
    providers: [provideRouter(routes)]
  });