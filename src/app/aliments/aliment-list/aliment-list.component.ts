import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aliment-list',
  templateUrl: './aliment-list.component.html',
  styleUrls: ['./aliment-list.component.scss'],
})
export class AlimentListComponent implements OnInit {

  constructor() { }
  public alimentList=[
    {name:'tomate'},
    {name:'orange'},
    {name:'riz'}
  ]
 

  ngOnInit() {console.log(this.alimentList);
  }

}
