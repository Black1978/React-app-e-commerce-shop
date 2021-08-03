import React from 'react'
import { Card, Col, Image } from 'react-bootstrap'
import star from './../assets/star.png'
import { useHistory } from 'react-router-dom'

const DeviceItem = ({ item }) => {
    const history = useHistory()
    console.log(history)
    return (
        <Col md={3}>
            <Card style={{ width: 150, cursor: 'pointer' }} border={'light'} className='mt-3'>
                <Image width={150} height={150} src={item.img}></Image>
                <div className='text-black-50 d-flex justify-content-between align-items-center mt-1'>
                    <div>Samsung</div>
                    <div className='d-flex align-items-center'>
                        <div>{item.rating}</div>
                        <Image src={star} width={18} height={18}></Image>
                    </div>
                </div>
                <div>{item.name}</div>
            </Card>
        </Col>
    )
}

export default DeviceItem
