import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlimentsRoutingModule } from './aliments-routing.module';
import { AlimentsComponent } from './aliments.component';
import { AlimentListComponent } from './aliment-list/aliment-list.component';
import { SharedModule } from '../shared/shared.module';
import { NavbarComponent } from '../shared/components/navbar/navbar.component';
import { AlimentComponent } from './aliment-list/aliment/aliment.component';

@NgModule({
  declarations: [AlimentsComponent, AlimentListComponent,AlimentComponent,NavbarComponent],
  imports: [
    CommonModule,
    SharedModule,
    AlimentsRoutingModule,
  ]
})
export class AlimentsModule { }
