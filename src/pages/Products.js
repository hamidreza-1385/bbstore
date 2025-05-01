import React from 'react';
import { Card, Button, Row, Col, Container } from 'react-bootstrap';
import { useCart } from '../contexts/CartContext';
import pp from '../imgs/boshgab.png'
import ppr from '../imgs/dasmal.png'
import pprr from '../imgs/mobile.png'

const products = [
  { id: 1, name: 'محصول ۱', price: 100, image: pp},
  { id: 2, name: 'محصول ۲', price: 200, image: ppr },
  { id: 3, name: 'محصول ۳', price: 300, image: pprr },
];

const Products = () => {
  const { addToCart } = useCart();

  return (
    <Container>
      <h2 className="my-4">محصولات</h2>
      <Row>
        {products.map(product => (
          <Col key={product.id} md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src={product.image} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>
                  قیمت: {product.price} تومان
                </Card.Text>
                <Button 
                  variant="primary" 
                  onClick={() => addToCart(product)}
                >
                  افزودن به سبد خرید
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Products;
