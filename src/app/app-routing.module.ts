import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AlimentsModule } from './aliments/aliments.module';
import { RecipesModule } from './recipes/recipes.module';

const routes: Routes = [
  {
    path: 'aliments',

    loadChildren: () => import('./aliments/aliments.module').then(m => m.AlimentsModule)

  },

  {
    path: 'auth',

    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)

  },


  {
    path: '**',
    redirectTo: 'aliments',

  },
];

@NgModule({
  imports: [

    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
