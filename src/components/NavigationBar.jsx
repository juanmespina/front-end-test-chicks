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
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="test-navbar">
        <Nav id="test-navbar" className="me-auto">
          <NavDropdown className="px-4 py-2" title="CURRENCY"></NavDropdown>
          <NavDropdown className="px-4 py-2" title="ITEMS"></NavDropdown>
          <NavDropdown className="px-4 py-2" title="ACCOUNTS"></NavDropdown>
          <NavDropdown className="px-4 py-2" title="SERVICES"></NavDropdown>
          <NavDropdown className="px-4 py-2" title="SWAP"></NavDropdown>
          <NavDropdown className="px-4 py-2" title="SELL"></NavDropdown>
        </Nav>
        </Navbar.Collapse>
        <Nav className="me-auto justify-content-end">
          <NavDropdown className="d-flex align-items-center  justify-content-center px-4 py-2 mx-1" title="USD"></NavDropdown>
          <Nav.Item className="d-flex px-4 py-2 mx-1 justify-content-md-center justify-content-lg-between align-items-center">
            <img
              className="test-navbar-cart-icon me-1"
              src="https://chicksgold.com/icons/cart.svg"
            />
            <p className="ms-1 mb-0">CART (5)</p>
          </Nav.Item>
          <Nav.Item className="px-4 py-2 mx-1">
            <Button size="lg" className="h-100 test-signin-btn">
              <span className="mx-1">SIGN IN</span>
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
