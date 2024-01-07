import "bootstrap/dist/css/bootstrap.min.css"
import { Card, Container, Navbar, Nav,Button} from 'react-bootstrap';
import '../theme/login.css'
import {useFormik} from 'formik'
import { signValidation } from "../middlewares/signValidation";
import axios from '../config/axios';
import { REGISTER_URL } from "../config/url";

const onSubmit = async (values) => {
    try{
        await axios.post(REGISTER_URL, values).then(res => {
            console.log(res)
        })
    } catch (e) {
        console.log(e.message)
    }
}
const initialValues = {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
}
function Register() {
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
                    <Nav.Link href="/login">
                        <Button variant="success">تسجيل دخول</Button>
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>           <Container className="card-theme" >
            <Card className="mt-5 card-" >
                <Card.Body>
                    <Card.Title>انشاء حساب</Card.Title>
                    <form onSubmit={handleSubmit}>
                        <div className="form-floating mb-3">
                            <input type="text" name="name" 
                            className="form-control" id="floatingInput"  
                            placeholder="الاسم" value={values.name}
                            onBlur={handleBlur} onChange={handleChange}
                            />
                            <label htmlFor="name">الاسم</label>
                            {errors.name && <small>{errors.name}</small>}
                        </div>
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
                        <div className="form-floating">
                            <input type="password" name="confirmPassword"
                            className="form-control mb-3" id="floatingPassword" 
                            placeholder="confirmPassword" value={values.confirmPassword}
                            onBlur={handleBlur} onChange={handleChange}
                            />
                            <label htmlFor="confirmPassword">تاكيد الرمز</label>
                            {errors.confirmPassword && <small style={{color: 'danger'}}>{errors.confirmPassword}</small>}
                        </div>
                        <button type="submit" className="btn btn-primary">انشاء الحساب </button>
                    </form>    
                    <div className="mt-3"> لديك حساب بالفعل؟ <a className="link" href="/login">سجل دخولك</a></div>

                </Card.Body>
            </Card>

        </Container>    
    </>

    )
}

export default Register