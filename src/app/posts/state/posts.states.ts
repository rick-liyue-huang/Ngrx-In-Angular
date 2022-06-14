import {Post} from "../../models/posts.model";

export interface PostsStates {
	posts: Post[]
}

export const initialState: PostsStates = {
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




