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

var timeOutID = null

export const notificationChange = (notification, time) => {
  
  return async dispatch => {
    
    if (timeOutID !==null) {
      clearTimeout(timeOutID)
    }
    dispatch ({
      type: 'SET_NOTIFICATION',
      notification
    })

    timeOutID = setTimeout(() => {
      dispatch ( {
        type: 'DELETE_NOTIFICATION',
      })
      timeOutID = null
    }, time * 1000)
  }
}


export default notificationReducer