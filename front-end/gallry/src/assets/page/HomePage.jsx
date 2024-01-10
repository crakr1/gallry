import "bootstrap/dist/css/bootstrap.min.css"
import {Navbar, Container,  Nav, Button } from 'react-bootstrap';
import '../theme/loader.css'
import 'bootstrap'
import axios from '../config/axios'
import { ALL_POST  } from "../config/url";
import { useState, useEffect } from "react";
import Loader from "../components/loader";

function HomePage() {
    const [showLoading, setShowLoading] = useState(false)
    const [post, setPost] = useState()

    useEffect(() => {
        getPosts()
    }, [])

    const login = window.localStorage.getItem("CapacitorStorage.token")

    const getPosts = async () => {
        setShowLoading(true)
        try {
            await axios.get(ALL_POST, {
                headers: login
            }).then(res => {
                console.log(res)
                setPost(res.data)
                setShowLoading(false)
            })
        } catch(e) {
            console.log(e)
            setShowLoading(false)
        }
    }
    
    return (   
   <>
   {showLoading? <Loader isOpen={showLoading}/>: 
   <>
     {login?  <Navbar bg="dark" data-bs-theme="dark">
            <Container> 
                <Navbar.Brand href="/">gallery</Navbar.Brand>
                <Nav className="">
                    <Nav.Link href="/login">
                        <Button variant="success">منشوراتي</Button>
                    </Nav.Link>
                    <Nav.Link href="/register" className=''>
                    <Button variant="primary">انشاء منشور</Button>
                    </Nav.Link>
                </Nav>
            </Container>    
        </Navbar>
        : 
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
        }
       { post?.map((post) => {
        console.log(post.image)
            return(
                <div className="p-2" key={post._id}>
                    <Container>
                        <div className="row">
                            <div className="card col col-md-3" style={ {width: "18rem"}}>
                                <img src={post.image} className="card-img-top"/>
                                <div className="card-body">
                                    <h5 className="card-title">{post.title}</h5>
                                    <p className="card-text">{post.description}</p>
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>   
            )
        })}

   </>
   }
 
    </>

    )
}

export default HomePage