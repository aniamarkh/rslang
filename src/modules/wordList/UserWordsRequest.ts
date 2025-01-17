import { Optional } from '../types/types';

export const sendUserWord = async function (
    data: {
        difficulty: string;
        optional: Optional;
    },
    wordId: string
) {
    const token = JSON.parse(window.localStorage.getItem('UserToken') as string).token;
    const userId = JSON.parse(window.localStorage.getItem('UserToken') as string).userId;
    const response = await fetch(`https://rslangbe.fly.dev/users/${userId}/words/${wordId}`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    if (response.ok) {
        const content = await response.json();
        return content;
    }
};

export const updateUserWord = async function (
    data: {
        difficulty: string;
        optional: Optional;
    },
    wordId: string
) {
    const token = JSON.parse(window.localStorage.getItem('UserToken') as string).token;
    const userId = JSON.parse(window.localStorage.getItem('UserToken') as string).userId;
    const response = await fetch(`https://rslangbe.fly.dev/users/${userId}/words/${wordId}`, {
        method: 'PUT',
        headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    if (response.ok) {
        const content = await response.json();
        return content;
    }
};

export const getUserWord = async function (wordId: string) {
    const token = JSON.parse(window.localStorage.getItem('UserToken') as string).token;
    const userId = JSON.parse(window.localStorage.getItem('UserToken') as string).userId;

    const response = await fetch(`https://rslangbe.fly.dev/users/${userId}/words/${wordId}`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`,
            Accept: 'application/json',
        },
    });
    const content = await response.json();
    if (response.ok) {
        return content;
    } else if (response.status === 404) {
        return 'error';
    }
};

export const removeUserWord = async function (wordId: string) {
    const token = JSON.parse(window.localStorage.getItem('UserToken') as string).token;
    const userId = JSON.parse(window.localStorage.getItem('UserToken') as string).userId;

    await fetch(`https://rslangbe.fly.dev/Users/${userId}/Words/${wordId}`, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};
