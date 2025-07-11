import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { TodoListComponent } from './components/todo-list/todo-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <div class="app-background">
      <div class="gradient-overlay"></div>
      
      <!-- Navigation -->
      <nav class="navigation">
        <div class="nav-container">
          <div class="nav-brand">
            <span class="brand-icon">⚡</span>
            <span class="brand-text">NgRx Todo</span>
          </div>
          
          <div class="nav-links">
            <a routerLink="/todos" routerLinkActive="active" class="nav-link">
              📋 Todo App
            </a>
            <a routerLink="/guide" routerLinkActive="active" class="nav-link">
              📚 NgRx Guide
            </a>
          </div>
        </div>
      </nav>
      
      <!-- Main Content -->
      <main class="main-content">
        <router-outlet></router-outlet>
      </main>
    </div>
  `,
  styles: [`
    .app-background {
      position: relative;
      min-height: 100vh;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
      overflow-x: hidden;
    }
    
    .gradient-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: 
        radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
        radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
        radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.2) 0%, transparent 50%);
      pointer-events: none;
    }
    
    .navigation {
      position: relative;
      z-index: 10;
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    }
    
    .nav-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: var(--space-4) var(--space-8);
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    
    .nav-brand {
      display: flex;
      align-items: center;
      gap: var(--space-2);
      
      .brand-icon {
        font-size: 1.5rem;
      }
      
      .brand-text {
        color: white;
        font-size: 1.25rem;
        font-weight: 600;
      }
    }
    
    .nav-links {
      display: flex;
      gap: var(--space-6);
    }
    
    .nav-link {
      color: rgba(255, 255, 255, 0.8);
      text-decoration: none;
      font-weight: 500;
      padding: var(--space-2) var(--space-4);
      border-radius: var(--radius);
      transition: all 0.3s ease;
      
      &:hover {
        color: white;
        background: rgba(255, 255, 255, 0.1);
      }
      
      &.active {
        color: white;
        background: rgba(255, 255, 255, 0.2);
      }
    }
    
    .main-content {
      position: relative;
      z-index: 1;
    }
    
    @media (max-width: 768px) {
      .nav-container {
        padding: var(--space-3) var(--space-4);
        flex-direction: column;
        gap: var(--space-3);
      }
      
      .nav-links {
        gap: var(--space-4);
      }
      
      .nav-link {
        padding: var(--space-2) var(--space-3);
        font-size: 0.9rem;
      }
    }
  `]
})
export class AppComponent {
  title = 'NgRx Todo App';
}
