import React from 'react'
import { createContext } from 'react'
import { CompX } from './CompX'

export const TopicContext = createContext();

export const RightParent = () => {
  return (
    <>
        <h2>RightParent</h2>
        <TopicContext.Provider value={'Learning Context-APi'}>
          <CompX/>
        </TopicContext.Provider>

    </>
  )
}
