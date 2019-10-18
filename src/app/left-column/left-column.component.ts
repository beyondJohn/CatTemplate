import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-left-column',
  templateUrl: './left-column.component.html',
  styleUrls: ['./left-column.component.scss']
})
export class LeftColumnComponent implements OnInit {

  cats: Array<string> = ['Russian Blue', 'Orange Tabby', 'Scottish Fold'];
  constructor(
    private data: DataService
  ) { }

  ngOnInit() {
  }

}
