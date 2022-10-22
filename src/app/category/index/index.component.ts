import { Component, OnInit } from '@angular/core';
import {CategoryService} from "../category.service";
import {Category} from "../category";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {EditComponent} from "../edit/edit.component";
import {CreateComponent} from "../create/create.component";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css',
    '../../../assets/modal_form_layout.css',
    '../../../assets/panel_layout.css',
    '../../../assets/table_layout.css']
})
export class IndexComponent implements OnInit {

  categories: Category[] = [];
  p: number = 1;
  totalCategories: number = 0;

  constructor(public categoryService: CategoryService,
              private modalService: NgbModal) { }

  ngOnInit(): void {
    this.loadCategories();
  }

  pageChangeEvent(event: number){
    this.p = event;
    this.loadCategories();
  }

  deleteCategory(id:number) {
    this.categoryService.delete(id).subscribe(() => {
      this.categories = this.categories.filter(item => item.id !== id);
      console.log('Category deleted successfully!');
    })
  }

  editCategory(category:Category) {
    const modalRef = this.modalService.open(EditComponent);
    modalRef.componentInstance.category = category;
    modalRef.result.then((result) => {
      if (result) {
        this.loadCategories();
      }
    });
  }

  createCategory() {
    const modalRef = this.modalService.open(CreateComponent);
    modalRef.result.then((result) => {
      if (result) {
        this.loadCategories();
      }
    });
  }

  loadCategories() {
    this.categoryService.getAll().subscribe((data: Category[]) => {
      this.categories = data;
      this.totalCategories = this.categories.length;
    });
  }

}
