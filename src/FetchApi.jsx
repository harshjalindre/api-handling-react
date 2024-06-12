import { useState } from "react";
import Cards from "./Cards"
import { useEffect } from "react";


const FetchApi = () => {

    const [apiData, setApiData] = useState([]);

    const fetched = async () =>{
        await fetch('https://dummyjson.com/recipes')
        .then(response => response.json())
        .then(data => {
          setApiData(data.recipes); // Use the data from the response
        });
    }
    

    
    useEffect(()=>{
       fetched();
    },[]);

  return (
    <>
        
        <div className="card-container">
            
            {apiData.slice(0, 4).map((items, index)=>(
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

export default FetchApi