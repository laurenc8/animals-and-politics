import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavigationBar() {
  return (
    <div>
      <Navbar expand="lg">
        <Navbar.Brand>Animals and Politics</Navbar.Brand>
        <Nav>
          <Link to="/video">04. Video</Link>
          <Link to="/tiktoks">03. Tiktoks</Link>
          <Link to="/poster">02. Poster</Link>
          <Link to="/">01. Home</Link>
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavigationBar;