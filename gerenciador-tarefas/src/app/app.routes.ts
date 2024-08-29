import { Routes } from '@angular/router';
import { TarefaRoutes } from './tarefas';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/tarefas/listar',
    pathMatch: 'full'
  },
  ...TarefaRoutes
];
