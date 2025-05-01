import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import pp from '../imgs/boshgab.png'
import ppr from '../imgs/dasmal.png'
import pprr from '../imgs/mobile.png'

const Home = () => {
  const featuredProducts = [
    { id: 1, name: 'محصول ویژه ۱', price: 120, image: pp },
    { id: 2, name: 'محصول ویژه ۲', price: 180, image: ppr },
    { id: 3, name: 'محصول ویژه ۳', price: 210, image: pprr },
  ];

  return (
    <Container className="my-5">
      {/* بخش معرفی فروشگاه */}
      <div className="text-center mb-5">
        <h1 className="display-4">به فروشگاه ما خوش آمدید</h1>
        <p className="lead">بهترین محصولات با کیفیت عالی و قیمت مناسب</p>
        <Button as={Link} to="/products" variant="primary" size="lg" className="mt-3">
          مشاهده محصولات
        </Button>
      </div>

      {/* محصولات ویژه */}
      <h2 className="text-center mb-4">محصولات ویژه</h2>
      <Row>
        {featuredProducts.map(product => (
          <Col key={product.id} md={4} className="mb-4">
            <Card className="h-100">
              <Card.Img variant="top" src={product.image} />
              <Card.Body className="d-flex flex-column">
                <Card.Title>{product.name}</Card.Title>
                <Card.Text className="mt-auto">
                  قیمت: {product.price} تومان
                </Card.Text>
                <Button 
                  as={Link} 
                  to="/products" 
                  variant="outline-primary"
                  className="mt-auto"
                >
                  مشاهده جزئیات
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* بخش‌های اضافی */}
      <Row className="mt-5">
        <Col md={4} className="mb-4">
          <Card className="h-100">
            <Card.Body className="text-center">
              <Card.Title>تحویل سریع</Card.Title>
              <Card.Text>
                تحویل در کمترین زمان ممکن در سراسر کشور
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card className="h-100">
            <Card.Body className="text-center">
              <Card.Title>پشتیبانی 24/7</Card.Title>
              <Card.Text>
                پشتیبانی آنلاین در تمام ساعات شبانه روز
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card className="h-100">
            <Card.Body className="text-center">
              <Card.Title>ضمانت بازگشت</Card.Title>
              <Card.Text>
                امکان بازگشت کالا تا 7 روز پس از خرید
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;