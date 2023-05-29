import { Row,Col, Image, Button, Card } from "react-bootstrap";
import { FormattedMessage } from "react-intl";
import { useNavigate } from "react-router-dom";

function Login(props){
    const navigate = useNavigate()
    const login = async ()=>  {
        const user = document.getElementById("idUser")
        const pass = document.getElementById("idPassw")
        
        const response = await fetch("http://localhost:4000/login",{method:"POST",headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },body:JSON.stringify({
            email:user.value,
            password:pass.value
        })})

        if(response.ok){
            response.json().then((data)=>{props.setRole(data.rol);console.log(data)})
            navigate("/home")
        }
        else{
            response.json().then((data)=>{alert(data.message)})
        }
    }
    return (
        <div style={{padding:"50px","background-color":"gray"}}>
            <Row >
                <Col style={{"background-color":"darkseagreen","color":"white"}}>
                    <Image src="https://cdn-icons-png.flaticon.com/512/6475/6475884.png"></Image>
                    <h1><FormattedMessage id="lableLogin1"/></h1>
                </Col>
                <Col  style={{"background-color":"silver","aling-items-center":"true"}}>
                    <Row>
                        <h1>
                        <FormattedMessage id="lableLogin2"/>
                        </h1>
                    </Row>
                    <Row>
                        <Col ><p><FormattedMessage id="email"/></p></Col>
                        <Col><input id="idUser"></input></Col>
                    </Row>

                    <Row>
                        <Col><p><FormattedMessage id="password"/></p></Col>
                        <Col><input id="idPassw" type="password"></input></Col>
                    </Row>
                    <Button onClick={login}><FormattedMessage id="btnlogin"/></Button>
                </Col>
            </Row>
            
        </div>
    )
}export default Login;