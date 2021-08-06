import React, { useState } from 'react'
import { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import { Modal, Button, Form, Dropdown, Row, Col } from 'react-bootstrap'
import DropdownItem from 'react-bootstrap/esm/DropdownItem'
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu'
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle'
import { Context } from '../..'

const CreateDevice = observer(({ show, onHide }) => {
    const { device } = useContext(Context)
    const [info, setInfo] = useState([])
    const addInfo = () => {
        setInfo([...info, { title: '', description: '', number: Date.now() }])
    }
    const removeInfo = (number) => {
        setInfo(info.filter(item => item.number !== number ))
    }
    return (
        <Modal show={show} onHide={onHide} size='lg' centered>
            <Modal.Header closeButton>
                <Modal.Title id='contained-modal-title-vcenter'>To add a new device</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown className='mt-3 mb-3'>
                        <DropdownToggle>Choose type</DropdownToggle>
                        <DropdownMenu>
                            {device.types.map((item) => (
                                <DropdownItem key={item.id}>{item.name}</DropdownItem>
                            ))}
                        </DropdownMenu>
                    </Dropdown>
                    <Dropdown className='mt-3 mb-3'>
                        <DropdownToggle>Choose brand</DropdownToggle>
                        <DropdownMenu>
                            {device.brands.map((item) => (
                                <DropdownItem key={item.id}>{item.name}</DropdownItem>
                            ))}
                        </DropdownMenu>
                    </Dropdown>
                    <Form.Control
                        placeholder='Enter the device name'
                        className='mt-3'
                    ></Form.Control>
                    <Form.Control
                        placeholder="Enter the device's price"
                        className='mt-3'
                        type='number'
                    ></Form.Control>
                    <Form.Control
                        placeholder='Enter the price'
                        className='mt-3'
                        type='file'
                    ></Form.Control>
                    <hr />
                    <Button variant='outline-dark' onClick={() => addInfo()}>
                        To add a new feature
                    </Button>
                    {info.map((item) => (
                        <Row className='mt-4' key={item.number}>
                            <Col md={4}>
                                <Form.Control placeholder='Enter the feature name'></Form.Control>
                            </Col>
                            <Col md={4}>
                                <Form.Control placeholder='Enter the feature description'></Form.Control>
                            </Col>
                            <Col>
                            <Button variant='outline-danger' onClick={() => removeInfo(item.number)}>To delete the feature</Button>
                            </Col>
                        </Row>
                    ))}
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='outline-danger' onClick={onHide}>
                    Close
                </Button>
                <Button variant='outline-success' onClick={onHide}>
                    Add
                </Button>
            </Modal.Footer>
        </Modal>
    )
})

export default CreateDevice
