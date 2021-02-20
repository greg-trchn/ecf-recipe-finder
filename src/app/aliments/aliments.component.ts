import { Component, OnInit } from '@angular/core';
import { Aliment } from './model/aliment.model';
import { AlimentsService } from './services/aliments.service';

@Component({
  selector: 'app-aliments',
  templateUrl: './aliments.component.html',
  styleUrls: ['./aliments.component.scss'],
})
export class AlimentsComponent implements OnInit {

 
  constructor() { 
   
  }

 

  ngOnInit() {
    
  }
  /*
  getAlimentList(search:string){

    
    return this.service.get(search).subscribe((values:Aliment[])=>{

      this.alimentList=values;
  
    });
    
   
   
    
  }
*/
}
