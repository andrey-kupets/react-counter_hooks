import React, {useState, useEffect, useReducer, useCallback, memo, useMemo} from 'react';

export default function Counter() {
    const state = {
        result: 0,
        input: 0,
        myButtons: [1, -1, 100, -100]
    };

    const myBtn = state.myButtons;
    const [counter, setCounter] = useState(0);


    // const handlerButton = (num) => fPlus(num);

    const handlerButton = (num) => {
        // setCounter(counter + num)
        if ((counter + num) > 0) {
            setCounter((prevState) => prevState + num)
        } else {
            setCounter(0)
        }

    }

    const input = (e) => {
        e.target.defaultValue = 0;
    }

    const submit = (event) => {
        if ((counter + event.target.previousSibling.valueAsNumber) > 0) {
            setCounter(counter + event.target.previousSibling.valueAsNumber);
        } else {
            setCounter(0)
            // event.target.previousSibling.valueAsNumber = '';
        }

    }

    const reset = () => {
        setCounter(0)
    }

    return (

        <div>
            <div>
                <div>{counter}</div>
                <div>
                    {myBtn.map(value => <button onClick={() => {handlerButton(value)}}>{value}</button>)}
                    <button onClick={reset} className={'btn_reset'}>reset</button>
                </div>
                <div>
                    <input type={'number'} onChange={input} className={'input'}/>
                    <button onClick={submit}>Submit</button>
                </div>
            </div>
        </div>
    );
}
