import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import "../navbar/NavM.css"

const NavM = () => {
  return (
    <div>
        <Navbar bg="light" expand="lg">
      <Container>
        <Link className='heading mx-4' href="/"><h1>Online-Store</h1></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
           <Link className='links' to="/">Home</Link>
            <Link className='links' to="/about">Add Product</Link>
            <Link className='links' to="/cart">Cart</Link>
          </Nav>
          <Link to="/signup"><Button variant="primary mx-2">SignUp</Button></Link>
          <Link to="/login"><Button variant="primary">Login</Button></Link>
        </Navbar.Collapse>
       
      </Container>
    </Navbar>
    </div>
  )
}

export default NavM
