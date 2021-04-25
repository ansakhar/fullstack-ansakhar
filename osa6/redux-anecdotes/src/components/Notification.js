import React from 'react'
import { useSelector } from 'react-redux'
//import { useDispatch } from 'react-redux'

//import { notificationChange } from '../reducers/notificationReducer'

const Notification = (props) => {

  const notification = useSelector(state => state.notification)
  //const dispatch = useDispatch()

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  if (notification === null) {
    return (
      <div></div>
    )
  }
  return (

    <div style={style}>
      {notification}
    </div>

  )
}

export default Notification