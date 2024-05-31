import React, { useState, useEffect } from 'react';
import { Button, Table, Container, Pagination } from 'react-bootstrap';
import { Link } from 'react-router-dom';



/*Componentes */
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import Sidebar from '../Components/Sidebar';
import Loader from '../Components/Loader';

const DashboardAdmin: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(5); //  el número de usuarios por página s

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000); // el tiempo de carga real
  }, []);

  /* datos de prueba */
  const users = [
    { Nombre: 'Karla', correo: 'karla@gmmail.com', telefono: '7305477760', NumEmpleado: '123456', img: '/public/mujer.png' },
   
  ];


  // Calcular usuarios a mostrar en la página actual
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  // Cambiar de página
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

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
                <Button variant="success" className="mb-3">
                  <i className="fas fa-plus"></i> Agregar usuario
                </Button>
              </div>
              <Table striped bordered hover className="mt-4">
                <thead className="text-center">
                  <tr>
                    <th>Nombre</th>
                    <th>correo</th>
                    <th>Telefono</th>
                    <th>Número de empleado</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {currentUsers.map((user, index) => (
                    <tr key={index}>
                      <td>
                        <img src={user.img} alt="user" style={{ width: '50px', borderRadius: '50%', marginRight: '10px' }} />
                        {user.Nombre}
                      </td>
                      <td>{user.correo}</td>
                      <td>{user.telefono}</td>
                      <td>{user.NumEmpleado}</td>
                      <td>
                        <div className="d-flex justify-content-center m-1" >
                          <Button variant="warning" className="me-2 "><i className="fas fa-pen"></i></Button>
                          <Button variant="danger" className="me-2"><i className="fas fa-trash"></i></Button>
                          <Link to="/AssignTasksAdmin" style={{ textDecoration: 'none', color: 'white' }}>

                            <Button variant="primary" className="me-2"><i className="fas fa-plus"></i> Asignar tareas</Button>
                          </Link>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
              <Pagination className="justify-content-center">
                {[...Array(Math.ceil(users.length / usersPerPage)).keys()].map(number => (
                  <Pagination.Item key={number} active={number + 1 === currentPage} onClick={() => paginate(number + 1)}>
                    {number + 1}
                  </Pagination.Item>
                ))}
              </Pagination>
            </Container>
            <Footer />
          </div>
        </div>
      )}
    </>
  );
};

export default DashboardAdmin;
