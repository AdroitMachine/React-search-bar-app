import React, { useEffect } from 'react'

export const debounceHook = (value, timeout, callback) => {
    cosnt [timer, setTimer] = useState(null);

    const clearTimer = ()=>{
        if(timer)
        clearTimeout(timer) 
    }
    useEffect(()=>{
        clearTimer();
        if(value&&callback){
            const newTimer = setTimeout(callback, timeout);
            setTimer(newTimer)
        }
    }, [value])
}

