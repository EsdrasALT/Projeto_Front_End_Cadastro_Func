import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  template: `
    <nav class="navbar">
      <div class="logo">
        <img src="assets/Header.png" alt="Logo" />
      </div>
      <ul class="nav-links">
        <li><a routerLink="/pagina-principal">Página Principal</a></li>
        <li><a routerLink="/empregados-cadastrados">Empregados</a></li>
        <li><a routerLink="/relatorio-equipes">Equipes</a></li>
      </ul>
      <div class="auth-buttons">
        <button class="btn btn-outline">Entrar</button>
        <button class="btn btn-primary">Registrar</button>
      </div>
    </nav>
  `,
  styles: [
    `
      .navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 2rem;
        background-color: #fff;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      }

      .logo img {
        height: 40px;
      }

      .nav-links {
        list-style: none;
        display: flex;
        gap: 1.5rem;
      }

      .nav-links li a {
        text-decoration: none;
        color: #333;
        font-weight: 500;
      }

      .auth-buttons .btn {
        padding: 0.5rem 1rem;
        border: none;
        cursor: pointer;
      }

      .btn-outline {
        background: transparent;
        border: 1px solid #333;
        color: #333;
      }

      .btn-primary {
        background-color: #000;
        color: #fff;
      }
    `,
  ],
})
export class NavbarComponent {}
