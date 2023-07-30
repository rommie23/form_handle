import React from 'react'

export default function User(props) {
  return (
    <div>
      <h1>User Function</h1>
      <button onClick={props.data}>call data from app</button>
    </div>
  )
}
