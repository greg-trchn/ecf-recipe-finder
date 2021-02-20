import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Aliment } from '../model/aliment.model';
import { AlimentsService } from '../services/aliments.service';

@Component({
  selector: 'app-aliment-list',
  templateUrl: './aliment-list.component.html',
  styleUrls: ['./aliment-list.component.scss'],
})
export class AlimentListComponent implements OnInit, AfterViewInit {

  alimentSelectedList:Aliment[];
  alimentList:Aliment[];
    

  constructor(private service:AlimentsService) { 


  }
  ngOnInit(): void {
    this.alimentList=[new Aliment('tomate'),new Aliment('orange')];
    this.alimentSelectedList=[new Aliment('riz'),new Aliment('pomme de terre')];

  }
add(aliment:Aliment){
  this.alimentSelectedList.push(aliment);
  console.log(this.alimentSelectedList);
  
}


  ngAfterViewInit(): void {

  }
  /*
  public alimentList=[
    {name:'tomate'},
    {name:'orange'},
    {name:'riz'}
  ]
 */



  
}
