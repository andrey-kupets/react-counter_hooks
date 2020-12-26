import React from "react";

export default function CreateInputArea({submitFn, valueInput, setValueInput}) {
    return (
        <div>
            <input type={'number'} onChange={({target: {value}}) => {
                setValueInput(+value)
            }} className='input' value={valueInput}/>
            <button onClick={submitFn}>Submit</button>
        </div>
    );
}
