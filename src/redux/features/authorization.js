const initialState = {
  siningUp: false,
  siningIn: false,
  error: null,
  message: null,
  token: localStorage.getItem('token'),
}

export default function authorization(state = initialState, action) {
  switch (action.type) {
    case 'authorization/singUp/pending':
      return {
        ...state,
        siningUp: true,
        error: null,
        message: null,
      }
    case 'authorization/singUp/fulfilled':
      return {
        ...state,
        siningUp: false,
        message: action.message,
      }
    case 'authorization/singUp/rejected':
      return {
        ...state,
        siningUp: false,
        error: action.error,
      }

    case 'authorization/singIn/pending':
      return {
        ...state,
        siningIn: true,
        error: null,
        message: null,
      }
    case 'authorization/singIn/fulfilled':
      return {
        ...state,
        siningIn: false,
        message: action.message,
        token: action.payload.token,
      }
    case 'authorization/singIn/rejected':
      return {
        ...state,
        siningIn: false,
        error: action.error,
      }

    default:
      return state
  }
}

export const userCreate = (login, password) => {
  return async dispatch => {
    dispatch({ type: 'authorization/singUp/pending' })

    const response = await fetch('/users/register', {
      method: 'POST',
      body: JSON.stringify({ login, password }),
      headers: {
        'Content-type': 'application/json',
      },
    })

    const json = await response.json()
    if (json.error) {
      dispatch({
        type: 'authorization/singUp/rejected',
        error: json.error,
      })
    } else {
      dispatch({
        type: 'authorization/singUp/fulfilled',
        message: json.message,
        payload: json,
      })
    }
  }
}

export const userLogin = (login, password) => {
  return async dispatch => {
    dispatch({ type: 'authorization/singIn/pending' })

    const response = await fetch('/users/login', {
      method: 'POST',
      body: JSON.stringify({ login, password }),
      headers: {
        'Content-type': 'application/json',
      },
    })

    const json = await response.json()
    if (json.error) {
      dispatch({
        type: 'authorization/singIn/rejected',
        error: json.error,
      })
    } else {
      dispatch({
        type: 'authorization/singIn/fulfilled',
        error: json.error,
        message: json.error,
        payload: json,
      })
      localStorage.setItem('token', json.token)
    }
  }
}
