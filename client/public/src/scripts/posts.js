import { api } from './api.js';
import { getToken } from './auth.js';

export async function loadFeed() {
    const token = getToken();
    return await api.getFeed(token);
}

export async function createPost(text, attachments = []) {
    const token = getToken();
    return await api.createPost({ text, attachments }, token);
}

export async function likePost(postId) {
    const token = getToken();
    return await api.likePost(postId, token);
}

export async function loadComments(postId) {
    const token = getToken();
    return await api.getComments(postId, token);
}

export async function addComment(postId, text) {
    const token = getToken();
    return await api.addComment(postId, { text }, token);
} 