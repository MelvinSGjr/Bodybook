import { api } from './api.js';

export function saveToken(token) {
    localStorage.setItem('bodybook-token', token);
}
export function getToken() {
    return localStorage.getItem('bodybook-token');
}
export function logout() {
    localStorage.removeItem('bodybook-token');
    window.location.href = '/login.html';
}

export async function login(email, password) {
    const res = await api.login({ email, password });
    saveToken(res.token);
    window.location.href = '/index.html';
}

export async function register(data) {
    const res = await api.register(data);
    saveToken(res.token);
    window.location.href = '/index.html';
} 