import React from "react";
import "./CardsList.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "../ProductCard/Card";
import Col from "react-bootstrap/Col";

const CardsList = ({ products, bin, callback }) => {
  return (
    <div>
      <div>
        {products.map((category) => (
          <div>
            <Container>
              <h1>{category.categoryName}</h1>
              {category.groups.map((group) => (
                <Row>
                  {group.map((item) => (
                    <Col>
                      <Card
                        id={item.id}
                        img={item.img}
                        name={item.name + `${item.id}`}
                        bin={bin}
                        price={item.price}
                        callback={callback}
                      />
                    </Col>
                  ))}
                </Row>
              ))}
            </Container>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardsList;
