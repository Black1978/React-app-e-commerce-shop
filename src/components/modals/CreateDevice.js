import React, {useState} from 'react'
import { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import { Modal, Button, Form, Dropdown } from 'react-bootstrap'
import DropdownItem from 'react-bootstrap/esm/DropdownItem'
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu'
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle'
import { Context } from '../..'

const CreateDevice = observer(({ show, onHide }) => {
    const { device } = useContext(Context)
    const [info, setInfo] = useState([])
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
                        placeholder='Enter the device name'
                        className='mt-3'
                        type='number'
                    ></Form.Control>
                    <Form.Control
                        placeholder='Enter the price'
                        className='mt-3'
                        type='file'
                    ></Form.Control>
                    <hr/>
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
