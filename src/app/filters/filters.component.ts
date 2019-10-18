import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Item } from '../classes/item';
import { FiltersService } from '../services/filters.service';

//security category, layer
@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})

export class FiltersComponent implements OnInit {
  items: Array<Item> = [];
  categories: Array<string>;
  myJson: Array<object>;

  constructor(
    private _data: DataService
    , private _filtersService: FiltersService
  ) {
    this.categories = this._filtersService.categories;
    this.myJson = _data.myJson;

  }

  ngOnInit() {
    this.myJson.forEach(item => {
      let tempItem = new Item(item['type'], item['name'], item['price'], item['mfg'], item['category'], item['active'], item['id']);
      this.items.push(tempItem);
    });
  }
  change(item: String) {
    let filterItems: Array<Item> = [];
    this.items.forEach(myItem => {
      if (item == String(myItem.id)) {
        myItem.active = !myItem.active;
      }
      filterItems.push(myItem);
    });
    this._filtersService.refreshFilters(this.items);
  }
  changeCategory(category) {
    let filterItems: Array<Item> = [];
    let categoryActive:boolean;
    let tempCategoriesObjArray = this._filtersService.categoriesObjArray;
    tempCategoriesObjArray.forEach(categoryObject => {
      if (category.toLowerCase() === categoryObject['name']) {
        categoryObject['active'] = !categoryObject['active'];
        categoryActive = categoryObject['active'];
      }
    });
    this._filtersService.updateCategoryObject(tempCategoriesObjArray);
    this.items.forEach(myItem => {
      if (category.toLowerCase() === myItem.category.toLowerCase()) {
        myItem.active = categoryActive;
        if(categoryActive){
          let myCheckBox = document.getElementById(myItem.name.toString()) as HTMLInputElement;
          myCheckBox.checked = true;
        }
        else{
          let myCheckBox = document.getElementById(myItem.name.toString()) as HTMLInputElement;
          myCheckBox.checked = false;
        }
      }
      filterItems.push(myItem);
    });
    this._filtersService.refreshFilters(this.items);
    
  }

}
