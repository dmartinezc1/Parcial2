import { useEffect, useState } from "react"
import { Col, Row } from "react-bootstrap";
import { FormattedMessage,useIntl  } from "react-intl";

function Detail(props){
    const intl=useIntl()
    const [libro, setLibro ]= useState([])
    useEffect(()=>{
      fetch('http://localhost:4000/books/'+props.idLibro).then(data=>data.json()).then((l)=>setLibro(l));
    },[props])

    function available_online(){
        if (libro.available_online){
            return intl.formatMessage({ id: 'available' })
        }
        else{
            return intl.formatMessage({ id: 'no_available' })
        }
    }
    return (
        <div >
            <h1>{libro.name}</h1>
            <hr></hr>
            <Row >
                <Col style={{"text-align":"left"}}>
                    <Row><b>ISBN</b></Row>
                    <Row><b><FormattedMessage id="author"/></b></Row>
                    <Row><b><FormattedMessage id="publisher"/></b></Row>
                    <Row><b><FormattedMessage id="genre"/></b></Row>
                    <Row><b><FormattedMessage id="year"/></b></Row>
                    <Row><b><FormattedMessage id="available_online"/></b></Row>
                    <Row><b><FormattedMessage id="price"/></b></Row>
                </Col>
                <Col style={{"text-align":"left"}}>
                    
                    {props.rol!=="Administrador"?
                    <div>
                        <Row>{libro.isbn}</Row>
                        <Row>{libro.author}</Row>
                        <Row>{libro.publisher}</Row>
                        <Row>{libro.gender}</Row>                    
                        <Row>{libro.year}</Row>                    
                        <Row>{available_online()}</Row>                  
                        <Row>{libro.price}
                        </Row>
                    </div>:
                    <div>
                        <Row><input defaultValue={libro.isbn}/></Row>
                        <Row><input defaultValue={libro.author}/></Row>
                        <Row><input defaultValue={libro.publisher}/></Row>
                        <Row><input defaultValue={libro.gender}/></Row>                    
                        <Row><input defaultValue={libro.year}/></Row>                    
                        <Row><input defaultValue={available_online()}/></Row>                  
                        <Row><input defaultValue= {libro.price}/></Row>
                    </div>}
                    
                </Col>
                <Row><b style={{"text-align":"left",padding:"0px"}}><FormattedMessage id="summary"/></b></Row>
                <Row><p style={{"text-align":"left",padding:"0px"}}>{libro.summary}</p></Row>
            </Row>
            
        </div>
    )
}export default Detail