import React, { useState } from 'react'

export default function UpdateBasedOnPrevState() {
    // stateful component
    const [sentence, setSentence] = useState('This ');

    const addWords = () => {
        console.log('start');
        // batching of state
        // setSentence(sentence+ 'is');
        // setSentence(sentence+ 'React');
        // setSentence(sentence+ 'Batch');
        // setSentence(sentence+ '2022');

        // valu ===> This 
        setSentence((valu) => {
            return valu+ 'is '
        });
        // value ===> This is 
        setSentence((abhi) => abhi+ 'React '); 
        // value ===> This is React 
        setSentence((value) => value+ 'Batch ');
        setSentence((value) => value+ '2022');

        // updating state based on previous state

        console.log('end');
    }

    // this is react batch 2022

    console.log('rendering');
  return (
    <div>
        <h3>UpdateBasedOnPrevState</h3>
        <div>Sentence: {sentence}</div>
        <button onClick={addWords}>Add words</button>
    </div>
  )
}
