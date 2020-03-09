import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../service/category.service';
import { Category } from '../common/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private categoryService:CategoryService) { }
  categories:Category[]=[];

  ngOnInit(): void {
    this.getCategory();
    console.log("asd")

  }
  getCategory(){
    console.log("asd")
    this.categoryService.getCategory().subscribe(
      data=>{
        console.log("asd..")
        this.categories=data;
        console.log(this.categories)
      }
    );
  }
}
