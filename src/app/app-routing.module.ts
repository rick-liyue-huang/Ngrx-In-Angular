import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {CounterComponent} from "./counter/counter/counter.component";
import {PostListComponent} from "./posts/post-list/post-list.component";
import {AddPostComponent} from "./posts/add-post/add-post.component";
import {EditPostComponent} from "./posts/edit-post/edit-post.component";

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'counter',
    // lazy loading module
    loadChildren: () => import('./counter/counter.module').then(m => m.CounterModule)
  },
  {
    path: 'posts',
    // lazy loading module
    loadChildren: () => import('./posts/posts.module').then(m => m.PostsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
