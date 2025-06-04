import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'


const CustomNavbar = () => {

    const [show, setShow] = useState(false)

    const handleClose = () => setShow (false)
    const handleShow = () => setShow(true)

return (
    <>
        <Navbar expand="md" style={{ backgroundColor: '#002f6c'}} variant="dark" className="px-3 shadow-sm">
            <Container fluid>
                <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
                    <img src='/uniesp.jpg' alt='Uniesp Logo' width={60} height={60} className='me-2 rounded'/>
                </Navbar.Brand>

                {/* Botão hamburguer visível apenas em telas pequenas */}
                <Navbar.Toggle onClick={handleShow}/>
                    <Navbar.Collapse className='justify-content-end d-none d-md-flex'>
                        <Nav>
                            <Nav.Link as={Link} to="/a-faculdade" className='px-3'> A Faculdade</Nav.Link>
                            <Nav.Link as={Link} to="/dpo-lgpd" className='px-3'> DPO LGPD</Nav.Link>
                            <Nav.Link as={Link} to="/noticias" className='px-3'> Notícias</Nav.Link>
                            <Nav.Link as={Link} to="/admin-noticias" className='px-3'> Admin</Nav.Link>
                        </Nav>

                    </Navbar.Collapse>

            </Container>

        </Navbar>

    </>
)
}

export default CustomNavbar
