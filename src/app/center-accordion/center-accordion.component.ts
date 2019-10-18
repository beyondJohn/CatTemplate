import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Item } from '../classes/item';
import { FiltersService } from '../services/filters.service';

@Component({
  selector: 'app-center-accordion',
  templateUrl: './center-accordion.component.html',
  styleUrls: ['./center-accordion.component.scss']
})
export class CenterAccordionComponent implements OnInit {
  myJson: Array<Object>;
  items: Array<Item> = [];
  isInit = true;
  constructor(
    private data: DataService
    , private _filterService: FiltersService
  ) {
    this.myJson = data.myJson;
  }

  ngOnInit() {
    this.myJson.forEach(item => {
      let tempItem = new Item(item['type'], item['name'], item['price'], item['mfg'], item['category'], item['active'], item['id']);
      this.items.push(tempItem);
    });
    this._filterService.filterBehaviorSubject.subscribe(filters => {
      if(filters.length != 0){
        this.isInit = false;
        this.items = [];
        this.items = filters;
        let anyActive = false;
        this._filterService.categoriesObjArray.forEach(category => {
          console.log('category: ',category);
          if(category['active']){
            anyActive = true;
          }
          if(!anyActive){
            this.isInit = true;
          }
        });
        
      }
    });
  }

}
