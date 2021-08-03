import React from 'react'
import { Col, Container, Image, Row, Card, Button } from 'react-bootstrap'
import bigStar from './../assets/bigStar.svg'

const DevicePage = () => {
    const device = {
        id: 1,
        name: 'Iphone 12 pro',
        price: 12000,
        rating: 5,
        img: 'https://www.ixbt.com/img/x780/n1/news/2021/0/4/1605321957_poznakomtes-s-luchshimi-funkcziyami-iphone-12-pro-max_large.jpg',
    }
    const description = [
        { id: 1, title: 'RAM size', description: '5 gB' },
        { id: 2, title: 'Camera', description: '30 mP' },
        { id: 3, title: 'Processor', description: 'Pentium 5' },
        { id: 4, title: 'Cores quantity', description: '4 ps' },
        { id: 5, title: 'Accumulation', description: '4000 vh' },
    ]
    return (
        <Container className='mt-4'>
            <Row>
                <Col md={4}>
                    <Image src={device.img} width={300} height={300}></Image>
                </Col>
                <Col md={4}>
                    <Row className='d-flex flex-column justify-content-center align-items-center'>
                        <h2>{device.name}</h2>
                        <div
                            className='d-flex justify-content-center align-items-center'
                            style={{
                                background: `url(${bigStar}) no-repeat center center`,
                                width: 240,
                                height: 240,
                                fontSize: '56px',
                                backgroundSize: 'cover',
                            }}
                        >
                            {device.rating}
                        </div>
                    </Row>
                </Col>
                <Col md={4}>
                    <Card
                        className='d-flex flex-column justify-content-around align-items-center'
                        style={{
                            width: 300,
                            height: 300,
                            fontSize: 32,
                            border: '5px solid lightgray',
                        }}
                    >
                        <h3>$ {device.price}</h3>
                        <Button variant={'outline-dark'}>Add to the backet</Button>
                    </Card>
                </Col>
            </Row>
            <Row className='d-flex flex-column m-3'>
                <h2>The device characteristics:</h2>
                {description.map((item) => (
                    <Row key={item.id} style={{background: item.id % 2 === 0 && 'lightgray', padding: 10}}>
                        {item.title} : {item.description}
                    </Row>
                ))}
            </Row>
        </Container>
    )
}

export default DevicePage
