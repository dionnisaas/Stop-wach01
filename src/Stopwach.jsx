



//import { useCallback } from "react"
import { useEffect, useState, useRef} from "react"
//import { useContext } from "react"

export default function() {

const [isRunning, setisRunning] = useState(false)
const [elapsettime, setelapsettime] = useState(0)
const intervalidref = useRef(null)
const starTimeref = useRef(0)

useEffect (() =>{

if(isRunning) {
    intervalidref.current = setInterval(() => {
        setelapsettime(Date.now() - starTimeref.current)
    }, 10)
}

return() =>{
    clearInterval(intervalidref.current);
}

}, [isRunning]);

    function star(){
        setisRunning(true);
    starTimeref.current = Date. now() - elapsettime;
    console.log(starTimeref.current); 
    }
    function stop(){
        setisRunning(false);
    }
    function reset(){
        setelapsettime(0)
        setisRunning(false)
        
    }
    function formattime(){
        let hours = Math.floor(elapsettime / (1000 * 60 * 60));
        let minutes = Math.floor(elapsettime / (1000 * 60) % 60);
        let seconds = Math.floor(elapsettime / (1000) % 60);
        let milliseconds = Math.floor((elapsettime % 1000) / 10);

        return `${minutes}:${seconds}:${milliseconds}`;
    }

    return( 
        <div className="stopwach">
            <div className="display"> {formattime()}</div>
            <div className="controls">
                <button className="star-button" onClick={star}>star</button>
                <button className="stop-button" onClick={stop}>stop</button>
                <button className="reset-button" onClick={reset}>reset</button>
            </div>

        </div>
    )
        
}