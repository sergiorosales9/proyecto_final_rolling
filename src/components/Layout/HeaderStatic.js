import React from "react";
import { Container, Row, Col, Nav, Button, Image } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import "./styles.css";
import Loguito from "../Images/zerote.png";
import { FaUser, FaShareSquare } from "react-icons/fa";

const HeaderStatic = ({ authen, setAuthen, usuario }) => {
  let history = useHistory();
  const cerrarSes = () => {
    localStorage.removeItem("Token");
    setAuthen(null);
    history.push("/");
  };

  return (
    <Container fluid className="Container_Header">
      <Row className="container_logo" style={{ padding: "0px", margin: "0px" }}>
        <Col xs={4} md={3} className="logo">
          <Image src={Loguito} rounded className="logo_imagen_header" />
        </Col>
        <Col xs={7} md={9} className="login_registro_header">
          {authen ? (
            <>
              <span>
                <FaUser className="icons_header" />
                Hola: {usuario.username}
              </span>

              <Button
                className="btnLogin_header_logout mr-2"
                style={{ border: "none" }}
                onClick={cerrarSes}
              >
                {" "}
                <FaShareSquare />
              </Button>
            </>
          ) : (
            <Button
              className="btnLogin_header mr-2"
              onClick={() => {
                history.push("/");
              }}
            >
              {" "}
              <FaUser className="icons_header" />
              Iniciar sesion
            </Button>
          )}
        </Col>
      </Row>

      <Nav className="justify-content-center nav_header">
        <Nav.Item className="nav_header">
          <Link to="/main" className="btnNav_header">
            Tienda
          </Link>
        </Nav.Item>
        {authen ? (
           <Nav.Item>
           <Link to="/perfil" className="btnNav_header">
             Perfil
           </Link>
         </Nav.Item>
        ) : null}
        <Nav.Item>
          <Link to="/service" className="btnNav_header">
            Servicios
          </Link>
        </Nav.Item>
        {authen ? (
          <Nav.Item>
            <Link to="/turn" className="btnNav_header">
              Turno
            </Link>
          </Nav.Item>
        ) : null}
      </Nav>
    </Container>
  );
};

export default HeaderStatic;
