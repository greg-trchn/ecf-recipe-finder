import { Component, Input, OnInit } from '@angular/core';
import { Aliment } from '../../model/aliment.model';

@Component({
  selector: 'app-aliment',
  templateUrl: './aliment.component.html',
  styleUrls: ['./aliment.component.scss'],
})
export class AlimentComponent implements OnInit {
  constructor() { }
  @Input() alimentInput:Aliment;


  ngOnInit() {}

}
