import React, { useState, useEffect } from 'react';
import { Button, Table, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

/*Componentes */
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import Sidebar from '../Components/Sidebar';
import Loader from '../Components/Loader';



/* Modals */
/* import ModalCreate from './Modals/Modal-Create';
import ModalEdit from './Modals/Modal-Edit';
import ModalDrop from './Modals/Modal-Drop';
 */

const DashboardAdmin: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simula una carga de datos
    setTimeout(() => {
      setLoading(false);
    }, 3000); // Cambia esto según el tiempo de carga real
  }, []);
/*   const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false); */

  const users = [
    { name: 'Karla', email: 'karla@gmmail.com', phone: '7305477760', employeeNumber: '1234567305477760', image: '/public/mujer.png' },
    { name: 'Luis Carmona', email: 'luis@gmmail.com', phone: '7305477760', employeeNumber: '1234567305477760', image: '/public/mujer.png' },
    { name: 'Roger', email: 'roger@gmmail.com', phone: '7305477760', employeeNumber: '1234567305477760', image: '/public/mujer.png' },
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
        <Container className="container mt-5">
      <h1 className="mb-4">Bienvenido, Admin!</h1>
      <div className="d-flex justify-content-end align-items-center mt-4">
      <Button variant="success" className="mb-3"><i className="fas fa-plus"></i>  Agregar usuario</Button>
      </div>
      <Table striped bordered hover className="mt-4 ">
              <thead className=" text-center">
                <tr>
                  <th>Nombre</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Número de empleado</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={index}>
                    <td>
                      <img src={user.image} alt="user" style={{ width: '50px', borderRadius: '50%', marginRight: '10px' }} />
                      {user.name}
                    </td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.employeeNumber}</td>

                    <td >
                      <div className="d-flex justify-content-center m-1" >

                         <Button variant="warning" className="me-2 "><i className="fas fa-pen"></i></Button>

                    <Button variant="danger" className="me-2"><i className="fas fa-trash"></i></Button>

                    <Button variant="primary" className="me-2"><i className="fas fa-plus"></i> Asignar tareas</Button>
                      </div>
                   

                     
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
    </Container>
        <Footer  />
      </div>
    </div>
     )}
    </>
 
  );
};

export default DashboardAdmin;
