import React from "react";

export default function CreateButtonUnit({btnArr, plusFn, setCounter}) {
    return (
        <div>
            {btnArr.map(value =>
                <button onClick={() => plusFn(value)
                }> {value}
                </button>)}
            <button onClick={()=>setCounter(0)} className='btn_reset' >reset</button>
        </div>
    )
}