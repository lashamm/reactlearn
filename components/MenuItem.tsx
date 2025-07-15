type Props = {
    title:string;
    price:string;
    size?:string;
}

export const MenuItem = (props : Props) => {
    const Style = props.size == 'Big' ? '26px' : '16px'
    return(
        <div style={{
            fontSize: Style
        }}>
        <div className="div">
            <h1>{props.title}</h1>
            <h1>{props.price}</h1>
        </div>
        </div>
    )
}