import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'add-todo',
    loadChildren: () => import('./pages/add-todo/add-todo.module').then(m => m.AddTodoPageModule)
  },
  {
    path: 'todo-detail/:id',
    loadChildren: () => import('./pages/todo-detail/todo-detail.module').then(m => m.TodoDetailPageModule)
  },
  {
    path: 'edit-todo',
    loadChildren: () => import('./pages/edit-todo/edit-todo.module').then(m => m.EditTodoPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
