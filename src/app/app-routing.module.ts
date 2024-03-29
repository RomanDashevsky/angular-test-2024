import { RouterModule, Routes } from '@angular/router';
import { NotFoundPageComponent } from './core/not-found-page/not-found-page.component';
import { NgModule } from '@angular/core';

export enum AppRoutes {
  DataList = 'data-list',
  AboutMe = 'about-me',
}

export const routes: Routes = [
  {
    path: '',
    redirectTo: AppRoutes.DataList,
    pathMatch: 'full',
  },
  {
    path: AppRoutes.DataList,
    loadChildren: () => import('./pages/data-list/data-list.module').then((module) => module.DataListModule),
  },
  {
    path: AppRoutes.AboutMe,
    loadChildren: () => import('./pages/about-me/about-me.module').then((module) => module.AboutMeModule),
  },
  {
    path: '**',
    component: NotFoundPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
