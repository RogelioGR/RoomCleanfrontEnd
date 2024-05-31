import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
  return (
    <Navbar className="d-flex flex-column align-items-start" style={{ height: 'auto', padding: '1rem', backgroundColor: '#0F4C75' }}>
      <Navbar.Brand className="mb-5 d-flex align-items-center text-white">
        {/* Logo */}
        <img
          src="public/roomclean.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="RoomClean logo"
        />
        <span className="ms-2">RoomClean</span>
      </Navbar.Brand>
      <Nav className="flex-column w-100">
        <Nav.Link as={Link} to="/dashboard" className="d-flex align-items-center sidebar-link text-white">
          <i className="bi bi-house-door me-2"></i>
          Dashboard
        </Nav.Link>
        <Nav.Link href="#perfil" className="d-flex align-items-center sidebar-link text-white">
          <i className="bi bi-person me-2"></i>
          Perfil
        </Nav.Link>
        <Nav.Link href="#info" className="d-flex align-items-center sidebar-link text-white">
          <i className="bi bi-info-circle me-2"></i>
          Info
        </Nav.Link>
      </Nav>
      <Nav className="mt-auto w-100">
        <Nav.Link href="#logout" className="d-flex align-items-center sidebar-link text-white">
          <i className="bi bi-box-arrow-right me-2"></i>
          Cerrar sesión
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Sidebar;
