import { Component, OnInit, Input } from '@angular/core';
import { CommentModel } from './models/comment.model';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  @Input()
  public comment: CommentModel;
  public isEdit: boolean;

  constructor() { }

  public ngOnInit(): void {
    this.isEdit = false;
  }

  public edit(): void {
    this.isEdit = true;
  }

  public onEditEnd(value: boolean) {
    if (value) {
      this.isEdit = false;
    }
  }

  public deleteComment(): void {
  }

}
