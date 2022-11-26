import React from 'react'

export default function NameComp(props) {
  // stateless component
  // before react 16.8 version all the functional comp were stateless component
  
  return (
    <div>Name: {props.name}</div>
  )
}