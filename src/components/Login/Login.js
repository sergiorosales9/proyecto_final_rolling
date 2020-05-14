import React, { useState } from "react";
import { Container, Row, Col, Form, Button, ButtonGroup } from "react-bootstrap";
import LoginContainer from "./LoginContainer";
import Sidebar from "./Sidebar";
import Register from "../Register/Register";

// estilos del componente
import './styles.css';

const Login = () => {
  const [login, setLogin] = useState(true);
 
const register =() =>{
  if(login===true){
    setLogin(false)
    return 
  } else{
    setLogin(true)
    return
  }
}


  return (
    <div>
      <Container className="contenedor-inicio">
        <Row >
          <Col xs={6} className="sidebar-contenedor">
            <Sidebar />
          </Col>
          <Col xs={6} className="login-contenedor">
          <div className="botones">
                <Button type="button" className="toggle" onClick={register}> {login ? 'Registrarse' : 'Inicio'} </Button> 
                
                
            </div>
            

            {login ? <LoginContainer /> : <Register />}

          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
