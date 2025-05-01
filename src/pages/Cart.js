import React from 'react';
import { Table, Button, Container, Form } from 'react-bootstrap';
import { useCart } from '../contexts/CartContext';

const Cart = () => {
  const { 
    cart, 
    removeFromCart, 
    updateQuantity, 
    clearCart, 
    cartTotal 
  } = useCart();

  return (
    <Container>
      <h2 className="my-4">سبد خرید</h2>
      {cart.length === 0 ? (
        <p>سبد خرید شما خالی است</p>
      ) : (
        <>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>محصول</th>
                <th>قیمت</th>
                <th>تعداد</th>
                <th>جمع</th>
                <th>عملیات</th>
              </tr>
            </thead>
            <tbody>
              {cart.map(item => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.price} تومان</td>
                  <td>
                    <Form.Control
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                      style={{ width: '70px' }}
                    />
                  </td>
                  <td>{item.price * item.quantity} تومان</td>
                  <td>
                    <Button 
                      variant="danger" 
                      size="sm"
                      onClick={() => removeFromCart(item.id)}
                    >
                      حذف
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="3" className="text-end">جمع کل:</td>
                <td colSpan="2">{cartTotal} تومان</td>
              </tr>
            </tfoot>
          </Table>
          <div className="d-flex justify-content-between">
            <Button variant="secondary" onClick={clearCart}>
              پاک کردن سبد خرید
            </Button>
            <Button variant="success">
              پرداخت
            </Button>
          </div>
        </>
      )}
    </Container>
  );
};

export default Cart;
