import React from 'react'
import { createContext } from 'react'

export const PlayerContext = createContext();
export const PlayerProvider = (props) => {
  return (
    <PlayerContext.Provider value={props.myValue}>
        {props.children}
    </PlayerContext.Provider>
  )
}