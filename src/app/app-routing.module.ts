import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogFormComponent } from './blog/pages/blog-form/blog-form.component';
import { BookFormComponent } from './book/pages/book-form/book-form.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'blog',
    pathMatch: 'full'
  },
  {
    path: 'blog',
    loadChildren: () => import('./blog/blog.module').then((m) => m.BlogModule)
  },
  {
    path: 'book',
    loadChildren: () => import('./book/book.module').then((m) => m.BookModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule)
  },
  {
    path: 'blog/form',
    component: BlogFormComponent
  },
  {
    path: 'blog/form/:id',
    component: BlogFormComponent
  },
  {
    path: 'book/form',
    component: BookFormComponent
  },
  {
    path: 'book/form/:id',
    component: BookFormComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
