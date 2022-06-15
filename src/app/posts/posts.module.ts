import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";
import {PostListComponent} from "./post-list/post-list.component";
import {AddPostComponent} from "./add-post/add-post.component";
import {EditPostComponent} from "./edit-post/edit-post.component";
import {ReactiveFormsModule} from "@angular/forms";
import {StoreModule} from "@ngrx/store";
import {postsReducers} from "./state/posts.reducers";
import {POST_STATE_NAME} from "./state/posts.selectors";

const routes: Routes = [
	{
		path: '',
		component: PostListComponent,
		children: [
			{
				path: 'add', component: AddPostComponent
			},
			{
				path: 'edit/:id', component: EditPostComponent
			}
		]
	}
]

@NgModule({
	declarations: [
		PostListComponent,
		AddPostComponent,
		EditPostComponent
	],
	imports: [
		CommonModule,
		RouterModule.forChild(routes),
		ReactiveFormsModule, // for form control
		// lazy loading the posts state
		StoreModule.forFeature(POST_STATE_NAME, postsReducers)
	]
})
export class PostsModule {

}
