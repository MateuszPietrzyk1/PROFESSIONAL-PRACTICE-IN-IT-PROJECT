import logo from './logo.svg';
import './App.css';
import { Navbar, Container, Nav, NavDropdown, Row, Col, Image, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <header >
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="#home">SHOE4U</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
                <NavDropdown title="New Shoes" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
          <input id="searchbar" onkeyup="search_shoes()" type="text"
          name="search" placeholder="Search Shoes"></input>

        </Navbar>
       
        
  
      </header>

      <main>
        <Container>
          <Row className="px-4 my-5">
            <Col sm={8}>
              <Image src="https://cdn.shopify.com/s/files/1/0603/3031/1875/articles/Untitled_design_1_1920x.jpg?v=1660125252"
                fluid
                rounded
              />

            </Col>
            <Col sm={4}>
              <h1>SHOE4U</h1>
              <h2>
              Put your best foot forward with our stylish shoes!
              </h2>
              
            </Col>
          </Row>
          <Row>
            <Card className="text-center bg-secondary text-white my-5 py-4">
              <Card.Body>Welcome to our online shoe shop, where fashion meets comfort! We offer a wide range of trendy and comfortable shoes that cater to your every need. From stylish sneakers to elegant boots, we have it all. Our passion for fashion and quality footwear is reflected in every product we offer, ensuring that you receive the best possible shopping experience.</Card.Body>
            </Card>
            <h1>NEW ARRIVALS</h1>
          </Row>
          <Row>
            <Col>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/e79cd772-65e1-482c-beeb-2a4428fb821c/air-jordan-1-mid-se-shoes-9CNKc6.png" />
                <Card.Body>
                  <Card.Title>Jordan 1 Mid</Card.Title>
                  <Card.Text>
                  You ready for your moment in the sun? Every time the AJ1 gets a remake you get the classic sneaker in new colours and textures for a fresh look with a familiar feel. Premium materials and accents give modern expression to an all-time favourite. Get out there and shine.
                  </Card.Text>
                  <Button variant="primary">129.99€</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/b7d9211c-26e7-431a-ac24-b0540fb3c00f/air-force-1-07-shoes-GjGXSP.png" />
                <Card.Body>
                  <Card.Title>Air Force 1</Card.Title>
                  <Card.Text>
                  The radiance lives on in the Nike Air Force 1 '07, the basketball original that puts a fresh spin on what you know best: durably stitched overlays, clean finishes and the perfect amount of flash to make you shine.
                  </Card.Text>
                  <Button variant="primary">119.99€</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/14d158fe-6388-4b23-afac-10a13e5311cc/dunk-low-retro-shoes-szNRv1.png" />
                <Card.Body>
                  <Card.Title>Nike Dunk Low</Card.Title>
                  <Card.Text>
                  Created for the hardwood but taken to the streets, the '80s b-ball icon returns with embroidered details, contrast stitching and throwback hoops flair. Its padded, low-cut collar lets you take your game anywhere—in comfort.
                  </Card.Text>
                  <Button variant="primary">119.99€</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/e9b0638f-2702-47e9-b2cc-8f8003440e32/air-more-uptempo-96-shoes-pgLhk5.png" />
                <Card.Body>
                  <Card.Title>Nike Air More Uptempo '96</Card.Title>
                  <Card.Text>
                  How do we describe the Nike Air More Uptempo '96? Bold, eye-catching and all about the AIR. With a design inspired by high-flying basketball style and '90s graffiti art, these kicks can't help but turn heads. Vibrant red and white accents refresh an original that has reigned supreme for more than 20 years while Air units provide comfortable cushioning.
                  </Card.Text>
                  <Button variant="primary">179.99€</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
        <h5>© 2023 SHOES4U, Inc. All Rights Reserved</h5>
      </main>
      
      <footer class="py-5 my-5 bg-dark">
       
      </footer>
      
    </div>
  );
}

export default App;