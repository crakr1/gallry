import "bootstrap/dist/css/bootstrap.min.css"
import { Card, Container, Navbar, Nav,Button} from 'react-bootstrap';
import '../theme/login.css'
import {useFormik} from 'formik'
import { signValidation } from "../middlewares/signValidation";
import axios from '../config/axios'
import { LOGIN_URL } from "../config/url";

const onSubmit = async (values) => {
    try{
        await axios.post(LOGIN_URL, values).then(res => {
            console.log(res)
        })
    } catch (e) {
        console.log(e.message)
    }
}
const initialValues = {
    email: '',
    password: '',
}
function Login() {
    const {values, handleBlur, handleChange, handleSubmit, errors} = useFormik({
        initialValues: initialValues,
        validationSchema: signValidation,
        onSubmit: (values) => {
            onSubmit(values)
        }
    })
    return (
    <>
        <Navbar bg="dark" data-bs-theme="dark">
            <Container> 
                <Navbar.Brand href="/">gallery</Navbar.Brand>
                <Nav className="">
                    <Nav.Link href="/register" className=''>
                    <Button variant="primary">انشاء حساب</Button>
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>           <Container className="card-theme" >
            <Card className="mt-5 card-" >
                <Card.Body>
                    <Card.Title> تسجيل دخول</Card.Title>
                    <form onSubmit={handleSubmit}>
                        <div className="form-floating mb-3">
                            <input type="email" name="email" 
                            className="form-control" id="floatingInput" 
                            placeholder="name@example.com" value={values.email}
                            onBlur={handleBlur} onChange={handleChange}
                            />
                            <label htmlFor="email">البريد الاكتروني</label>
                            {errors.email && <small>{errors.email}</small>}
                        </div>
                        <div className="form-floating mb-3">
                            <input type="password" name="password"
                            className="form-control " 
                            placeholder="Password" value={values.password}
                            onBlur={handleBlur} onChange={handleChange}
                            />
                            <label htmlFor="password">الرمز</label>
                            {errors.password && <small>{errors.password}</small>}                
                        </div>
                        <button type="submit" className="btn btn-primary">تسجيل الدخول</button>
                    </form>   
                    <div className="mt-3"> ليس لديك حساب؟<a className="link" href="/register"> انشاء حساب</a></div> 
                </Card.Body>
            </Card>

        </Container>    
    </>

    )
}

export default Login