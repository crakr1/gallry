import "bootstrap/dist/css/bootstrap.min.css"
import {Navbar, Container,  Nav, Button } from 'react-bootstrap';
import '../theme/loader.css'
import 'bootstrap'

function HomePage() {
    return (
   <>
   
    <Navbar bg="dark" data-bs-theme="dark">
            <Container> 
                <Navbar.Brand href="/">gallery</Navbar.Brand>
                <Nav className="">
                    <Nav.Link href="/login">
                        <Button variant="success">تسجيل دخول</Button>
                    </Nav.Link>
                    <Nav.Link href="/register" className=''>
                    <Button variant="primary">انشاء حساب</Button>
                    </Nav.Link>
                </Nav>
            </Container>    
        </Navbar>
        <div className="p-2">
            <Container>
            <div className="row">
                <div className="col-sm-6 col-md-3">
                    <div className=" ">
                        <img className="card-img-top" src="../image/IMG_20220103_173254.jpg"/>                   
                    </div>
                </div>
            </div>
            </Container>
        </div>   
    </>

    )
}

export default HomePage