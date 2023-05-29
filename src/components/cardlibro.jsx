import { Card } from "react-bootstrap";

function CardLibro(props){
    return (
        <Card style={{width:"250px",height:"300px"}}>
            <img src={props.image}
            style={{height:"250px"}}>
            </img>
            <h4>{props.name}</h4>
            <p>{props.isbn}</p>
        </Card>
    )
}export default CardLibro;