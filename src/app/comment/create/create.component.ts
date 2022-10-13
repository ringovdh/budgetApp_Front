import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { CommentService } from "../comment.service";
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css',
    '../../../assets/modal_form_layout.css']
})
export class CreateComponent implements OnInit {

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
    this.commentService.create(this.form.value).subscribe((res:any) => {
      this.ngbActiveModal.close('closed');
      console.log('Comment created successfully!');
    });
  }

  close() {
    this.ngbActiveModal.close('closed');
  }
}
