import { useState,useEffect } from "react";
import CardLibro from "./cardlibro";
import { Col, Container, Row } from "react-bootstrap";
import Detail from "./cardDetail";
import { FormattedMessage } from "react-intl";

function Cards(props){
    
    const [libros, setLibros]=useState([])
    const [libro, setLibro]=useState("")
    useEffect(()=>{
        fetch('http://localhost:4000/books').then((data) => (data.json())).then((l)=>setLibros(l));
    },[])

    function setLibroAct(event){
        setLibro(event.currentTarget.id)
    }
    return(
        <Row>
        <div class="col-8" >
            <div class="d-flex flex-wrap justify-content-around">
                {libros?.map((_)=><div style={{width:"auto"}} id={_.id} onClick={setLibroAct}><CardLibro  image={_.image} name={_.name} isbn={_.isbn}></CardLibro></div>)}
            </div>
        </div>
        <div class="col-4" >
            {libro===""?<div><FormattedMessage id="noBookSelected"/></div>:<Detail idLibro={libro} rol={props.rol} ></Detail>}
        </div>
        </Row>
    )
}export default Cards;