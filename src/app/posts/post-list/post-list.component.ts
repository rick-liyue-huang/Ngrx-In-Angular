import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "../../store";
import {Observable} from "rxjs";
import {Post} from "../../models/posts.model";
import {getPosts} from "../state/posts.selectors";
import {deletePost} from "../state/posts.actions";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts$: Observable<Post[]> | undefined;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.posts$ = this.store.select(getPosts);
  }

  onDeletePost(id: string) {
    if (confirm('are you sure to delete')) {
      console.log('delete post')
    }

    this.store.dispatch(deletePost({id}))
  }

}
