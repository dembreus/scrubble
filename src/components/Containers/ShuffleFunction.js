import React from 'react'
import shuffle from 'shuffle-array'

const draw = (array = [], queuesize) => {
    const copyOfArray = shuffle(array);
    const returnArray = (queuesize) => copyOfArray.splice(0, queuesize);
    return returnArray(queuesize)
}

export default draw;