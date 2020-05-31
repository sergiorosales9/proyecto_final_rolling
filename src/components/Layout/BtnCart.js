import React, { useState } from "react";
import { Button, ListGroup, Badge, Row, Col } from "react-bootstrap";
import { FaCartPlus, FaRegWindowClose } from "react-icons/fa";
import { render } from "@testing-library/react";

const BtnCart = (products) => {
  const [cartOpen, setCartOpen] = useState(false);

  const cierroCarro = () => {
    setCartOpen(false);
  };

  const abreCarro = () => {
    setCartOpen(true);
  };

  console.log(products.products);

  let clase;
  {
    cartOpen ? (clase = "btnCartOpen") : (clase = "cuerpoCart");
  }

  return (
    <>
      <div className={clase}>
        <Button className="btnCart_header mr-2" onClick={abreCarro}>
          {" "}
          <FaCartPlus className="icons_header_cart" />
          <Badge variant="dark">{products.products.length}</Badge>
        </Button>

        <Row>
          <Col sm={4}>
            <Button className="cartClose" variant="dark" onClick={cierroCarro}>
              <FaRegWindowClose />
            </Button>
          </Col>
          <Col sm={8}>
            <h4 style={{ color: "white" }}  className="cartClose">Productos seleccionados</h4>
          </Col>
        </Row>
        <ListGroup className="containerCart">
          <Row>
            <ListGroup horizontal className="estilosTitulosbtn">
              <Col>
                <ListGroup.Item className="estilosTitulosbtn">
                  Imagen
                </ListGroup.Item>
              </Col>
              <Col xs={6}>
                <ListGroup.Item className="estilosTitulosbtn">
                  Nombre y descripcion
                </ListGroup.Item>
              </Col>
              <Col>
                <ListGroup.Item className="estilosTitulosbtn">
                  Precio
                </ListGroup.Item>
              </Col>
            </ListGroup>
          </Row>

          {products.products.lenght === 0
            ? null
            : products.products.map((product) => (
                <Row>
                  <ListGroup horizontal>
                    <Col>
                      <ListGroup.Item className="productitoslistados">{product.img}</ListGroup.Item>
                    </Col>
                    <Col xs={6}>
                      <ListGroup.Item className="productitoslistados"> 
                        {product.nombre} <br /> {product.descripcion}
                      </ListGroup.Item>
                    </Col>
                    <Col>
                      <ListGroup.Item className="productitoslistados"> ${product.precio}</ListGroup.Item>
                    </Col>
                  </ListGroup>
                </Row>
              ))}
        </ListGroup>
      </div>
    </>
  );
};

export default BtnCart;
