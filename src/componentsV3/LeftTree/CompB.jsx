import React, { useContext } from 'react'
import { NameContext } from '../AppV3'

export const CompB = (props) => {
  const nameValue =useContext(NameContext)
  return (
    <>
    <div>CompB</div>
    <div>Name -context-{nameValue.name}</div>
    <div>Role-{nameValue.role}</div>
    <div>Batch Name -{nameValue.batch}</div>
    </>
  )
}
