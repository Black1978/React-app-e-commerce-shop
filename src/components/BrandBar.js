import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Card, Row } from 'react-bootstrap'
import { Context } from '..'

const BrandBar = observer(() => {
    const { device } = useContext(Context)
    return (
        <div>
            <Row className='d-flex'>
                {device.brands.map((el) => (
                    <Card
                        key={el.id}
                        className='p-3'
                        style={{ cursor: 'pointer' }}
                        border={el.id === device.selectedBrand.id ? 'danger' : 'light'}
                        onClick={() => device.setSelectedBrand(el)}
                    >
                        {el.name}
                    </Card>
                ))}
            </Row>
        </div>
    )
})

export default BrandBar
