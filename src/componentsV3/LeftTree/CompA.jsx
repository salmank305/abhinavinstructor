import React from 'react'
import { CompB } from './CompB'

export const CompA = (props) => {
  return (
    <>
    <h3>CompA- name={props.name}</h3>
    <CompB midName={props.midName} lastname={props.lastname}/> 
    </>
  )
}
