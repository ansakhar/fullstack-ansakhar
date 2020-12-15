import React from 'react'

const Notification = ({ message }) => {
  if (message === null) {
    return null
  }
else {
if (message.includes("has already been removed")) {
  return  (
    <div className="error">
      {message}
    </div>
  )
}

  return (
    <div className="noterror">
      {message}
    </div>
  )
}}

export default Notification