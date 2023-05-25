import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';





const NavBarTienda = () => {
    return (

        <Navbar bg="light" expand="lg" className='NavBarStyles'>
      <Container>
        <Navbar.Brand href="#home">Tienda-Tutto Picolino 👶</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home"><h5>Inicio</h5></Nav.Link>
            <Nav.Link href="#link"><h5>Nosotros</h5></Nav.Link>
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1"><p>Babitas</p></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                <p>Recibidores</p>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3"><p>Mantas polares</p></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                <p>Ofertas!!</p>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        
    );
};

export {NavBarTienda}




