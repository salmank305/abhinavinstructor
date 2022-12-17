import React from 'react'
import { useContext } from 'react';
import {NameContext} from '../AppV3';
import {TopicContext} from './RigthtParent';

export const CompY = () => {
  // use the context using useContext 
  const nameValue = useContext(NameContext);
  const topicValue = useContext(TopicContext);
  return (
    <>
      <div>CompY </div>
      <div>name - {nameValue.name}</div>
      <div>topic  - {topicValue}</div>
    </>
  )
}