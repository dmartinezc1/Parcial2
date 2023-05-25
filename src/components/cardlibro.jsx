import { Card } from "react-bootstrap";

function CardLibro(props){
    return (
        <Card style={{width:"300px"}}>
            <img src={props.image}
            style={{height:"300px",width:"300px"}}>
            </img>
            <h4>{props.name}</h4>
            <p>{props.isbn}</p>
        </Card>
    )
}export default CardLibro;