import React from 'react'
import { useContext } from 'react'
import { PlayerContext } from '../PlayerProvider'

export const Comp2 = () => {
    const playerValue = useContext(PlayerContext)
  return (
    <>
        <div>Comp2</div>
        <div>Player: {playerValue}</div>
    </>
  )
}