import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Aliment } from '../model/aliment.model';
import { AlimentsService } from '../services/aliments.service';

@Component({
  selector: 'app-aliment-list',
  templateUrl: './aliment-list.component.html',
  styleUrls: ['./aliment-list.component.scss'],
})
export class AlimentListComponent implements OnInit, AfterViewInit {

  constructor(private service:AlimentsService) { }
  
  @Input() alimentSelectedList:Aliment[];
  
  ngAfterViewInit(): void {

  }
  /*
  public alimentList=[
    {name:'tomate'},
    {name:'orange'},
    {name:'riz'}
  ]
 */

  ngOnInit() {
  
  }

  
}
