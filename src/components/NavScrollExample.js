import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaCartPlus } from "react-icons/fa";
import { Cart } from './Cart';
import './style.css'
import { useNavigate } from "react-router-dom";

export const NavScrollExample = ({ searchProducts, cartSize, cartItem }) => {
  const navigate = useNavigate();
  const handleSearch = (e) => {
    searchProducts(e.target.value);
  };

  const handleCartNavigation = () => {
    navigate(`/cart` ,  { state: { items : cartItem , searchProducts: searchProducts, cartSize:cartSize} });
  }
  return (
    <Navbar expand="lg" className="bg-body-tertiary" style={{  position: "fixed",

      padding: "20px",    
      zIndex: "1000",
      width:"100%"}}>
      <Container fluid>
        <Navbar.Brand  href="/">একের ভিতর সব</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              onChange={handleSearch}
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success" onClick={handleCartNavigation}>
              <span>
                <div className="cart-icon-container">
                  {cartSize > 0 && <span className="badge">{cartSize}</span>}

                  <FaCartPlus />
                </div>
              </span>

            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

