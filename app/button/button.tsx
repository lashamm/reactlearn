
import { useEffect, useState } from "react";
import  style  from "./button.module.scss";
import axios from "axios";
import { resourceLimits } from "worker_threads";

export default () => {
    const [data, setData] = useState([])

    const getProduct = () => {
        axios.get('https://fakestoreapi.com/products')
        .then((res) => setData(res.data))
        .catch((err) => {
            console.error('error', err)})
        }

        useEffect(getProduct, [])

        return(
            <>
            <button onClick={getProduct}>click for products</button>
            <ul>
                {data.map((product: any) => (
                    <li key={product.id}>{product.title}</li>
                ))}
            </ul>
            </>
        )

    }








// export default function DogBreeds() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     axios.get("https://dogapi.dog/api/v2/breeds")
//       .then((res) => {
//         // ✅ FIX: Use res.data.data
//         setData(res.data.data);
//       })
//       .catch((err) => {
//         console.error("Error fetching dog breeds:", err);
//       });
//   }, []);

//   return (
//     <div>
//       <h1>Dog Breeds</h1>
//       <ul>
//         {data.map((breed: any) => (
//           <li key={breed.id}>{breed.attributes.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }
// type Props = {
//     title?:string;
//     mode?:string;
//     disabled?:boolean;
// }


// export default (props : Props) =>{
    

//     var [counter, setCount] = useState(0)

//     const onClick = () => {
//         setCount(counter+1)
//     }
//     var cont = style.cont
//     var mode = style.cont

//     if(props.disabled == true){
//         cont = style.disable
//     }
//     if(props.mode == "clear"){
//         mode = style.clear
//     }
    
//     return(  
//         <main className={style.body}>
//             <button onClick={onClick} className={`${cont} ${mode}`}>
//                 {counter}
//         </button>
//         </main>
//     )
// }

