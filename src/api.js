import axios from 'axios'

const api = axios.create({ baseURL: 'https://aph88-nc-news.herokuapp.com/api/' })

export const getAllArticles = (params) => {
    return api.get('/articles', params)
}

export const getAllTopics = () => {
    return api.get('topics')
}

export const getArticle = (id) => {
    return api.get(`/articles/${id}`)
}

export const patchArticleVotes = (id, votes) => {
    return api.patch(`/articles/${id}`, votes)
}

export const deleteCommentAtAPI = (id) => {
    return api.delete(`/comments/${id}`)
}

export const getComments = (id) => {
    return api.get(`/articles/${id}/comments`)
}

export const postComment = (id, data) => {
    return api.post(`/articles/${id}/comments`, data)
}