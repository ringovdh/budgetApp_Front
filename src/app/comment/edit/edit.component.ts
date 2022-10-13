import { Component, OnInit } from '@angular/core';
import { Comment } from "../comment";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { CommentService } from "../comment.service";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css',
    '../../../assets/modal_form_layout.css']
})
export class EditComponent implements OnInit {

  comment!: Comment;
  form!: FormGroup;

  constructor(public commentService: CommentService,
              public ngbActiveModal: NgbActiveModal) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      searchterm: new FormControl('', Validators.required),
      replacement: new FormControl('', Validators.required)
    });
  }

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value);
    this.commentService.update(this.comment.id, this.form.value).subscribe((res:any) => {
      this.ngbActiveModal.close('closed');
      console.log('Comment updated successfully!');
    })
  }

  close() {
    this.ngbActiveModal.close('closed');
  }
}
