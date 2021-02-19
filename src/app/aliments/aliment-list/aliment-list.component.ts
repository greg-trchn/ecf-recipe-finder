import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Aliment } from '../model/aliment.model';
import { AlimentsService } from '../services/aliments.service';

@Component({
  selector: 'app-aliment-list',
  templateUrl: './aliment-list.component.html',
  styleUrls: ['./aliment-list.component.scss'],
})
export class AlimentListComponent implements OnInit, AfterViewInit {

  constructor(private service:AlimentsService) { }
  public alimentList:Aliment[];

  
  ngAfterViewInit(): void {

  }
  /*
  public alimentList=[
    {name:'tomate'},
    {name:'orange'},
    {name:'riz'}
  ]
 */

  ngOnInit() {console.log(this.alimentList);
  this.getAlimentList
  }
  getAlimentList(search:string){


    console.log();
    
    return this.service.get(search).subscribe((values:Aliment[])=>{

      this.alimentList=values;
  
    });
  }
  
}
