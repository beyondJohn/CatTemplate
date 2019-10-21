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
    // build items array from json object
    this.myJson.forEach(item => {
      let tempItem = new Item(item['type'], item['name'], item['price'], item['mfg'], item['category'], item['active'], item['id']);
      this.items.push(tempItem);
    });
    this._filterService.filterBehaviorSubject.subscribe(filters => {
      console.log(filters);
      if (filters.length != 0) {
        this.isInit = false;
        this.items = [];
        this.items = filters;
        let anyActive = false;
        this._filterService.categoriesObjArray.forEach(category => {
          if (category['active']) {
            anyActive = true;
          }
          !anyActive ? this.isInit = true : this.isInit = false;
        });
      }
      let anyActiveItems = false;
      filters.forEach(filter => {
        if (filter.active) {
          anyActiveItems = true;
        }
      });
      anyActiveItems ? this.isInit = false : this.isInit = true;
      
      // check each category, if any individuals items of that category type are unchecked,
      // uncheck the main category
      let categoriesObjArray = this._filterService.categoriesObjArray;
      categoriesObjArray.forEach(category => {
        let anyActive = false;
        this.items.forEach(item => {
          if (item.category.toLowerCase() === category['name'].toLowerCase()) {
            console.log('item.active: ', item.active);
            if (item.active) { anyActive = true; } else {
              anyActive = false;
              if (!this.isInit) {
                let myCheckBox = document.getElementById(category['name'].toLowerCase()) as HTMLInputElement;
                myCheckBox.checked = false;
                let tempCategoriesObjArray = this._filterService.categoriesObjArray;
                tempCategoriesObjArray.forEach(categoryObject => {
                  if (item.category.toLowerCase() === categoryObject['name']) {
                    categoryObject['active'] = !categoryObject['active'];
                    
                  }
                });
                this._filterService.updateCategoryObject(tempCategoriesObjArray);
              }
            }
          }
        })
      });
    });
  }

}
