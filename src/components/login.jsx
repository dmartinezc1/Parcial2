import { useState } from "react";
import { Row,Col, Image, Button, Card } from "react-bootstrap";

function Login(){
    
    const login = async ()=>  {
        const user = document.getElementById("idUser")
        const pass = document.getElementById("idPassw")
        fetch("http://localhost:4000/login",{method:"POST",body:JSON.stringify({
            email:user.value,
            password:pass.value
        })}).then(data=>console.log(data))
    }
    return (
        <div style={{padding:"50px","background-color":"gray"}}>
            <Row >
                <Col style={{"background-color":"darkseagreen","color":"white"}}>
                    <Image src="https://cdn-icons-png.flaticon.com/512/6475/6475884.png"></Image>
                    <h1>Encuentra hasta el libro que no estabas buscando</h1>
                </Col>
                <Col style={{"background-color":"silver","aling-items-center":"true"}}>
                    <Row>
                        <h1>
                            Tu librería aliada
                        </h1>
                    </Row>
                    <Row>
                        <Col ><p>Usuario</p></Col>
                        <Col><input id="idUser"></input></Col>
                    </Row>
                    
                    <Row>
                        <Col><p>Constraseña</p></Col>
                        <Col><input id="idPassw"></input></Col>
                    </Row>
                    <Button onClick={login}>Ingresar</Button>
                </Col>
            </Row>
            
        </div>
    )
}export default Login;