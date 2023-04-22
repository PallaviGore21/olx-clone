// let numbers = [-23,-20,-17, -12, -5, 0, 1, 5, 12, 19, 20];

// let positive_array = numbers.filter(function(value) {
//     return value >= 0; });

// console.log(positive_array);


// 

// const arr = [1,2,3,4,5]
// const arr2 = arr.splice(-3,-1)
// console.log(arr2);

import {useRef} from 'react'

function app(){
    const inputRef = useRef()
    return <input type="text" ref={inputRef}/>
}

