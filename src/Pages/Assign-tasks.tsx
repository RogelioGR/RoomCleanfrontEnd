import React, { useState, useEffect } from 'react';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';

/*Componentes */
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import Sidebar from '../Components/Sidebar';
import Loader from '../Components/Loader';

const AssignTasksAdmin: React.FC = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simula una carga de datos
        setTimeout(() => {
            setLoading(false);
        }, 3000); // el tiempo de carga real
    }, []);

    const rooms = [
        { number: 'A01-105', status: 'Por hacer' },
        { number: 'A01-105', status: 'Por hacer' },
        { number: 'A01-105', status: 'Por hacer' },
        { number: 'A01-105', status: 'Por hacer' },
        { number: 'A01-105', status: 'Por hacer' },
        { number: 'A01-105', status: 'Por hacer' },
        { number: 'A01-105', status: 'Por hacer' },
        { number: 'A01-105', status: 'Por hacer' },
        { number: 'A01-105', status: 'Por hacer' },
        { number: 'A01-105', status: 'Por hacer' },
        { number: 'A01-105', status: 'Por hacer' },
        { number: 'A01-105', status: 'Por hacer' },
        { number: 'A01-105', status: 'Por hacer' },
        { number: 'A01-105', status: 'Por hacer' },
        { number: 'A01-105', status: 'Por hacer' },
        { number: 'A01-105', status: 'Por hacer' },
        { number: 'A01-105', status: 'Por hacer' },
    ];

    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                <div className="d-flex vh-100">
                    <Sidebar />
                    <div className="flex-grow-1 d-flex flex-column">
                        <Header />
                        <Container className="container mt-2">
                            <h2>Habitaciones</h2>
                            <p>Empleado: Karla Diaz</p>
                            <div className="d-flex justify-content-end align-items-center mt-4">
                                <Button variant="success" className="mb-2">Crear Tarea</Button>
                            </div>
                            <div className="scroll-container flex-grow-1">
                                <Row>
                                    {rooms.map((room, index) => (
                                        <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-4">
                                            <div className="room-card">
                                                <Card.Img variant="top" src="https://via.placeholder.com/150" alt="Room" className="room-image" />
                                                <Card.Body className="room-body">
                                                    <Card.Title>{room.number}</Card.Title>
                                                    <Card.Text>Estado: <span className="text-muted">{room.status}</span></Card.Text>
                                                    <div className="card-buttons">
                                                        <Button variant="primary" className="mr-2">Editar</Button>
                                                        <Button variant="danger">Eliminar</Button>
                                                    </div>
                                                </Card.Body>
                                            </div>
                                        </Col>
                                    ))}
                                </Row>
                            </div>
                        </Container>
                        <Footer />
                    </div>
                </div>
            )}
        </>
    );
};

export default AssignTasksAdmin;
