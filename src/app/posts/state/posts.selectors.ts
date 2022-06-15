import {createFeatureSelector, createSelector} from "@ngrx/store";
import {PostsState} from "./posts.state";

export const POST_STATE_NAME = 'posts'

// match with 'StoreModule.forFeature(POST_STATE_NAME, postsReducers)' in posts.module.ts
const getPostsState = createFeatureSelector<PostsState>(POST_STATE_NAME);

export const getPosts = createSelector(getPostsState, state => {
	return state.posts;
});


export const getPostById = createSelector(getPostsState, (state: PostsState, props: any) => {
	return state.posts.find(post => post.id === props.id);
});
