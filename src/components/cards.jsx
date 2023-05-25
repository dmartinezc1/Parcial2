import { useState,useEffect } from "react";
import CardLibro from "./cardlibro";

function Cards(){
    const [libros, setLibros]=useState([])
    useEffect(()=>{
        fetch('http://localhost:4000/books').then((data) => (data.json())).then((l)=>setLibros(l));
            
    },[])
    return(
        <div>
            {libros?.map((_)=><CardLibro image={_.image} name={_.name} isbn={_.isbn}></CardLibro>)}
        </div>
    )
}export default Cards;