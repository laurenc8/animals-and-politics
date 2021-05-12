import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavigationBar() {
  return (
    <div>
      <Navbar expand="lg">
        <Navbar.Brand>Animals and Politics</Navbar.Brand>
        <Nav>
          <Link to="/tiktoks">04. Tiktoks</Link>
          <Link to="/poster">03. Poster</Link>
          <Link to="/video">02. Video</Link>
          <Link to="/">01. Home</Link>
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavigationBar;