import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlimentsRoutingModule } from './aliments-routing.module';
import { AlimentsComponent } from './aliments.component';
import { AlimentListComponent } from './aliment-list/aliment-list.component';
import { SharedModule } from '../shared/shared/shared.module';


@NgModule({
  declarations: [AlimentsComponent, AlimentListComponent],
  imports: [
    CommonModule,
    SharedModule,
    AlimentsRoutingModule,

  ]
})
export class AlimentsModule { }
