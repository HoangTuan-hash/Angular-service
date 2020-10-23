import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/service/caregory.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  // services
  cateList: any[];
  //dependency injection
  constructor(private _categoryService: CategoryService) {}

  //lifecycle chạy lúc đầu
  ngOnInit(): void {
    this.cateList = this._categoryService.cateList;
  }
}
