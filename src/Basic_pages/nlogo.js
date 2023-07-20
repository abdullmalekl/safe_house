import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Applogo from '../last.png';
function upnav() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand ><img width='160px' height='60px' src={Applogo}></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <ul>
            <li>
            <a id='FacebookButtons' className='btn btn-primary' href='https://www.facebook.com/khrwat.kh'><b>F</b></a>
            </li>
            <li>
            <a id='telegramButtons' className='btn btn-primary' href='https://www.facebook.com/khrwat.kh'><b>T</b></a>
            </li>
        </ul>
      </Container>
    </Navbar>
  );
}
export default upnav;