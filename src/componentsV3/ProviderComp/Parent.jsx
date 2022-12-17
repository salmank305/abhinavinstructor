import React from 'react'
import { Comp1 } from './Subtree/Comp1'

export const Parent = () => {
  return (
    <>
        <div>Parent</div>
        <Comp1/>
    </>
  )
}