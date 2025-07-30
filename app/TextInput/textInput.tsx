import { ChangeEventHandler, useState } from "react"
import  style  from "./inp.module.scss"

export default () => {
    const [text, setText] = useState("")

    const onChange = (e:any) => {
        setText(e.target.value)
        console.log(e)
    }
    return (
        <div className={style.main}>
            <h1>{text}</h1>
        <input type="text" value={text}
        onChange={onChange}
        placeholder="Enter something"/>
        </div>
    )
}