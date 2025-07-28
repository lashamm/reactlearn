
import { useState } from "react";
import  style  from "./button.module.scss";

type Props = {
    title?:string;
    mode?:string;
    disabled?:boolean;
}


export default (props : Props) =>{
    

    var [counter, setCount] = useState(0)

    const onClick = () => {
        setCount(counter+1)
    }
    var cont = style.cont
    var mode = style.cont

    if(props.disabled == true){
        cont = style.disable
    }
    if(props.mode == "clear"){
        mode = style.clear
    }
    
    return(  
        <main className={style.body}>
            <button onClick={onClick} className={`${cont} ${mode}`}>
                {counter}
        </button>
        </main>
    )
}

