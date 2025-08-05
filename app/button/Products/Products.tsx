import { limitState, sortState } from "@/app/state"
import axios from "axios"
import { useEffect, useState } from "react"
import { useRecoilState } from "recoil"

export default () => {
        const [data, setData] = useState([])
        const [sort] = useRecoilState(sortState)
        const [limit] = useRecoilState(limitState)

        useEffect(() => {
        axios.get(`https://fakestoreapi.com/products?sort=${sort}&limit=${limit}`)
        .then((res) => setData(res.data))
        .catch((err) => {
            console.error('error', err)})
        }, [sort, limit]);
    return(

        <>
        {data.map((product: any) => (
                    <li key={product.id}>{product.title}</li>
                ))}
        </>

    )
}