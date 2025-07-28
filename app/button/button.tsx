
import  style  from "./button.module.scss";

type Props = {
    title:string;
    mode?:string;
    disabled?:boolean;
}


export default (props : Props) =>{
    
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
            <button className={`${cont} ${mode}`}>
                {props.title}
        </button>
        </main>
    )
}

