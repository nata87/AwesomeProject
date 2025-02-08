import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    posts: [],
};

// Створення slice для постів
const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setPosts(state, action) {
            state.posts = action.payload;
        },
        addPost(state, action) {
            state.posts.push(action.payload);
        },
        updatePost(state, action) {
            const index = state.posts.findIndex(post => post.id === action.payload.id);
            if (index !== -1) {
                state.posts[index] = action.payload;
            }
        },
        deletePost(state, action) {
            state.posts = state.posts.filter(post => post.id !== action.payload);
        },
    },
});

// Експорт дій для використання у компонентах
export const { setPosts, addPost, updatePost, deletePost } = postSlice.actions;

// Експорт ред'юсера для підключення до Store
export default postSlice.reducer;
