import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import { Item } from '../classes/item';
import { CategoryObject } from '../classes/category-object';
import { DataService } from './data.service';


@Injectable({
  providedIn: 'root'
})

export class FiltersService {
  categories: Array<string> = [];
  categoriesObjArray:Array<Object> = [];
  constructor(
    private data: DataService
  ) {
    // push all unique available categories to categories array
    this.data.myJson.forEach(item => {
      if(this.categories.indexOf(item.category) === -1){
        this.categories.push(item.category);
      }
    });
    // create category objects and add objects to categoriesObjArray to track category title clicks 
    this.categories.forEach(category => {
      let tempCategoryObj = new CategoryObject(category, false);
      this.categoriesObjArray.push(tempCategoryObj);
    });
    
  }

  updateCategoryObject(categoryObject:Array<Object>){
    this.categoriesObjArray = categoryObject;
  }

  filterObj: Array<Item> = [];
  filterBehaviorSubject = new BehaviorSubject<Array<Item>>(this.updateFilters());
  refreshFilters(filterSettings: Array<Item>): void {
    this.filterObj = filterSettings;
    this.filterBehaviorSubject.next(filterSettings);
  }
  private updateFilters(): Array<Item> {
    return this.filterObj;
  }

}
