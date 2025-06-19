// Универсальный fetch-запрос
export async function fetchApi(url, method = 'GET', data = null, token = null) {
    const options = {
        method,
        headers: {
            'Content-Type': 'application/json',
        },
    };
    if (token) options.headers['Authorization'] = `Bearer ${token}`;
    if (data) options.body = JSON.stringify(data);
    const res = await fetch(url, options);
    if (!res.ok) throw new Error(await res.text());
    return await res.json();
}

// Примеры API-методов
export const api = {
    login: (data) => fetchApi('/api/auth/login', 'POST', data),
    register: (data) => fetchApi('/api/auth/register', 'POST', data),
    getProfile: (id, token) => fetchApi(`/api/users/${id}`, 'GET', null, token),
    getFeed: (token) => fetchApi('/api/posts/feed', 'GET', null, token),
    createPost: (data, token) => fetchApi('/api/posts', 'POST', data, token),
    likePost: (id, token) => fetchApi(`/api/posts/${id}/like`, 'POST', null, token),
    getComments: (postId, token) => fetchApi(`/api/posts/${postId}/comments`, 'GET', null, token),
    addComment: (postId, data, token) => fetchApi(`/api/posts/${postId}/comments`, 'POST', data, token),
}; 