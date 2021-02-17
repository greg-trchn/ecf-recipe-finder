import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aliments',
  templateUrl: './aliments.component.html',
  styleUrls: ['./aliments.component.scss'],
})
export class AlimentsComponent implements OnInit {

  constructor() { }

  public alimentSelectedList=[
    {name:'tomate'}
  ]

  ngOnInit() {
    
  }

}
