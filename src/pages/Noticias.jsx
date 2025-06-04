import React, { useEffect, useState } from 'react'
import { Card, Col, Container, Row, CardImg } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import noticiasData from '../data/noticias'

const Noticias = () => {
    const [noticias, setNoticias] = useState([])

    useEffect(() => {
        // Aqui não há requisição HTTP, é local
        setNoticias(noticiasData)
    }, [])

    return (
        <Container className='py-4'>
            <h2 className='mb-4'>Notícias</h2>
            <Row className='g-4'>
                {
                    noticias.map(noticia => (
                        <Col xs={12} sm={6} md={4} key={noticia.id}>
                            <Card className="h-100 shadow-sm">
                                <CardImg
                                    variant='top'
                                    src='/visuNot.png'
                                    alt='Imagem da Noticia'
                                    style={{ objectFit: 'cover', height: '140px' }} />
                                <Card.Body>
                                    <Card.Title>{noticia.titulo}</Card.Title>
                                    <Link
                                        to={`/visualiza-noticia/${noticia.id}`}
                                        className='text-decoration-none text-primary'
                                    >
                                        <small>Ler mais</small>
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                }
            </Row>
        </Container>
    )
}

export default Noticias
