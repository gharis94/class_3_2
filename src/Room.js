import React, {useState} from 'react';
import './Room.css';


const Room=()=>{
    let [islit,setlit]=useState(false);
    let [temp,settempt]=useState(22);

    return(
        <div className={`room ${islit? "lit":"dark"}`}>
            <h1>Welcome to the Room</h1>
            <br/>
            <h2>Light Switch</h2>
            <br/>
            <button onClick={()=>setlit(true)}>Turn light on</button>
            <button onClick={()=>setlit(false)}>Turn light of</button>
            <br/>
            <h2>Temp Controle</h2>
            <br/>
            <h2>{temp}</h2>
            <br/>
            <button onClick={()=>(settempt(++temp))}>"+"</button>
            <button onClick={()=>settempt(--temp)}>"-"</button>

        </div>
    )
}
export default Room;