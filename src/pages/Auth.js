import React from 'react'
import { Button, Card, Container, Form, Row } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { REGISTRATION_ROUTE } from '../utils/consts'

const Auth = () => {
    return (
        <Container
            className='d-flex justify-content-center align-items-center'
            style={{ height: window.innerHeight - 54 }}
        >
            <Card style={{ width: 600 }} className='p-5'>
                <h2 className='m-auto'>Authorization</h2>
                <Form className='d-flex flex-column'>
                    <Form.Control
                        placeholder='Please enter your e-mail'
                        className='mt-3'
                    ></Form.Control>
                    <Form.Control
                        placeholder='Please enter your password'
                        className='mt-3'
                    ></Form.Control>
                    <Row className='d-flex justify-content-between mt-3 pl-3 pr-3'>
                        <div>
                            Don't you have an account yet?
                            <NavLink to={REGISTRATION_ROUTE}> Registration</NavLink>
                        </div>
                        <Button variant='outline-success' className='mt-3'>
                            Enter
                        </Button>
                    </Row>
                </Form>
            </Card>
        </Container>
    )
}

export default Auth
