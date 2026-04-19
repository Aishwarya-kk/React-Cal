import { useState } from "react";
import "./App.css"

function Coun(){
    let[count,setCount]=useState(0);
    let getsum = ()=>{
        setCount(count+1);
    }
    let gdec=()=>{
        setCount(count-1);
    }
    let mul=()=>{
        setCount(count * 2);
    }
    return(
        <>
        <div>
        <h1>Increase Count:{count}</h1>
        <button onClick={getsum}>+</button>
        </div>
        <div><h1>Decrease Count:{count}</h1>
            <button onClick={gdec}>-</button>
            </div>
            <div>
                <h1>Multiplication:{count}</h1>
                <button onClick={mul}>*</button>
            </div>
        </>
    )
}

export default Coun;