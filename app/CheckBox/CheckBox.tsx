import { useState } from "react"

export default () => {
    const [ showMenu, setShowMenu] = useState(false)

    const onChange = (e) => {
        setShowMenu(!showMenu)
    }
    return(
        <>

        <div onClick={onChange}>show menu</div>
        {showMenu &&
        <ul>
            <li>home</li>
            <li>about</li>
            <li>contact us</li>
        </ul>}
        
        </>
        
    )
}