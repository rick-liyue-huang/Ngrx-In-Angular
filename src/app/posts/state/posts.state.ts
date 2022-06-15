import {Post} from "../../models/posts.model";

export interface PostsState {
	posts: Post[]
}

export const initialState: PostsState = {
	posts: [
		{
			id: '1',
			title: 'title one',
			description: 'desc one'
		},
		{
			id: '2',
			title: 'title two',
			description: 'desc two'
		}
	]
};




