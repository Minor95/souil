const initialState = {
  UserPosts: [],
  loading: false,
}

export default function posts(state = initialState, action) {
  switch (action.type) {
    case 'start':
      return {
        ...state,
        loading: true,
      }
    case 'posts/data':
      return {
        ...state,
        UserPosts: action.payload,
        loading: false,
      }
    default:
      return state
  }
}
export const getPosts = () => {
  return dispatch => {
    dispatch({ type: 'start' })
    fetch('http://localhost:7777/api/posts')
      .then(res => res.json())
      .then(data => {
        dispatch({ type: 'posts/data', payload: data })
      })
  }
}
