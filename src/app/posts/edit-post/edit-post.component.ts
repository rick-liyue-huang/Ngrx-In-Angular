import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {AppState} from "../../store";
import {getPostById} from "../state/posts.selectors";
import {Post} from "../../models/posts.model";
import {FormControl, FormControlName, FormGroup, Validator, Validators} from "@angular/forms";
import {Subscription} from "rxjs";
import {editPost} from "../state/posts.actions";

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit, OnDestroy {

  post: Post;
  postForm: FormGroup;
  postSubscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(param => {
      console.log(param.get('id'));
      const id = param.get('id');
      this.postSubscription = this.store.select(getPostById, {id}).subscribe((data) => {
        // @ts-ignore
        this.post = data;
        // console.log(this.post);
        this.onCreateForm();
      })
    })
  }

  onCreateForm() {
    this.postForm = new FormGroup({
      title: new FormControl(this.post.title, [Validators.required, Validators.minLength(6)]),
      description: new FormControl(this.post.description, [Validators.required, Validators.minLength(10)])
    })
  }

  onEditPost() {
    if (!this.postForm.valid) {
      return;
    }

    const title = this.postForm.value.title;
    const description = this.postForm.value.description;

  //  dispatch to ngrx
    const post: Post = {
      id: this.post.id,
      title,
      description
    };

    this.store.dispatch(editPost({post}));
    this.postForm.controls['title'].setValue('');
    this.postForm.controls['description'].setValue('');
    this.router.navigate(['posts'])
  }

  ngOnDestroy(): void {
    if (this.postSubscription) {
      this.postSubscription.unsubscribe();
    }
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
