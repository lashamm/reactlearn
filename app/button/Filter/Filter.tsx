import { limitState, sortState } from "@/app/state"
import { useRecoilState, useSetRecoilState } from "recoil"

export default () => {


        const [sort, setSort] = useRecoilState(sortState)
        const [limit, setLimit] = useRecoilState(limitState)

        const onSortChange = (e) => {
        setSort(e.target.value)
            localStorage.setItem('sort', e.target.value)
        }

        const onLimitChange = (e) => {
            setLimit(e.target.value)
            localStorage.setItem('limit', e.target.value)
        }

    return(
        <>
         <select value={sort} onChange={onSortChange}>
                <option value="asc">asc</option>
                <option value="desc">dsc</option>
            </select>

            <input 
                 type="number"
                 value={limit}
                 onChange={onLimitChange} />
        </>
    )
}