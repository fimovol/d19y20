import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asincrona',
  templateUrl: './asincrona.component.html',
  styleUrls: ['./asincrona.component.css']
})
export class AsincronaComponent implements OnInit {

  constructor() { }
  array = new Array(9)
  ngOnInit(): void {
  }

}
