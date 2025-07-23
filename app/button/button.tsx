
import  style  from "./button.module.scss";

type Props = {
    title:string;
    mode?:string;
    disabled?:boolean;
}


export default (props : Props) =>{
    return(  
        <body className={style.body}>
            <button className={style.cont}>
                {props.title}
        </button>
        </body>
    )
}