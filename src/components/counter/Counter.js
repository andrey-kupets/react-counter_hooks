import React, {useState} from 'react';

export default function Counter() {

    const myButtons = [1, -1, 100, -100];

    const [counter, setCounter] = useState(0);
    const [valueInput, setValueInput] = useState(0);

    const submit = () =>  multiply(valueInput)

    const multiply = (num) => {
        (counter + num) >= 0
            ? setCounter(counter + valueInput)
            : setCounter(0)
    }

    return (
            <div>
                <h1>{counter}</h1>
                <div>
                    {myButtons.map(value =>
                        <button onClick={() => multiply(value)
                        }> {value}
                        </button>)}
                    <button onClick={()=>setCounter(0)} className='btn_reset' >reset</button>
                </div>
                <div>
                    <input type={'number'} onChange={({target: {value}}) => {
                        setValueInput(+value)
                    }} className='input' value={valueInput}/>
                    <button onClick={submit}>Submit</button>
                </div>
            </div>
    );
}
