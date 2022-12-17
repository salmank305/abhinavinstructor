import React from 'react'
import { useContext } from 'react'
import { PlayerContext } from '../PlayerProvider'

export const CompZ = () => {
    const player = useContext(PlayerContext)
  return (
    <>
        <div>CompZ</div>
        <div>Name: {player.playerName}</div>
        <div>Game: {player.game}</div>
    </>
  )
}