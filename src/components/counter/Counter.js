import React, {useState} from 'react';
import CalcTitle from "./units/calc-title/CalcTitle";
import CounterResult from "./units/counter-result/CounterResult";
import CreateButtonUnit from "./units/btn-arr/ButtonUnit";
import CreateInputArea from "./units/Input-area/InputArea";

export default function Counter() {

    const myButtons = [1, -1, 100, -100];

    const [counter, setCounter] = useState(0);
    const [valueInput, setValueInput] = useState('');

    const submit = () => {
        plus(valueInput)
        setValueInput('')
    }

    const plus = (num) => {
        (counter + num) >= 0
            ? setCounter(counter + num)
            : setCounter(0)
    }

    return (
            <div>
                <CalcTitle/>
                <CounterResult counterResult={counter} />
                <CreateButtonUnit btnArr={myButtons} plusFn={plus} setCounter={setCounter}/>
                <CreateInputArea submitFn={submit} valueInput={valueInput} setValueInput={setValueInput}/>
            </div>
    );
}
