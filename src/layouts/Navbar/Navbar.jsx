import {
    Nav,
    Navbar as BSNavbar,
    NavDropdown,
    Row,
    Col,
  } from "react-bootstrap";
  import Link from "next/link";
  import { FaBars, FaUser } from "react-icons/fa";
  import Mountain from "../../icons/Mountain";
  
  const Navbar = () => {
    return (
      <>
        <BSNavbar
          className="py-1 ps-2 p-md-3 p-lg-1 p-xxl-3 bg-primary"
          expand="lg"
        >
          <Row className="w-100">
            <Col xs={0} lg={5} />
            <Col xs={8} lg={2} className="d-flex justify-content-center">
              <Link passHref href="/">
                <div className="w-75 w-md-50 w-lg-100 cursor-pointer d-flex justify-content-center">
                  {/* <KamprLogo className="w-100" /> */}
                  <h1 className="display-5 fw-bold text-light">LOGO</h1>
                </div>
              </Link>
            </Col>
            <Col
              xs={4}
              lg={5}
              className="pe-0 d-flex align-items-center justify-content-end"
            >
              <BSNavbar.Collapse className="justify-content-end">
                <Link passHref href="/list-rv">
                  <Nav.Item className="cursor-pointer">
                    <div className="bg-secondary bg-opacity-50 d-flex justify-content-around align-items-center rounded-2 py-1 px-3">
                      <Mountain />
                      <small className="text-light ms-1">Contact</small>
                    </div>
                  </Nav.Item>
                </Link>
              </BSNavbar.Collapse>
              <NavDropdown
                className="hide-pseudo-elements custom-navdropdown"
                title={
                  <div className="bg-secondary bg-opacity-50 p-1 rounded-2">
                    <FaUser className="d-none d-lg-block text-muted" />
                    <FaBars className="d-lg-none text-light fs-1" />
                  </div>
                }
                align="end"
              >
                <div className="d-block d-lg-none">
                  <Link passHref href="/list-rv">
                    <NavDropdown.Item>WELCOME</NavDropdown.Item>
                  </Link>
                  <Link passHref href="/search-rental-rv">
                    <NavDropdown.Item>MEDIA</NavDropdown.Item>
                  </Link>
                  <Link passHref href="/state-parks/rv">
                    <NavDropdown.Item>STATEMENT OF FAITH</NavDropdown.Item>
                  </Link>
                  <Link passHref href="/trips">
                    <NavDropdown.Item>CONTACT/DIRECTIONS</NavDropdown.Item>
                  </Link>
                  <NavDropdown.Divider />
                </div>
              </NavDropdown>
            </Col>
          </Row>
        </BSNavbar>
        <BSNavbar className="d-none d-lg-flex p-0 sticky-top" bg="secondary">
          <Nav className="mx-auto px-2 d-flex gap-3 rounded-bottom-5">
            <Link passHref href="/search-rental-rv">
              <Nav.Link className="text-light">WELCOME</Nav.Link>
            </Link>
            <Link passHref href="/state-parks/rv">
              <Nav.Link className="text-light">MEDIA</Nav.Link>
            </Link>
            <Link passHref href="/trips">
              <Nav.Link className="text-light">STATEMENT OF FAITH</Nav.Link>
            </Link>
            <Link passHref href="/list-rv">
              <Nav.Link className="text-light">DIRECTIONS</Nav.Link>
            </Link>
            <Link passHref href="/list-rv">
              <Nav.Link className="text-light">CONTACT</Nav.Link>
            </Link>
            <Link passHref href="/list-rv">
              <Nav.Link className="text-light">ABOUT</Nav.Link>
            </Link>
          </Nav>
        </BSNavbar>
      </>
    );
  };
  
  export default Navbar;
  