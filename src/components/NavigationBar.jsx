import { Container, Nav, Navbar, NavDropdown, Button } from "react-bootstrap";

export default function NavigationBar() {
  return (
    <Navbar expand="lg">
      <Container fluid>
        <Navbar.Brand href="#home">
          <img
            className="ps-2 pt-0 pe-4 pb-2"
            alt="chicks gold"
            src="https://chicksgold.com/logo/chicks-logo-large.svg"
          />
        </Navbar.Brand>
        <Nav className="me-auto">
          <NavDropdown className="px-4 py-2" title="CURRENCY"></NavDropdown>
          <NavDropdown className="px-4 py-2" title="ITEMS"></NavDropdown>
          <NavDropdown className="px-4 py-2" title="ACCOUNTS"></NavDropdown>
          <NavDropdown className="px-4 py-2" title="SERVICES"></NavDropdown>
          <NavDropdown className="px-4 py-2" title="SWAP"></NavDropdown>
          <NavDropdown className="px-4 py-2" title="SELL"></NavDropdown>
        </Nav>
        <Nav className="ms-auto">
          <NavDropdown className="px-4 py-2" title="USD"></NavDropdown>
          <Nav.Item>
            <Button size="lg" className="chicks-signin-btn">
              <span className="me-1">Sign in</span>
              <img
                className="ms-1"
                src="https://chicksgold.com/sign-in/profile.png"
              />
            </Button>{" "}
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
}
