import axios from "axios";
import { useEffect, useState } from "react"
import Cards from "./Cards";


const AxiosApi = () => {
    const [apiData, setApiData] = useState([]);

    const getData = async () =>{
        await axios.get('https://dummyjson.com/recipes')
        .then(res => setApiData(res.data.recipes));
    }

    useEffect(()=>{
        getData();
    },[]);
  return (
    <>
        <div className="card-container">
            
            {apiData.slice(5, 9).map((items, index)=>(
                <Cards 
                key={index}
                title={items.name} 
                description={items.cuisine}
                images={items.image}
                />
            ))}
            
        </div>
    </>
  )
}

export default AxiosApi