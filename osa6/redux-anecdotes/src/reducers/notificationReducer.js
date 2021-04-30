const initialState = null

const notificationReducer = (state = initialState, action) => {
    //console.log(action)
    switch (action.type) {
        case 'SET_NOTIFICATION':
          return action.notification
        case 'DELETE_NOTIFICATION':
          return null
        default:
          return state
      }
}

export const notificationChange = (notification, time) => {
  return async dispatch => {
    dispatch ({
      type: 'SET_NOTIFICATION',
      notification,
    })
    setTimeout(() => {
    dispatch ( {
      type: 'DELETE_NOTIFICATION',
    })
    }, time * 1000)

  }
}

export default notificationReducer