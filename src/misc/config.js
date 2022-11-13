const API_BASE_URL = 'https://api.tvmaze.com'

export async function apiGet(querySrtring) {
    const response = await fetch(`${API_BASE_URL}${querySrtring}`).then(r => r.json())
    return response
}