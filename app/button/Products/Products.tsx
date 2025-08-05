import axios from "axios"
import { useEffect, useState } from "react"

export default () => {
        const [data, setData] = useState([])


        useEffect(() => {
        axios.get(`https://fakestoreapi.com/products?sort=${sort}&limit=${limit}`)
        .then((res) => setData(res.data))
        .catch((err) => {
            console.error('error', err)})
        }, [sortState, limit]);
    return(

        <>
        {data.map((product: any) => (
                    <li key={product.id}>{product.title}</li>
                ))}
        </>

    )
}