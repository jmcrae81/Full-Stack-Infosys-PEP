import {useState, useRef} from 'react';

const Counter = () => {
    const numberOfClicks = useRef(0);
    const [counter, setCount] = useState(0);

    function increaseNumber(){
       numberOfClicks.current += 1;
       setCount(numberOfClicks.current);
    }

    function decreaseNumber(){
        numberOfClicks.current -= 1;
        setCount(numberOfClicks.current);
    }
    return(
        <>
            <button data-testid="increment" onClick={increaseNumber}>Increment</button>
            <h3 data-testid="counter">{counter}</h3>
            <button data-testid="decrement" onClick={decreaseNumber}>Decrement</button>
        </>
    )
}
export default Counter;
