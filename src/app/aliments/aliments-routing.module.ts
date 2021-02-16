import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlimentListComponent } from './aliment-list/aliment-list.component';
import { AlimentsComponent } from './aliments.component';

const routes: Routes = [
  {
    path: '', component: AlimentsComponent, children: [
      { path: 'list', component: AlimentListComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlimentsRoutingModule { }
