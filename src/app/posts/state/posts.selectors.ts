import {createFeatureSelector, createSelector} from "@ngrx/store";
import {PostsStates} from "./posts.states";

const getPostsState = createFeatureSelector<PostsStates>('posts');

export const getPosts = createSelector(getPostsState, state => {
	return state.posts;
});


export const getPostById = createSelector(getPostsState, (state: PostsStates, props: any) => {
	return state.posts.find(post => post.id === props.id);
});
