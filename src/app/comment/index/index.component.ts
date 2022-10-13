import {Component, createComponent, OnInit, TemplateRef} from '@angular/core';
import { CommentService } from "../comment.service";
import { Comment } from "../comment";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {CreateComponent} from "../create/create.component";
import {EditComponent} from "../edit/edit.component";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css',
    '../../../assets/modal_form_layout.css',
    '../../../assets/panel_layout.css',
    '../../../assets/table_layout.css']
})
export class IndexComponent implements OnInit {

  comments: Comment[] = [];

  constructor(public commentService: CommentService,
              private modalService: NgbModal) { }

  ngOnInit(): void {
    this.loadComments()
  }

  deleteComment(id:number) {
    this.commentService.delete(id).subscribe(res => {
      this.comments = this.comments.filter(item => item.id !== id);
      console.log('Comment deleted successfully!');
    })
  }

  editComment(comment:Comment) {
    const modalRef = this.modalService.open(EditComponent);
    modalRef.componentInstance.comment = comment;
  }

  createComment() {
    const modalRef = this.modalService.open(CreateComponent);
    modalRef.result.then((result) => {
      if (result) {
        console.log(result)
        this.loadComments();
      }
    });
  }

  loadComments() {
    this.commentService.getAll().subscribe((data: Comment[]) => {
      this.comments = data;
      console.log(this.comments);
    });
  }
}
