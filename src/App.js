import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Navbar, Nav, Container, } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Signup from './components/Signup';
import Signin from './components/Signin';
import Getcars from './components/Getcars';
import Mpesapayment from './components/MpesaPayment';
import Addcars from './components/Addcars';


function App() {
  return (
    <Router>
      <div className="App">
        <div className='app-header'>
          <h1 className='text-warning'>Welcome To CarVista Store</h1>
        </div>

        {/* Navbar */}
        <Navbar bg="success" variant="dark" expand="lg" collapseOnSelect sticky="top">
          <Container>
            <Navbar.Brand as={Link} to="/" className='text-warning'><h2><span className='texts'>C</span>ar<span className='lett'>V</span>ista</h2></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/signup">Sign Up</Nav.Link>
                <Nav.Link as={Link} to="/signin">Log In</Nav.Link>
                <Nav.Link as={Link} to="/addcars">Upload Cars</Nav.Link>

                
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* Routing the components */}
        <Routes>
          <Route path='/signup' element={<Signup />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/addcars' element={<Addcars />} />
          <Route path='/' element={<Getcars />} />
          <Route path='/Mpesapayment' element={<Mpesapayment />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;