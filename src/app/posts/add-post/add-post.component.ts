import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Post} from "../../models/posts.model";
import {Store} from "@ngrx/store";
import {AppState} from "../../store";
import {addPost} from "../state/posts.actions";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  postForm: FormGroup;

  constructor(private store: Store<AppState>, private router: Router) { }

  ngOnInit(): void {
    this.postForm = new FormGroup({
      title: new FormControl(null, [Validators.required, Validators.minLength(6)]),
      description: new FormControl(null, [Validators.required, Validators.minLength(10)])
    })
  }

  onAddPost() {
    console.log(this.postForm);
    if (!this.postForm.valid) {
      return
    }

    console.log(this.postForm.value);

    const post: Post = {
      title: this.postForm.value.title,
      description: this.postForm.value.description
    };

    this.store.dispatch(addPost({post}));
    this.postForm.controls['title'].setValue('');
    this.postForm.controls['description'].setValue('');

    this.router.navigate(['posts']);
  }

  onShowDescriptionErrors() {
    const descriptionForm = this.postForm.controls['description'];
    if (descriptionForm.touched && !descriptionForm.valid) {
      if (descriptionForm.errors?.['required']) {
        return 'Description is required'
      }
      if (descriptionForm.errors?.['minlength']) {
        return 'Description characters need 10 or more'
      }
    }
    return null
  }

}
