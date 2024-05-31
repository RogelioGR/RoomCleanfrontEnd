import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';



const Login:  React.FC = () => {
    const navigate = useNavigate();

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();
    // lógica de autenticación
    navigate("/DashboardAdmin"); 
  };
  return (
    
    <Container fluid className="login-container" onSubmit={handleLogin}>
    
      <Row className="justify-content-center align-items-center vh-100">
        <Col md={6} lg={4} className="text-center">
          <h1 className="mb-4">Iniciar sesión</h1>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Correo Electronico" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword" className="mt-3">
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-3" >
              Iniciar sesión
            </Button>
          </Form>
        </Col>
        <Col md={6} lg={4} className="d-none d-md-block text-center">
          <img src="/public/roomclean.png" alt="Logo" className="login-logo" />
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
